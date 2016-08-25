var libs = [
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
    'Unix'
];

var d_range = 2;
var bounce_loss = 0.8;
var repellent = 500;
var attractive = -10;
var x_laziness = 0.6;
var y_laziness = 0.4;
var water_level = 5;
var border = 10;

var container = document.getElementById('container');
var aquarium = document.getElementById('aquarium');

var width, height;

function setSize() {
    aquarium.setAttribute('width', width = container.offsetWidth || 400 + 'px');
    aquarium.setAttribute('height', height = container.offsetHeight || 400 + 'px');
}
setSize();
window.addEventListener('resize', setSize);

function Fish(name) {
    this.name = name;
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    this.svg.textContent = name;
    this.svg.setAttribute('font-size', '20px');
    aquarium.appendChild(this.svg);
    var box = this.svg.getBBox();
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

Fish.prototype.move = function() {
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
};

var fishes = libs.map(function (lib) {return new Fish(lib)});

function move(fish) {

    var x = fish.x + (fish.width / 2), y = fish.y - (fish.height / 2);

    var velocity_squared = Math.pow(fish.dx, 2) + Math.pow(fish.dy, 2);

    if (Math.random() * velocity_squared < 0.0001) {
        fish.dx = d_range * (Math.random() - 0.5);
        fish.dy = d_range * (Math.random() - 0.5);
    }

    fishes.forEach(function (sibling) {

        if (fish === sibling) return;

        var dx = x - (sibling.x + (sibling.width / 2));
        var dy = y - (sibling.y - (sibling.height / 2));

        var distance_squared = Math.pow(dx, 2) + Math.pow(dy, 2);
        var distance = Math.sqrt(distance_squared);

        var repel = repellent / Math.pow(distance, 3);
        var attract = attractive / distance_squared;

        var force = (repel + attract) / distance;
        fish.dx += force * dx;
        fish.dy += force * dy;
    });

    fish.move();
}

setInterval(function () {fishes.forEach(move)}, 5);
