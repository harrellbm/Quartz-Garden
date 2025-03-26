---
{"publish":true,"Note Planted":"2024-10-22","Last Tended":"2025-03-20","PassFrontmatter":true}
---

#🍋Fruit   #😁Strongly-Agree   #📊Project
****
>`Importance`: 50%

> [!Summary] The Big Idea
>  A personal project to build a package for the typesetting tool Typst that allows for easy formatting of bulletins and booklets.

* * *
## Features 

Fully customizable page numbers. Can define as many layouts for different page ranges. Every layout has a start number and alt start number to display and a style. Each style can define values for all, even or odd pages 

Easily switch between drafting and signature ordering 

TODO: make a nice description of features 

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

## Sig 0.4.0

- [ ] Abstract out composing page to its own function 
- [ ] Make it possible to add none to page pattern to remove page number for even and odd pages 
- [ ] Tab page number (a number that has a shape under it)
- [ ] Add marks for signature stitching holes or staple guides
- [ ] Add page number layout setting for setting custom font for page number 
- [ ] Add defaults for all different settings so that you only have to define the settings you want to change 
- [ ]  Write manual (use AI) and tidy typst package 
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

- Support for 8 16 and 32 page signatures 
- Need to add back in flipping pages from zine example package to create the more complex signatures 

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