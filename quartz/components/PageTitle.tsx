import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { i18n } from "../i18n"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/Logo.png")
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img class="Logo" src={iconPath} alt={title}/>
      </a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
.Logo {
max-height: 650px;
min-height: 50px;
max-width: 240px;
min-width: 50px;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
