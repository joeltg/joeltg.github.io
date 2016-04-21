---
layout: post
title:  "Visual History"
permalink: /visual_history/
subtitle: "Delinearize your browser"
date:   2015-12-14
image: "https://raw.githubusercontent.com/joeltg/visual_history/master/screenshots/0.png"
categories: [projects]
---

Modern browsers lose rich information when they compress browsing 
history into a linear stack, which makes backtracking from a forest of 
links surprisingly difficult.  We can do better.

![](https://raw.githubusercontent.com/joeltg/visual_history/master/screenshots/0.png)

Visual History is a Chrome extension I made with 
[Kenny Friedman](http://kennethfriedman.org") that delinearizes your 
browsing history with a richer alternative to the Back and Forward 
buttons. Instead of a stack of previously visited destinations, Visual 
History maintains the forest of trees that represent each tab’s path 
around the internet, and lets you easily backtrack to any site you've 
recently visited. You can find it on [GitHub](http://github.com/joeltg/visual_history)
and the [Chrome Web Store](https://chrome.google.com/webstore/detail/visual-history/nkckokcpjekkokllfplejfkocaikmnml)

Trees are local to each tab, and are deleted once the tab is closed.

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>
<div class='embed-container'><iframe src='https://www.youtube.com/embed/7A7JwhN-zbU' frameborder='0' allowfullscreen></iframe></div>

This solves [an ancient problem](https://xkcd.com/214/) with Wikipedia.

Routes that normally have to be manually re-traced by users, like 
jumping between search results or forum posts, can now be intuitively 
and quickly directed without revisiting the parent page.

![](https://raw.githubusercontent.com/joeltg/visual_history/master/screenshots/2.png)

You can also push a link to the tree in the background without actually 
visiting the page.

![](https://raw.githubusercontent.com/joeltg/visual_history/master/screenshots/4.png)

## Usage

Navigate around the graph by clicking the graph icon in the toolbar, or by using Ctrl + arrow key shortcuts. Whatever node is selected when Ctrl is released will be navigated to.

## Credits

- [D3.js](http://d3js.org/)
- [Color Thief](https://github.com/lokesh/color-thief/)
