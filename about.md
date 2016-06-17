---
layout: page
title: About
subtitle: Who is this guy anyway?
permalink: /about/
---

I'm a junior at MIT pursuing computer science and mathematics. 
I'm a big fan of Lisp, ALan Kay, and Bret Victor, and tend to overuse 
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

# Heroes

## ye legends of olde

These are just a few of the people who continually inspire me with the depth of their perception and the extent of their
vision. Maybe someday we'll realize their dreams, but until then, with ideas that are still radical, we fight on.

[Bret Victor](http://worrydream.com)
: "There is no 'Technology'. There is no 'Design'.
  There is only a vision of how mankind should be, and the relentless resolve to make it so."

[Alan Kay](https://en.wikipedia.org/wiki/Alan_Kay)
: "The visual arts are the imitation of life, but the computing arts are the imitation of creation itself."

[Doug Engelbart](https://en.wikipedia.org/wiki/Douglas_Engelbart)
: "The key thing about all the world's big problems is that they have
  to be dealt with collectively. If we don't get collectively smarter, we're doomed."

[Ted Nelson](https://en.wikipedia.org/wiki/Ted_Nelson)
: "Most people are fools, most authority is malignant, God does not exist, and everything is wrong."

[Gerry Sussman](https://en.wikipedia.org/wiki/Gerald_Jay_Sussman)
: "Programs must be written for people to read, and only incidentally for machines to execute"

# Courses

## past, present, and tentative future

<div style="width: 100%; height: 400px; overflow: hidden">
<iframe src="https://courseroad.mit.edu/#joelg" 
        width="100%" height="400px"
        style="position: relative; left: -250px; 
               width: calc(100% + 250px);">
</iframe>
</div>

# Code Aquarium

## battle scars: an incomplete collection

<svg id="aquarium"></svg>
<script>
    var libs = ['D3.js', 'three.js', 'React', 'Polymer', 'Android', 'Redux', 'Node.js', 'Express', 'Flask'];
    var aquarium = document.getElementById('aquarium');
    var width = document.getElementsByClassName('wrapper')[0].offsetWidth
    var height = 400;
    var boxes = {};
    var fishes = {};
    aquarium.setAttribute('width', width + 'px');
    aquarium.setAttribute('height', height + 'px');
    function attachFish(lib) {
        // var fish = document.createElement('h3');
        var fish = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        fish.textContent = lib;
        fish.setAttribute('font-size', '24px');
        aquarium.appendChild(fish);
        var box = fish.getBBox();
        boxes[lib] = box;
        var x = Math.random() * (width - box.width);
        var y = Math.random() * (height - box.height) + box.height;
        fish.setAttribute('x', x);
        fish.setAttribute('y', y);
        fishes[lib] = {x: x, y: y, dx: 0, dy: 0, width: box.width, height: box.height, svg: fish};
    }
    libs.forEach(attachFish);
    setInterval(function() {
        libs.forEach(function(lib) {
            var fish = fishes[lib];
            var bias = 1000;
            if (fish.x < (width - fish.width) && fish.x > 1) {
                fish.dx = Math.random() - (fish.dx > 0 ? 1 / bias : (bias - 1) / bias);
                fish.svg.setAttribute('x', fish.x += fish.dx);
            } else {
                fish.dx = (fish.x > 1 ? -1 : 1) * 0.5;
                fish.svg.setAttribute('x', fish.x += fish.dx);
            }

            if (fish.y < height && fish.y > fish.height) {
                fish.dy = Math.random() - (fish.dy > 0 ? 1 / bias : (bias - 1) / bias);
                fish.svg.setAttribute('y', fish.y += fish.dy);
            } else {
                fish.dy = (fish.y > fish.height ? -1 : 1) * 0.5;
                fish.svg.setAttribute('y', fish.y += fish.dy);
            }
        });
    }, 10);
</script>

# Work

## my five-dimensional journey through space, time and ideas

 - MIT Media Lab (Spring 2015 - Summer 2016)
   - Viral Communications Group 
   - Projects (I didn't name any of these)
     - Super Glue
     - PubPub
     - DbDb
     - PqPq
       - JK, I make that one up
   - Technology
     - Node.js
     - D3
     - React
   - Design
     - Media exploration and consumption
     - Data visualization
     - Network architecture
 - Plume Labs (January 2016)
   - Booth-to-Booth Salesman at CES 2016
   - Hello! Would *you* like to hear about our cloud API?
   - Insert your favorite Book of Mormon musical joke here
 - MIT CSAIL (Summer 2016)
   - Gerry Sussman
   - Interactive Scheme IDE for the web
 - MIT CSAIL (Fall 2016 - )
   - Software Design Group
   - Object Spreadsheets
