"use strict";
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
    'Emacs',
    'Webpack',
    'grep'
];

const d_range = 2;
const bounce_loss = 0.8;
const repellent = 500;
const attractive = -10;
const x_laziness = 0.6;
const y_laziness = 0.4;
const water_level = 5;
const border = 10;

const container = document.getElementById('container');
const aquarium = document.getElementById('aquarium');

let width, height;

function setSize() {
    aquarium.setAttribute('width', width = container.offsetWidth || 400 + 'px');
    aquarium.setAttribute('height', height = container.offsetHeight || 400 + 'px');
}
setSize();
window.addEventListener('resize', setSize);

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
        this.border = {
            right: width - this.width - border,
            left: border,
            top: this.height + water_level,
            bottom: height - border
        };
        this.x = Math.random() * (width - this.width);
        this.y = Math.random() * (height - this.height - water_level) + this.height + water_level;
        this.dx = d_range * (Math.random() - 0.5);
        this.dy = d_range * (Math.random() - 0.5);
    }
    move() {
        this.x += this.dx * x_laziness;
        this.y += this.dy * y_laziness;

        // boundary collisions
        if (this.x > this.border.right) {
            this.dx = -Math.abs(this.dx) * bounce_loss;
            this.x = this.border.right;
        } else if (this.x < this.border.left) {
            this.dx = Math.abs(this.dx) * bounce_loss;
            this.x = this.border.left;
        }

        if (this.y > this.border.bottom) {
            this.dy = -Math.abs(this.dy) * bounce_loss;
            this.y = this.border.bottom;
        } else if (this.y < this.border.top) {
            this.dy = Math.abs(this.dy) * bounce_loss;
            this.y = this.border.top;
        }

        // move
        this.svg.setAttribute('x', this.x);
        this.svg.setAttribute('y', this.y);
    }
}

const fishes = libs.map(lib => new Fish(lib));

function move(fish) {

    const x = fish.x + (fish.width / 2), y = fish.y - (fish.height / 2);

    const velocity_squared = Math.pow(fish.dx, 2) + Math.pow(fish.dy, 2);

    if (Math.random() * velocity_squared < 0.0001) {
        fish.dx = d_range * (Math.random() - 0.5);
        fish.dy = d_range * (Math.random() - 0.5);
    }

    fishes.forEach(sibling => {

        if (fish === sibling) return;

        const dx = x - (sibling.x + (sibling.width / 2));
        const dy = y - (sibling.y - (sibling.height / 2));

        const distance_squared = Math.pow(dx, 2) + Math.pow(dy, 2);
        const distance = Math.sqrt(distance_squared);

        const repel = repellent / Math.pow(distance, 3);
        const attract = attractive / distance_squared;

        const force = (repel + attract) / distance;
        fish.dx += force * dx;
        fish.dy += force * dy;
    });

    fish.move();
}

setInterval(() => fishes.forEach(move), 5);
