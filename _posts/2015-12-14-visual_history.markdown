---
layout: post
title:  "Visual History"
permalink: /visual_history/
subtitle: "Delinearize your browser"
date: 2015-12-14
links: 
    -
        url: http://github.com/joeltg/visual_history
        text: GitHub
    -
        url: https://chrome.google.com/webstore/detail/visual-history/nkckokcpjekkokllfplejfkocaikmnml
        text: Chrome Web Store
categories: [projects]
---

Modern browsers lose rich information when they compress browsing 
history into a linear stack, which makes backtracking from a forest of 
links surprisingly difficult.  We can do better.

![]({{ site.baseurl }}/assets/images/visual-history-0.png)

## Introduction

Visual History is a Chrome extension in collaboration with 
[Kenny Friedman](http://kennethfriedman.org) that delinearizes your 
browsing history with a richer alternative to the Back and Forward 
buttons. Instead of a stack of previously visited destinations, Visual 
History maintains the forest of trees that represent each tab’s path 
around the internet, and lets you easily backtrack to any site you've 
recently visited. 

![]({{ site.baseurl }}/assets/images/visual-history-1.png)

This solves an [ancient problem](https://xkcd.com/214/) with Wikipedia.

![]({{ site.baseurl }}/assets/images/visual-history-2.png)

## Motivation

Back and Forward buttons are simple and convenient, but the underlying
history stack is a terrible model for navigation. Websites aren't stops
on a subway line; they're nodes in a connected graph. Even within this 
graph, we rarely just wander down one winding path: we backtrack
from articles to homepages, from links to search results, and from 
threads to forums. The internet is a graph, and we tend to browse 
hierarchically.

But browsers make hierarchical navigation very difficult. Going back to
a page of search results and down to a sibling link "destroys" the original
link in the back/forward stack. This is bad for a couple reasons:

 - Since we can "lose" a link if we're not careful, we assume the mental
   load of tracking our history ourselves, so that we know when it's 
   "safe" to go down a new branch, or when we might want to save our 
   "place" for later. Design should minimize mental load, not add state 
   to the userspace.
 - When it's not safe to go down a new branch, and faced with the threat
   of losing a page to which we may want to return, we usually resort to
   ridiculous hacks like *opening links in new tabs*.

That second effect is subtle. "Tabs" organize content
categorically. That *is* the tab metaphor. But more often than not,
browsers reduce tabs to a scattered breadcrumb trail of abandoned
siblings - links that we popped open because it was inconvenient (or
dangerous) to navigate to them directly. These new tabs don't have any 
idea where they are in the internet - we can't go back from them, and we 
sometimes forget how we got there in the first place - but *dammit, at 
least we can Ctrl-Tab between them quickly!* Not only is this both
computationally and spatially wasteful, it's also confusing and antipattern. 
It's just bad design.

## Usage

Navigate around the graph by clicking the graph icon in the toolbar, or 
by using Ctrl + arrow key (or Cmd + arrow key for Mac) shortcuts. When 
Ctrl (or Cmd) is released, Chrome will navigate to whichever node is 
currently selected.

## Credits

- [D3.js](http://d3js.org/)

<script>
  ga('create', 'UA-71586525-3', 'auto');
  ga('send', 'pageview');
</script>