import { ContentDetails } from "../plugins/emitters/contentIndex"
import { FullSlug, joinSegments } from "./path"

interface FileTrieData {
  slug: string
  title: string
}

export class FileTrieNode<T extends FileTrieData = ContentDetails> {
  children: Array<FileTrieNode<T>>
  slugSegment: string
  displayName: string
  data: T | null
  depth: number
  isFolder: boolean

  constructor(segment: string, data?: T, depth: number = 0) {
    this.children = []
    this.slugSegment = segment
    this.displayName = data?.title ?? segment
    this.data = data ?? null
    this.depth = depth
    this.isFolder = segment === "index"
  }

  private insert(path: string[], file: T) {
    if (path.length === 0) return

    const nextSegment = path[0]

    // base case, insert here
    if (path.length === 1) {
      if (nextSegment === "index") {
        // index case (we are the root and we just found index.md)
        this.data ??= file
        const title = file.title
        if (title !== "index") {
          this.displayName = title
        }
      } else {
        // direct child
        this.children.push(new FileTrieNode(nextSegment, file, this.depth + 1))
        this.isFolder = true
      }

      return
    }

    // find the right child to insert into, creating it if it doesn't exist
    path = path.splice(1)
    let child = this.children.find((c) => c.slugSegment === nextSegment)
    if (!child) {
      child = new FileTrieNode<T>(nextSegment, undefined, this.depth + 1)
      this.children.push(child)
      child.isFolder = true
    }

    child.insert(path, file)
  }

  // Add new file to trie
  add(file: T) {
    this.insert(file.slug.split("/"), file)
  }

  /**
   * Filter trie nodes. Behaves similar to `Array.prototype.filter()`, but modifies tree in place
   */
  filter(filterFn: (node: FileTrieNode<T>) => boolean) {
    this.children = this.children.filter(filterFn)
    this.children.forEach((child) => child.filter(filterFn))
  }

  /**
   * Map over trie nodes. Behaves similar to `Array.prototype.map()`, but modifies tree in place
   */
  map(mapFn: (node: FileTrieNode<T>) => void) {
    mapFn(this)
    this.children.forEach((child) => child.map(mapFn))
  }

  /**
   * Sort trie nodes according to sort/compare function
   */
  sort(sortFn: (a: FileTrieNode<T>, b: FileTrieNode<T>) => number) {
    this.children = this.children.sort(sortFn)
    this.children.forEach((e) => e.sort(sortFn))
  }

  static fromEntries<T extends FileTrieData>(entries: [FullSlug, T][]) {
    const trie = new FileTrieNode<T>("")
    entries.forEach(([, entry]) => trie.add(entry))
    return trie
  }

  /**
   * Get all entries in the trie
   * in the a flat array including the full path and the node
   */
  entries(): [FullSlug, FileTrieNode<T>][] {
    const traverse = (
      node: FileTrieNode<T>,
      currentPath: string,
    ): [FullSlug, FileTrieNode<T>][] => {
      const segments = [currentPath, node.slugSegment]
      const fullPath = joinSegments(...segments) as FullSlug

      const indexQualifiedPath =
        node.isFolder && node.depth > 0 ? (joinSegments(fullPath, "index") as FullSlug) : fullPath

      const result: [FullSlug, FileTrieNode<T>][] = [[indexQualifiedPath, node]]

      return result.concat(...node.children.map((child) => traverse(child, fullPath)))
    }

    return traverse(this, "")
  }

  /**
   * Get all folder paths in the trie
   * @returns array containing folder state for trie
   */
  getFolderPaths() {
    return this.entries()
      .filter(([_, node]) => node.isFolder)
      .map(([path, _]) => path)
  }
}
