import { FullSlug, getFullSlug, pathToRoot, simplifySlug } from "../../util/path"

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

function isValidUrl(newSlug: string, oldSlug: String) {
  return oldSlug !== newSlug && !newSlug.includes("/contributing/")
}

async function navigateToRandomPage() {
    const fullSlug = getFullSlug(window)
    const data = await fetchData
    const allPosts = Object.keys(data).map((slug) => simplifySlug(slug as FullSlug))
    // window.location.href = `${pathToRoot(fullSlug)}/${allPosts[getRandomInt(allPosts.length - 1)]}`
    let newSlug = `${pathToRoot(fullSlug)}/${allPosts[getRandomInt(allPosts.length - 1)]}`;

    while (!isValidUrl(newSlug, fullSlug)) {
      newSlug = `${pathToRoot(fullSlug)}/${allPosts[getRandomInt(allPosts.length - 1)]}`;
    }
    window.location.href = newSlug;
}

document.addEventListener("nav", async (e: unknown) => {
//   const slug = (e as CustomEventMap["nav"]).detail.url
  const button = document.getElementById("random-page-button")
  button?.removeEventListener("click", navigateToRandomPage)
  button?.addEventListener("click", navigateToRandomPage)
})
