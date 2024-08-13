import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaCustomOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaCustomOptions = {
  showReadingTime: true,
  showComma: false,
}

export default ((opts?: Partial<ContentMetaCustomOptions>) => {
  // Merge options with defaults
  const options: ContentMetaCustomOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []
      let created 
      let modified

      if (fileData.frontmatter['Note Planted:']) {
        
        console.log("this is the file dates", fileData.frontmatter['Note Planted:'])
        let date = fileData.frontmatter['Note Planted:']
        created = <div><b>Note Planted</b>: {date} <br/></div>
      }

      if (fileData.frontmatter['Last Tended:']) {
        
        console.log("this is the file dates", fileData.frontmatter['Last Tended:']) 
        let date = fileData.frontmatter['Last Tended:']
        modified = <div><b>Last Tended</b>: {date} <br/></div>
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(displayedTime)
      }

      const segmentsElements = segments.map((segment) => <span>{segment}</span>)
      
      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {created}
          {modified}
          {segmentsElements}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
