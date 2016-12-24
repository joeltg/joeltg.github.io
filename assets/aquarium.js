/**
 * Created by joel on 9/11/16.
 */

const data = [
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
    'Unix',
    'Ant',
    'Android',
    'JavaScript',
    'Scheme',
    'Scala',
    'Java',
    'Python',
    'Common Lisp',
    'Bash',
    'WebComponents',
    'WebAssembly'
];

const container = document.getElementById('container');
const aquarium = document.getElementById('aquarium');
let width, height;

function resize() {
    width = container.offsetWidth || 400 + 'px';
    height = container.offsetHeight || 400 + 'px';
    aquarium.setAttribute('width', width);
    aquarium.setAttribute('height', height);
}

resize();
window.addEventListener('resize', resize);


const get_x = () => Math.floor(Math.random() * (width - 48));
const get_y = () => Math.floor(Math.random() * (height - 16));

d3.select(aquarium).selectAll('.fish').data(data).enter().append('text')
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
