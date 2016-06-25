---
layout: page
title: About
permalink: /about/
---

I'm a junior at MIT pursuing computer science and mathematics. 
I'm a big fan of Lisp, Alan Kay, and Bret Victor, and tend to overuse 
words like "relation", "projection", and "space".
I can recite most [xkcd](https://xkcd.com) comics from memory 
(including the alt-text) and love petty semantic debates. 

I care about a lot of Big Ideas, and want to make computing universally 
accessible to everyone as a medium and an art. I believe in 
[direct manipulation of data](https://vimeo.com/66085662), 
[augmenting human intellect](https://en.wikipedia.org/wiki/The_Mother_of_All_Demos), 
and [dynamic, interactive documents](http://www.xanadu.net/), 
unlike most of the ones you'll find here.

Some of my projects are kind of weird (that's deliberate) and some
of my heroes are kind of eccentric (that's unfortunate), but hopefully 
they make you think a little bit.

# Work

## is this subtitle sufficiently Medium?

### MIT Media Lab

I joined the [Viral Communications Group](http://viral.media.mit.edu/) as an undergraduate researcher in 2015.
I've worked on several projects, mostly with visualizations, interface design, and information network architecture.

[PubPub (2016 - )](http://pubpub.org)
: PubPub is a platform for free and open publishing. PubPub
  emphasizes radical transparency, hosts curated grassroots
  journals, and weaves a connected mesh of rich,
  digitally native documents. I'm currently working on
  dynamic visualizations of data and
  [Xanadu](http://xanadu.com)-style transclusions and references.


[Super Glue (2015)](http://viral.pubpub.org/pub/super-glue)
: Super Glue is a digestion system and metadata generator for mass media.
  I wrote some metadata extraction modules, designed a
  [media exploration dashboard](http://super-glue-dashboard.herokuapp.com),
  and prototyped [demo applications](http://viral.pubpub.org/pub/super-cuts).

### MIT CSAIL

In summer 2016 I started working with [Gerry Sussman](https://en.wikipedia.org/wiki/Gerald_Jay_Sussman)
and [Jack Wisdom](https://en.wikipedia.org/wiki/Jack_Wisdom) to redesign the online notes, simulations,
and demos for [6.946: Computational Classical Mechanics](http://groups.csail.mit.edu/mac/users/gjs/6946/).
In fall 2016, I'm joining the [Software Design Group](http://sdg.csail.mit.edu/) to work on a
object-oriented spreadsheet programming interface.

# Heroes

## ye legends of olde

These are just a few of the people who continually inspire me with the depth of their perception and the extent of their
vision. Maybe someday we'll realize their dreams, but until then, with ideas that are still radical, we fight on.

[Alan Kay](https://en.wikipedia.org/wiki/Alan_Kay)
: "The visual arts are the imitation of life, but the computing arts are the imitation of creation itself."

[Bret Victor](http://worrydream.com)
: "There is no 'Technology'. There is no 'Design'.
  There is only a vision of how mankind should be, and the relentless resolve to make it so."

[Doug Engelbart](https://en.wikipedia.org/wiki/Douglas_Engelbart)
: "The key thing about all the world's big problems is that they have
  to be dealt with collectively. If we don't get collectively smarter, we're doomed."

[Ted Nelson](https://en.wikipedia.org/wiki/Ted_Nelson)
: "Most people are fools, most authority is malignant, God does not exist, and everything is wrong."

[Gerry Sussman](https://en.wikipedia.org/wiki/Gerald_Jay_Sussman)
: "Programs must be written for people to read, and only incidentally for machines to execute."

# Code Aquarium

## an incomplete collection of battle scars

<div id="container" style="width: 100%; height: 400px; border: 2px solid #828282; border-radius: 2px">
<svg id="aquarium"></svg>
</div>

<script src="{{ site.baseurl }}/assets/js/aquarium.js" type="text/javascript" charset="utf-8"></script>

# Courses

## past, present, and tentative future

<div id="courseroad" style="width: 100%; overflow: hidden">
    <script>
        const courses = document.getElementById("courseroad");
        if (window.innerWidth > 435) {
            courses.style.height = "400px";
            const courseroad = document.createElement('iframe');
            courseroad.src = "https://courseroad.mit.edu/#joelg";
            courseroad.width = "100%";
            courseroad.height = "400px";
            courseroad.style.position = "relative";
            courseroad.style.left = "-250px";
            courseroad.style.width = "calc(100% + 250px)";
            courses.appendChild(courseroad);
        } else courses.style.display = 'none';
    </script>
</div>

Check out my complete [course road](https://courseroad.mit.edu/#joelg),
complete with major, minor, and audit details.
