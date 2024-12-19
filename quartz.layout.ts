import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
  ],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'harrellbm/Quartz-Garden',
        // from data-repo-id
        repoId: 'R_kgDOMhMnDQ',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOMhMnDc4Ciuq4',
        // where to put the comment input box relative to the comments
        // defaults to 'bottom'
        inputPosition: "top",
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/harrellbm/Quartz-Garden",
      "Email": "brendenharrell1@gmail.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    //Component.ContentMeta(),
    Component.ContentMetaCustom({showDates: false, showReadingTime: true, showComma: false, showCustomField: true, customField: ['Note Planted:', 'Last Tended:']}),
    //Component.TagList(),
  ],
  left: [
    Component.Search(),
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(), 
    Component.DesktopOnly(Component.Graph({
        localGraph: {
          drag: true, // whether to allow panning the view around
          zoom: true, // whether to allow zooming in and out
          depth: 1, // how many hops of notes to display
          scale: 1.5, // default view scale
          repelForce: 0.5, // how much nodes should repel each other
          centerForce: 0.3, // how much force to use when trying to center the nodes
          linkDistance: 30, // how long should the links be by default?
          fontSize: 0.9, // what size should the node labels be?
          opacityScale: 1, // how quickly do we fade out the labels when zooming out?
          removeTags: [], // what tags to remove from the graph
          showTags: true, // whether to show tags in the graph
        },
        globalGraph: {
          drag: true,
          zoom: true,
          depth: -1,
          scale: 0.9,
          repelForce: 2.5,
          centerForce: 1.5,
          linkDistance: 45,
          fontSize: 0.6,
          opacityScale: 0.9,
          removeTags: [], // what tags to remove from the graph
          showTags: true, // whether to show tags in the graph
        },
      })),
    Component.RecentNotes({title:"Recent Thoughts", showTags: false}),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMetaCustom(),
  ],
  left: [
    Component.Search(),
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.RecentNotes({title:"Recent Thoughts", showTags: false}),
  ],
}
