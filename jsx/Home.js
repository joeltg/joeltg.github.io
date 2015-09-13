var React = require('react');
var Material = require('material-ui');
var Contact = require('./Contact');
var Projects = require('./Projects');
var Heroes = require('./Heroes');

var Home = React.createClass({
    render: function() {
        return <div>
            <Material.Card className="card">
                <Material.CardMedia
                    overlay={<Material.CardTitle title="Joel Gustafson" />} >
                    <img src="images/cover.jpg"/>
                </Material.CardMedia>
                <Material.CardText>
                    I am a sophomore at MIT pursuing computer science and economics.
                    I'm a big fan of LISP, Material Design, Bret Victor, poker, and Roger Federer,
                    although Smalltalk, Comic Sans, Ted Nelson, blackjack, and Agassi come in as close respective seconds.
                    I can recite most xkcd comics from memory (including the alt-text), and love petty semantic debates.
                </Material.CardText>
            </Material.Card>
            <Projects />
            <Heroes />
            <Contact />
        </div>;
    }
});

module.exports = Home;