---
publish: true
Note Planted: 2024-10-22
Last Tended: 2025-10-23
updated: 2025-10-30T09:55:05.553-07:00
edited_seconds: 784
---
#🍋Fruit   #😁Strongly-Agree   #📊Project   #🛠️BringingLifeintotheWorld 

****

> [!Summary] The Big Idea
> A personal project to build a package for the typesetting tool Typst that allows for easy formatting of bulletins and booklets.

* * *

## Features 

Fully customizable page numbers. Can define as many layouts for different page ranges. Every layout has a start number and alt start number to display and a style. Each style can define values for all, even or odd pages 

Easily switch between drafting and signature ordering 
## Sig 0.1.0

- [x] Initial support for only single fold four page sheets to add into signatures 
- [x] Sig function: basic function that takes in array and puts out content in a signature. Able to manually do multiple signatures this way
	- [x] Toggle signature and normal ordering easily 
	- [x] Support for various paper sizes 
	- [x] Extra symbol page number 
	- [x] Expose settings for page padding 
	- [x] Make it easy to Leave margin space on inside of pages for binding

## Sig 0.2.0

- [x] Auto add last blank page for odd amount of pages
- [x] Add ability to left right pad page number 
- [x] Handle page to start numbering on 
- [x] Handle different style of numbering for different page ranges 
- [x] Idea of a dictionary for defining the page number stuff so you can provide multiple 
- [x] Update examples 
- [x] Update docstrings 
- [x] Update readme
- [x] Make a dedicated GitHub repository

## Sig 0.3.0

- [x] Ability to alternate page numbers left and right on facing pages making it possible to put page numbers on the outside or inside of the pages.
- [x] Use the native page function to define paper type, and outside margins
- [x] Make it possible to have no page number by only defining p-num-start for the page range and p-num-pattern as none (no need to define alt start)
- [x] Update examples 
- [x] Update docstrings 
- [x] Update readme
- [x] post to packages repo
- [x] Ability to define page style per even and odd pages. Basically a sub dictionary that you can define setting for: all, even and odd pages for the layout 
	- [x] Allow alternating page number patterns Adjust horizontal is the most important to put page numbers on outside or inside edge of pages 
- [x] Use native page function for formatting the document's page attributes
## Sig 0.3.1 and 0.3.2

- [x] Add defaults for all different settings so that you only have to define the settings you want to change 
- [x] Clean up documentation and examples
## Sig 0.4.0

- [ ] Add center-blank property. If set to true will place needed blank pages in the center of the signature in order fill out clean sets of four. (Default is to place blank pages at the end of the signature).  This offers three distinct scenarios: 
	1. For example, 5 pages will put out one full front and back four half sheet signature page. The second signature page will have a single half sheet and three blank half sheets. This allows for cutting the single half sheet from the blank pages and inserting it into the signature.
	2. 6 pages will put out the same full front and back signature, but will have a front and back half sheet next to two blank half sheets. Also allowing for cutting the blank half sheet and inserting into the signature. Note: (This creates a six page booklet with the least amount of paper possible). 
	3. 7 pages will print the same full signature page as above and the second signature page will have three half sheets and the one blank half sheet will be placed at its end. (This is the least useful option but handled for consistency) 
- [ ] Add option to lay out signatures for single sided printing. Have an output pdf for "front" then and output pdf for "back" 
- [ ] Wait for typst 0.14 and then add the ability to add a helper function to generate the content block needed to add a pdf as pages in a book. basically pdf is added as an image that image is added as one content block that ends up being one page in the booklet
## Sig 0.5.0

- [ ] Make a nice description of features 
- [ ] Page number features
	- [ ]  Implement a way to only apply a page number layout to even or odd pages
		- [ ] Make it possible to add none to page pattern to remove page number for even or odd pages
	- [ ] Make it so that the number padding can be added to left or right not just left
	- [ ] Add page number layout setting for setting custom font for page number 
	- [ ] Tab page number (a number that has a shape under it)
- [ ] Add marks for signature stitching holes or staple guides
- [ ] Write manual (use AI) and tidy typst package 
- [ ] Make post in showcase in discord

## Booklet function
wrapper of sig function that adds convenience features like auto break into pages. But only handles a single signature

> [!NOTE] 
> Currently this feature seems impossible with Typst's set of features.

- [ ] More robust convenience boarder settings 
- [ ] auto breaks content into pages 

## Book function
same as booklet but has options for multi signature set ups 

- [ ] Handle multi signatures. Tell it how many sheets per signature

## Wishlist 
- Need to add back in flipping pages from zine example package to create the more complex signatures 
- Think about how the signatures could be made for some of these different binding types:
- https://www.thebookdesigner.com/self-publishing-basics-5-book-binding-styles-illustrated/
- Interesting video on how to stitch a 16 and 32 pane signature:[ Imposing, folding, and saddle stitching 16 and 32 page signatures](https://youtu.be/OT3Ecz7ib9c)

# Bookbinding and Typesetting resources

[Using Pandoc and Typst to make PDF overview](https://imaginarytext.ca/posts/2024/pandoc-typst-tutorial/)

[Using Pandoc and Typst to make a book](https://imaginarytext.ca/posts/2024/more-typst/)

## Ways to build a signature
[Printer spread key](https://images.app.goo.gl/9MMFTRDs9dqZdS7f7)

[How many sheets per signature](https://forestandfolio.com/how-many-sheets-of-paper-per-signaure/)  

[Cut quarter booklet](https://images.app.goo.gl/WiAZEcCgUhkexETS7) 

[Fold 16 page zine](https://m.youtube.com/watch?v=bkUxrDfgv8U) 

[Book typesetting rules](https://pin.it/5aJkzmh04) 

## Background and boarders 

- Figure out how to have a fancy boarder around page 
- Figure out how to have a fancy graphic header 

[Typst droplet capitals](https://typst.app/universe/package/droplet/) 

[Make patterns in a different way](https://typst.app/universe/package/modpattern/)

[Add ordinal package](https://typst.app/universe/package/nth/) 

[Color palettes](https://typst.app/universe/package/splash/)

[Package tools](https://typst.app/universe/package/t4t/)

[Manual writing package](https://typst.app/universe/package/mantys/)

[Docstring generator for typst](https://typst.app/universe/package/tidy/)

[mantys package](https://typst.app/universe/package/mantys/)  

[Better heading querying and displaying](https://typst.app/universe/package/hydra/) 

[Add ability to add margin notes](https://typst.app/universe/package/drafting/)

[Know the anatomy of a font](https://typst.app/universe/package/anatomy/)

[Creat summaries for book sections](https://typst.app/universe/package/outline-summaryst/)