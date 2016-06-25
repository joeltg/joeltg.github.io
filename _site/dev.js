/**
 * Created by joel on 6/18/16.
 */
"use strict";
const libs = ['D3.js', 'three.js', 'React', 'Polymer', 'Android', 'Redux', 'Node.js', 'Express', 'Flask'];
const aquarium = document.getElementById('aquarium');
const width = 400;
const height = 400;
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