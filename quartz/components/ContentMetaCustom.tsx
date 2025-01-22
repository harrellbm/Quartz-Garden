import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showDates: boolean
  showReadingTime: boolean
  showComma: boolean
  showCustomField: boolean
  customField: Array<string>
}

const defaultOptions: ContentMetaOptions = {
  showDates: true,
  showReadingTime: true,
  showComma: false,
  showCustomField: false,
  customField: []
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (options.showDates) {
        if (fileData.dates) {
          segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
        }
      }

      if (options.showCustomField) {
        for (let i in options.customField) {
          let key = options.customField[i]
          //console.log("This is the field key ", key)
          if (fileData.frontmatter[key] != undefined) {
            let data = fileData.frontmatter[key]
            //console.log("This is the field data ", data) 
            segments.push(<span><b> {key} </b>: {data} <br/></span>)
          }
        }
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
