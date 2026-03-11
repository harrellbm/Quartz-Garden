---
publish: true
created: 2025-12-22T09:38:55.721-08:00
modified: 2025-09-09T08:51:49.303-07:00
published: 2026-03-09T14:15:10.960-07:00
cssclasses: ""
---

#🌱Seed   #😐Neutral   #🟡Consideration
****
 
>[!Summary] The Big Idea
> I have started to dive into the world of what it would look like to have better tools for church typesetting that are not microsoft office or google or mainstream based but are open source and more likely to be resilient longterm without ending up costing an arm and a leg

****



I have started using typst for worship planning and laying out liturgy. Those efforts are not in a formal project yet but are using the [[The Garden/Projects/Bookletic]] package I wrote for typst when needing the lay things out in a bulletin or booklet format

# Current Work Flow for Music 
I have started using Lilypond as a program to engrave the music. It takes a text file that it then converts to the music and lyrics. I export that as an SVG from Lilypond and then open it in Inkscape. In Inkscape I trim the document specifications down to fit just the line of music. Then I select all the lyrics and go to the path menu and hit "Object to path" so that the lyrics are now a full part of the svg. 

Then I can store and import the music and lyrics into typst and it shows up super crisp and prints amazingly.

Eventually when typst supports including other pdfs I might try importing as a pdf instead of going the svg route but that works for now though a little labor intensive.

[https://lilypond.org/doc/v2.24/Documentation/notation/displaying-rhythms#unmetered-music](https://lilypond.org/doc/v2.24/Documentation/notation/displaying-rhythms#unmetered-music)

1 Common notation for vocal music (LilyPond Notation Reference) [https://lilypond.org/doc/v2.25/Documentation/notation/common-notation-for-vocal-music.html#automatic-syllable-durations](https://lilypond.org/doc/v2.25/Documentation/notation/common-notation-for-vocal-music.html#automatic-syllable-durations)

[https://lilypond.org/doc/v2.24/Documentation/notation/chants-psalms-and-hymns](https://lilypond.org/doc/v2.24/Documentation/notation/chants-psalms-and-hymns)

there are also setting to mimic old musical notation https://lilypond.org/doc/v2.25/Documentation/notation/ancient-notation

![[The Library/Images/lilypond-3.jpg]]![[The Library/Images/lilypond-2.jpg]]![[The Library/Images/lilypond-1.jpg]]
To fit a long line of lyrics to notes in LilyPond, the primary method involves aligning syllables to individual notes and utilizing hyphens for multi-syllable words and extender lines for held syllables.

  

1. Aligning Syllables to Notes:
	- Automatic Alignment: The most common approach is to use \addlyrics or \lyricsto.
	    - \addlyrics { ... }: This places the lyrics directly after the Voice context containing the melody, automatically aligning syllables to the notes in that voice.
	    - \lyricsto "voiceName" { ... }: This explicitly aligns the lyrics to a named Voice context.
	    
	- Syllable-by-Syllable Entry: Enter the lyrics with one syllable per note.
	    - For multi-syllable words, use two consecutive dashes (--) between syllables to create a centered hyphen. Ensure spaces separate the dashes from the preceding and following syllables (e.g., syl -- la -- ble).
	    - For syllables held over multiple notes, use an underscore ("_") for each subsequent note the syllable extends over, or a double underscore ("__") for an extender line. [[1](http://lilypond.org/doc/v2.25/Documentation/notation/references-for-vocal-music)]

Example:
```
\score {
	<<    
		\new Voice = "melody" \relative c' {
			c4 d e f      
			g1    
		}
		\new Lyrics \lyricsto "melody" {
			This is a long -- er line of words __    
		}  
	>>
}
```
  
  2. Handling Long Lines and Spacing:
	- Line Breaks: LilyPond automatically handles line breaks for lyrics based on the line-width and ragged-right settings in the \layout block.
	    - line-width = #...: Controls the maximum width of a line.
	    - ragged-right = ##t: Allows lines to end at their natural length, preventing horizontal stretching. This can be useful for shorter phrases or to see the natural spacing.
	- Adjusting Lyric Spacing: If lyrics appear too cramped, you can adjust the minimum-distance property of LyricSpace within the \layout block for global changes, or \override it for specific instances.

Example of Spacing Adjustment:
```
\score {  
	<<    
		\new Voice = "melody" \relative c' {
			c c c c c c c c    
		}    
		\new Lyrics \lyricsto "melody" {
			longtext longtext longtext longtext longtext longtext longtext longtext    
		}  
	>>  
	\layout {    
		\context {      
			\Lyrics      
			\override LyricSpace.minimum-distance = #1.0    
		}  
	}
}
```

[1] [http://lilypond.org/doc/v2.25/Documentation/notation/references-for-vocal-music](http://lilypond.org/doc/v2.25/Documentation/notation/references-for-vocal-music)