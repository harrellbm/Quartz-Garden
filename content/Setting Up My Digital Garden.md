---
"Note Planted:": 2024-06-28
"Last Tended:": 2024-10-16
---
#🌿Sapling   #🙂Agree   #📊Project 
****
> `Importance`: 10%

>[!Summary] The Big Idea
>Notes on the technical set up of this digital garden.

****
# General Notes 
From a top layer look I am using the basic Stack of: 
- Obsidian for note writing and editing 
- GitHub for note backup and website hosting 
- Quartz as the site generator 
# Setting Up the Website
- start by forking the quartz repository (otherwise it’s a pain later)
- locally clone fork and set up locally. Guide for doing this: [getting started](https://quartz.jzhao.xyz/)
- then build and preview the site to make sure everything is working: [build and preview](https://quartz.jzhao.xyz/build)
- then set up the GitHub action for hosting with github. Do this first without any fancy stuff to set it up easier by just using the test page: [hosting](https://quartz.jzhao.xyz/hosting)
- Obsidian plugins I use:
	- Update Time on Edit plugin for keeping track of when note was planted and edited last 
	- Tag wrangler plugin for making it easier to deal with tags 
	- Callout manger and editing toolbar plugins are nice to just make editing easier
	- Git plugin on desktop to push to a separate github repo that saves the raw obsidian markdown files
	- Use an app called PolyGit on IPhone to push backups from phone. The way I have it set up is that there are two copies of my vault on my phone. One is used by the Obsidian app to save to. The other is used by polygit to sync when remote. I have two iPhone shortcuts that automatically copy to and from the vault used by the obsidian app. It’s not a great solution but makes it so I can keep my phone and comp in sync without having to pay for anything.
- using [quatrz](https://github.com/jackyzha0/quartz) for static site generation (work comp had restrictions but no issue on home laptop)
	- Had issues getting npx to work was able to use `node quartz/bootstrap-cli.mjs` followed by the command instead 
	- very easy to just us `-d` option to specify the envelop repo I cloned back down
- Todo: write down all the settings I have used
- Todo: start by uploading my finished essays and linking them and creating definition pages 

> [!NOTE]
> You can change the icon and banner of your Quartz site by changing the image files under quartz/static to whatever icon you want 

## Fonts used on site
Used google fonts

Header: Special Elite
Body: Architects Daughter
Code: Amatic SC

# Todos for Website

- [x] figure out recent notes not scrolling on desktop
- [x] make a special svg logo for the site. I am thinking three aspen leaves together in a circle. make sure that it pops up on site correctly.
- [x] on light mode make the code blocks and tag blocks pop more
- [x] finish landing page
- [x] Set up gitscus for comments 
- [x] figure out table display as well so that it doesn't look gross
- [x] Set up comments 
- [x] Set up recent page and figure out page dating on upload 
- [x] Figure out a nice banner
	- discord discussion of how to do that 
	- https://discord.com/channels/927628110009098281/1153011755975458928/1153032260803633172https://discord.com/channels/927628110009098281/1153011755975458928/1153032260803633172
- [ ] Figure out how to help people use the RSS feed 
- [ ]  Maybe set up a better meta data tag to make it possible to display properties of page.
- [ ] post all epistles 
- [ ] post all formal essays
- [ ] edit the footer to be clearer and simpler invite for people to reach out about an idea 
- [ ]  change [[Index|home]] to base camp on breadcrumbs
- [ ]  figure out formatting on tags page. i.e. remove note tags under the listing
- [ ] Style comments box to match the rest of the page in both light and dark mode
- [ ] Figure out analytics as well
