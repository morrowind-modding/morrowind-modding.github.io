// @ts-ignore: this is safe, we don't want to actually make darkmode.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import commentsScript from "./scripts/comments.inline"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Footer(props: QuartzComponentProps) {
  return (
  <script src="https://giscus.app/client.js"
    data-repo="morrowind-modding/wiki"
    data-repo-id="R_kgDOLP1-Jw"
    data-category="General"
    data-category-id="DIC_kwDOLP1-J84CdRF9"
    data-mapping="title"
    data-strict="0"
    data-reactions-enabled="1"
    data-emit-metadata="0"
    data-input-position="bottom"
    data-theme="dark"
    data-lang="en"
    crossorigin="anonymous"
    async>
  </script>
  )
}

Footer.beforeDOMLoaded = commentsScript

export default (() => Footer) satisfies QuartzComponentConstructor
