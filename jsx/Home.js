var React = require('react');
var Material = require('material-ui');
var Contact = require('./Contact');
var Projects = require('./Projects');
var Heroes = require('./Heroes');
var Work = require('./Work');
var Home = React.createClass({
    componentDidMount() {
        window.location.hash = window.decodeURIComponent(window.location.hash);
        const scrollToAnchor = () => {
            const hashParts = window.location.hash.split('#');
            if (hashParts.length > 2) {
                const hash = hashParts.slice(-1)[0];
                document.querySelector(`#${hash}`).scrollIntoView(true);
            }
        };
        scrollToAnchor();
        window.onhashchange = scrollToAnchor;
    },
    render: function() {
        return <div className="outer-container"><div className="inner-container">
            <div id="home" />
            <Material.Card className="card">
                <Material.CardMedia
                    overlay={<Material.CardTitle title="Joel Gustafson" />} >
                    <img src="images/cover.jpg"/>
                </Material.CardMedia>
                <Material.CardText>
                    I am a sophomore at MIT pursuing computer science and economics.
                    I'm a big fan of LISP, Material Design, Bret Victor, poker, and Roger Federer,
                    although Smalltalk, Comic Sans, Ted Nelson, blackjack, and Agassi come in as close respective seconds.
                    I can recite most xkcd comics from memory (including the alt-text) and love petty semantic debates.
                </Material.CardText>
            </Material.Card>
            <div id="work" />
            <Work />
            <div id="projects" />
            <Projects />
            <div id="heroes" />
            <Heroes />
            <div id="contact" />
            <Contact />
        </div></div>;
    }
});

module.exports = Home;