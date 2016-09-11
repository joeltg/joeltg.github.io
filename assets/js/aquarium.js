/**
 * Created by joel on 9/11/16.
 */

var data = [
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

var container = document.getElementById('container');
var aquarium = document.getElementById('aquarium');
var width, height;

function resize() {
    width = container.offsetWidth || 400 + 'px';
    height = container.offsetHeight || 400 + 'px';
    aquarium.setAttribute('width', width);
    aquarium.setAttribute('height', height);
}

resize();
window.addEventListener('resize', resize);

function get_x() { return Math.floor(Math.random() * (width - 48)) }
function get_y() { return Math.floor(Math.random() * (height - 16)) }

var fish = d3.select(aquarium).selectAll('.fish').data(data).enter().append('text')
    .attr('class', 'fish')
    .attr('x', get_x)
    .attr('y', get_y)
    .text(function(text) {return text})
    .each(function() {translate(d3.select(this))});

function translate(selection) {
    selection.transition()
        .duration(function() {return 2000 + (Math.random() * 3000)})
        .attr('x', get_x)
        .attr('y', get_y)
        .on('end', function() {translate(selection)});
}
