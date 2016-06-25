/**
 * Created by joel on 6/18/16.
 */
var Fish = function(name) {
    this.name = name;
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    this.svg.textContent = name;
    this.svg.setAttribute('fot-size', '20px');
    var box = this.svg.getBBox();
    this.width = box.width;
    this.height = box.height;
    aquarium.appendChild(this.svg);
    this.x = Math.random() * (width - this.width);
    this.y = Math.random() * (height - this.height) + this.height;
    this.svg.setAttribute('x', this.x);
    this.svg.setAttribute('y', this.y);
};

Fish.prototype.move = function() {
    // boundary collisions
    if (this.x > (width - this.width - border) || this.x < border)
        this.dx = (this.x < border ? 1 : -1) * border;
    if (this.y > height - border || this.y < this.height + border)
        this.dy = (this.y < this.height ? 1 : -1) * border;

    // move
    this.x += this.dx;
    this.y += this.dy;
    this.svg.setAttribute('x', this.x);
    this.svg.setAttribute('y', this.y);
};

Fish.prototype.distance = function(fish) {
    var dx = (this.x + this.width / 2) - (fish.x + fish.width / 2);
    var dy = (this.y + this.height / 2) - (fish.y + fish.height / 2);
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
};

Fish.prototype.moveAway = function(fishes, minDistance) {
    var distx = 0, disty = 0, close = 0;

    fishes.forEach(function(fish) {
        if (fish.name !== this.name) {
            var distance = this.distance(fish);
            if (distance < minDistance) {
                close++;
                var dx = this.x - fish.x, dy = this.y - fish.y;
                if (dx >= 0) dx = Math.sqrt(minDistance) - dx;
                else if (dx < 0) dx = - Math.sqrt(minDistance) - dx;

                if (dy >= 0) dy = Math.sqrt(minDistance) - dy;
                else if (dy < 0) dy = - Math.sqrt(minDistance) - dy;

                distx += dx;
                disty += dy;
            }
        }
    });
    if (close > 0) {
        this.dx -= distx / this.width;
        this.dy -= disty / this.height;
    }
}

Fish.prototype.moveCloser = function(fishes, distance) {
    var avgx = 0, avgy = 0;
    fishes.forEach(function(fish) {
        if (fish.name !== this.name) {
            if (this.distance(fish) < distance) {
                avgx += (this.x - fish.x);
                avgy += (this.y - fish.y);
            }
        }
    });
    avgx /= fishes.length;
    avgy /= fishes.length;

    distance = Math.sqrt(Math.pow(avgx, 2) + Math.pow(avgy, 2)) * closeRate;
    if (distance !== 0) {
        this.dx = Math.min(this.dx + (avgx / distance), maxVelocity);
        this.dy = Math.min(this.dy + (avgy / distance), maxVelocity);
    }
};

Fish.prototype.moveWith = function(fishes, distance) {
    var avgx = 0, avgy = 0;
    fishes.forEach(function(fish) {
        if (fish.name !== this.name) {
            if (this.distance(fish) < distance) {
                avgx += fish.dx;
                avgy = fish.dy;
            }
        }
    });
    avgx /= fishes.length;
    avgy /= fishes.length;
    distance = Math.sqrt(Math.pow(avgx, 2) + Math.pow(avgy, 2)) + withRate;
    if (distance !== 0) {
        this.dx = Math.min(this.dx + (avgx / distance), maxVelocity);
        this.dy = Math.min(this.dy + (avgy / distance), maxVelocity);
    }
};

function attachFish(lib, index) {
    // var fish = document.createElement('h3');
    var fish = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    fish.textContent = lib;
    fish.setAttribute('font-size', '20px');
    aquarium.appendChild(fish);
    var box = fish.getBBox();
    var x = Math.random() * (width - box.width);
    var y = Math.random() * (height - box.height) + box.height;
    fish.setAttribute('x', x);
    fish.setAttribute('y', y);
    fishes[lib] = {
        index: index,
        x: x,
        y: y,
        dx: d_range * (Math.random() * 2 - 1),
        dy: d_range * (Math.random() * 2 - 1),
        width: box.width,
        height: box.height,
        svg: fish
    };
}
