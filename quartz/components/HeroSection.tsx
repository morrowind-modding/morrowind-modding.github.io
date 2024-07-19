import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/heroSection.scss"

export default (() => {
    const HeroSection: QuartzComponent = ({
        fileData,
    }: QuartzComponentProps) => {
        // Hide HeroSection on every page except homepage
        if (fileData.slug !== "index") {
            return <></>
        }
        // Display HeroSection on homepage
            return (
            <div class="hero">
                <h1>Your source for modding Morrowind</h1>
                <p>Bringing together over twenty years of community knowledge.</p>
                <a href="/contributing/" class="btn-primary">Become a contributer</a>
            </div>
            )
    }

  HeroSection.css = style
    return HeroSection
  })
