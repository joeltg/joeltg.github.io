---
layout: page
title: About
subtitle: Who is this guy anyway?
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
: "Programs must be written for people to read, and only incidentally for machines to execute."

# Courses

## past, present, and tentative future



# Code Aquarium

## an incomplete collection of battle scars

These are some things that I've used in projects that still take up space in my head.
I'm trying to forget most of them.

<div id="container" style="width: 100%; height: 400px">
<svg id="aquarium"></svg>
</div>

<script type="text/javascript">
const libs = [
    'Git',
    'MongoDB',
    'D3.js',
    'Three.js',
    'React',
    'Polymer',
    'Redux',
    'Node.js',
    'Express',
    'Flask',
    'Redis',
    'Tensorflow',
    'NLTK',
    'CodeMirror',
    'Emacs'
];
const container = document.getElementById('container');
const aquarium = document.getElementById('aquarium');
const width = container.offsetWidth || 400;
const height = container.offsetHeight || 400;
aquarium.setAttribute('width', width + 'px');
aquarium.setAttribute('height', height + 'px');

const d_range = 2;

const max_delta = 2000;

const bounce_loss = 0.8;
const repellent = 500;
const attractive = -10;

const x_laziness = 1.2;
const y_laziness = 0.8;

const border = 10;

const swarming = true;


class Fish {
    constructor(name) {
        this.name = name;
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        this.svg.textContent = name;
        this.svg.setAttribute('font-size', '20px');
        aquarium.appendChild(this.svg);
        const box = this.svg.getBBox();
        this.width = box.width;
        this.height = box.height;
        this.x = Math.random() * (width - this.width);
        this.y = Math.random() * (height - this.height) + this.height;
        this.dx = d_range * (Math.random() - 0.5);
        this.dy = d_range * (Math.random() - 0.5);
        this.svg.setAttribute('x', this.x);
        this.svg.setAttribute('y', this.y);
        this.swarming = false;
    }
    move() {
        if (Math.abs(this.dx) > max_delta) this.dx = this.dx > 0 ? 1 : -1 * max_delta;
        if (Math.abs(this.dy) > max_delta) this.dy = this.dy > 0 ? 1 : -1 * max_delta;

        if (isFinite(this.dx)) this.x += this.dx * x_laziness;
        else {
            this.x += this.dx = d_range * (Math.random() - 0.5);
            console.log('panic');
        }
        if (isFinite(this.dy)) this.y += this.dy * y_laziness;
        else this.y += this.dy = d_range * (Math.random() - 0.5);

        // boundary collisions
        if (this.x + this.width > width - border) {
            this.dx = -Math.abs(this.dx) * bounce_loss;
            this.x = width - this.width - border;
        } else if (this.x < border) {
            this.dx = Math.abs(this.dx) * bounce_loss;
            this.x = border;
        }

        if (this.y > height - border) {
            this.dy = -Math.abs(this.dy) * bounce_loss;
            this.y = height - border;
        } else if (this.y - this.height < border) {
            this.dy = Math.abs(this.dy) * bounce_loss;
            this.y = border + this.height;
        }

        // move
        this.svg.setAttribute('x', this.x);
        this.svg.setAttribute('y', this.y);
    }
}

const fishes = libs.map(lib => new Fish(lib));

setInterval(function() {

    fishes.forEach(fish => {

        const velocity = Math.sqrt(Math.pow(fish.dx, 2) + Math.pow(fish.dy, 2));

        if (swarming) {
            if (Math.random() * velocity < 0.0001) {
                fish.swarming = true;
                fish.dx = d_range * (Math.random() - 0.5);
                fish.dy = d_range * (Math.random() - 0.5);
            } else fish.swarming = false;
        }

        let fx = 0, fy = 0;
        fishes.forEach(sibling => {
            if (fish === sibling) return;
            const dx = (fish.x + (fish.width / 2)) - (sibling.x + (sibling.width / 2));
            const dy = (fish.y - (fish.height / 2)) - (sibling.y - (sibling.height / 2));
            const distance = Math.abs(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));

            if (swarming && fish.swarming && !sibling.swarming && Math.random() * Math.pow(distance, 2) < 3000) {
                sibling.dx = fish.dx + Math.random() / 4 - 0.125;
                sibling.dy = fish.dy + Math.random() / 4 - 0.125;
            }

            const repel = repellent / Math.pow(distance, 3);
            const attract = attractive / Math.pow(distance, 2);

            const force = (repel + attract) / distance;
            fx += force * dx;
            fy += force * dy;
        });

        fish.dx += fx;
        fish.dy += fy;

        fish.move();
    });

}, 10);
</script>

# Work

## my five-dimensional journey through space, time and ideas

## MIT Media Lab

I joined the [Viral Communications Group](http://viral.media.mit.edu/) as an undergraduate researcher in 2015. I've worked on
several projects, mostly with visualizations, interface design, and information network architecture.

[PubPub (2016 - )](http://pubpub.org)
: PubPub is

[Super Glue (2015)](http://viral.pubpub.org/pub/super-glue)
: Superglue is a digestion system and metadata generator for mass media.
  The system pipes media through entity extraction, face detectors, excitement trackers,
  and many other modules to roll a snowball of metadata for analysis, consumption,
  and creation. I wrote some of the core modules, designed a
  [media exploration dashboard](http://super-glue-dashboard.herokuapp.com),
  and prototyped [demo applications](http://viral.pubpub.org/pub/super-cuts).


## MIT CSAIL

In summer 2016 I started working with Gerry Sussman and Jack Wisdom to redesign
the online notes, simulations, and demos for their fall class,
6.946: Computational Classical Mechanics.


 - Hello
   - Super Glue
     - hi
   - PubPub
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
