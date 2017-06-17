const hamiltonian = document.getElementById('hamiltonian');

let i;

function splice(array, index) {
    const clone = array.slice(0);
    const [el] = clone.splice(index, 1);
    return [el, ...clone];
}

function sample(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function union(a, b) {
    return a.filter(e => b.includes(e));
}

function shuffle(array) {
    const clone = array.slice(0);
    let k, j, temp;
    for (k = clone.length - 1; k > 0; k -= 1) {
        j = Math.floor(Math.random() * (k + 1));
        temp = clone[k];
        clone[k] = clone[j];
        clone[j] = temp
    }
    return clone;
}

function getEdges(nodes) {
    const [node, ...pool] = nodes;
    return shuffle(pool.filter(({t}) => t.some(tag => node.t.includes(tag))));
}

function dfs(nodes, path) {
    if (nodes.length === 0) return null;
    else if (nodes.length === 1) return [nodes[0], ...path];
    else {
        const [node, ...pool] = nodes;
        const edges = getEdges([node, ...pool]);
        const pick = edge => dfs([edge, ...pool.filter(({u}) => u !== edge.u)], [node, ...path]);
        return edges.reduce((val, edge) => val || pick(edge), null);
    }
}

function getHamiltonian(ideas) {
    const permutation = shuffle(ideas);
    return permutation.reduce((path, idea, i) => path || dfs(splice(permutation, i), []), null);
}

function renderIdea({departure, tags}, {u, d, t, n}) {
    const div = document.createElement('div');
    const section = document.createElement('section');
    const h3 = document.createElement('h3');
    const a = document.createElement('a');
    a.href = u;
    a.innerText = d.split("\n\n").join("\n").split("\r\n\r\n").join("\n");
    h3.appendChild(a);
    section.appendChild(h3);
    n.split('\n').forEach(l => {
        const p = document.createElement('p');
        p.innerText = l;
        section.appendChild(p);
    });
    hamiltonian.appendChild(section);
    const arrival = document.createElement('div');
    section.appendChild(arrival);
    if (departure && tags) {
        const link = sample(union(tags, t));
        const start = document.createElement('a');
        const end = document.createElement('a');
        start.href = end.href = `https://pinboard.in/u:joelg/t:${link}/`;
        start.innerText = end.innerText = link;
        departure.appendChild(start);
        arrival.appendChild(end);

        const width = section.scrollWidth - departure.scrollWidth;
        const train = document.createElement('hr');
        departure.appendChild(train);
        train.style.width = (width - 12) + 'px';
    }
    return {departure: arrival, tags: t};
}

function renderIdeas(ideas) {
    console.log(ideas);
    getHamiltonian(ideas).reduce(renderIdea, {});
    i = ideas;
}

fetch(location.href + "pinboard.json").then(res => res.json()).then(renderIdeas);