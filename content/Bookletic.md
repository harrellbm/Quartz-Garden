---
"Note Planted:": 2024-06-27
"Last Tended:": 2024-09-17
---
#🍋Fruit #😁Strongly-Agree #📊Project
****
>`Importance`: 40%

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

## Sig 0.2.1

- [ ] Handle page size by gathering overall page dimensions from built in context object rather than hardcoded.
## Sig 0.3.0

- [ ] Ability to define page style per even and odd pages. Basically a sub dictionary that you can define setting for, all, even and odd pages for the layout 
	- [ ] Adjust horizontal is the most important to put page numbers on outside or inside edge of pages 
	- [ ] Document change 
	- [ ] Add page number layout setting for setting custom font for page number 
	- [ ] Add defaults for all different settings so that you only have to define the settings you want to change 
	- [ ] Make it possible to have no page number by only defining with style with none and range with start page (no need to define alt start)
- [ ] Write manual (use AI) and tidy typst package 
- [ ] Make post in showcase in discord
- [ ] Remove hardcoding of page size. Maybe use query to get the document size?
- [ ] Abstract out composing page to its own function 
- [ ] Update examples 
- [ ] Update docstrings 
- [ ] Update readme

## Sig 0.4.0

- [ ] Make it possible to add none to page pattern to remove page number for even and odd pages 
- [ ] Tab page number (a number that has a shape under it)
- [ ] Add marks for signature stitching holes or stable guides

## Booklet function
wrapper of sig function that adds convince features like auto break into pages. But only handles a single signature

- [ ] More robust convenience boarder settings 
- [ ] auto breaks content into pages 

## Book function
same as booklet but has options for multi signature set ups 

- [ ] Handle multi signatures. Tell it how many sheets per signature

## Wishlist 

- Support for 8 16 and 32 page signatures 
- Need to add back in flipping pages to create the more complex signatures 

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