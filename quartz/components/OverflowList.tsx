import { JSX } from "preact"

const OverflowList = ({
  children,
  ...props
}: JSX.HTMLAttributes<HTMLUListElement> & { id: string }) => {
  return (
    <ul class="overflow" {...props}>
      {children}
      <li class="overflow-end" />
    </ul>
  )
}

OverflowList.afterDOMLoaded = (id: string) => `
document.addEventListener("nav", (e) => {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const parentUl = entry.target.parentElement
      if (entry.isIntersecting) {
        parentUl.classList.remove("gradient-active")
      } else {
        parentUl.classList.add("gradient-active")
      }
    }
  })

  const ul = document.getElementById("${id}")
  if (!ul) return

  const end = ul.querySelector(".overflow-end")
  if (!end) return

  observer.observe(end)
  window.addCleanup(() => observer.disconnect())
})
`

export default OverflowList
