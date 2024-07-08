import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span>
            <img src=""></img>
            <a href="/Guides/index">Guides</a>
          </span>
          <span>
            <img src=""></img>
            <a href="/Modding Tools/index">Modding Tools</a>
          </span>
          <span>
            <img src=""></img>
            <a href="/TES3 Construction Set/index">Construction Set</a>
          </span>
          <span>
            <img src=""></img>
            <a href="/Programmers Reference/index">Programmers Reference</a>
          </span>
          <span>
            <img src=""></img>
            <a href="/Programmers Reference/index">Projects</a>
          </span>
          <span>
            <img src=""></img>
            <a href="/MMW Design & Planning/index">Contributing</a>
          </span>
        </div>
      <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
