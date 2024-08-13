---
"Note Planted:": 2024-06-28
"Last Tended:": 2024-07-18
---
#🌱Seed  #🙂Agree
****
> `Importance`: 10%
 
***The Big Idea***: Notes on the technical set up of this digital garden.

****

- start with setting up quartz first [getting started](https://quartz.jzhao.xyz/)
- then build and preview to make sure everything is working [build and preview](https://quartz.jzhao.xyz/build)
- Then set up a completely empty repo and follow the next step.
- then set up repo to sync with [setup github repo](https://quartz.jzhao.xyz/setting-up-your-GitHub-repository)
- then set up the hosting with github without any fancy stuff just use the test page [hosting](https://quartz.jzhao.xyz/hosting)
- found new plugin to add dates to properties so that I don't need to use dataview or enveloppe
- using [obsidian-enveloppe](https://github.com/Enveloppe/obsidian-enveloppe) for converting dataview to normal markdown
- using [quatrz](https://github.com/jackyzha0/quartz) for static site generation
	- Had issues getting npx to work was able to use `node quartz/bootstrap-cli.mjs` followed by the command instead 
	- very easy to just us `-d` option to specify the envelop repo I cloned back down
- have a separate github repo that saves the raw obsidian markdown files. Use obsidian git plugin on comp to sync with it.
- node quartz/bootstrap-cli.mjs build -d H:\Envelopp\Envelopp-Repo\Enveloppe -v --serve
- Todo: write clearer speck of what I have set up
- Todo: figure out actual hosting flow
- Todo: write down all the settings I have used
- Todo: start by uploading my finished essays and linking them and creating definition pages 
- possibly use [utterance](https://utteranc.es/)to enable comments on the garden 

## Fonts used on site
Used google fonts

Header: Special Elite
Body: Architects Daughter
Code: Amatic SC

# Todos for Website

- [ ] figure out formatting on tags page. i.e. remove note tags under the listing
- [ ] tweak search bar and dark mode on desktop placement. transition left side to grid css not just flex.
- [ ] figure out recent notes not scrolling on desktop
- [ ] change home to base camp on breadcrumbs
- [ ] Add a table of contents page
- [ ] make a special svg logo for the site. I am thinking three aspen leaves together in a circle. make sure that it pops up on site correctly.
- [ ] make sure callout colors and formatting make sense and look good
- [ ] edit the footer to be clearer and simpler invite for people to reach out about an idea 
- [ ] on light mode make the code blocks and tag blocks pop more
- [ ] post all epistles 
- [ ] post all formal essays
- [ ] finish landing page
- [ ] Set up gitscus for comments 
- [ ] figure out table display as well so that it doesn't look gross
- [ ] 
