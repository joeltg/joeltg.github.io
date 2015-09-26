var React = require('react');
var Material = require('material-ui');

var Projects = React.createClass({
    render: function() {
        return <Material.Card className="card">
            <Material.CardTitle title="Projects" />
            <Material.List>
                <Material.ListItem primaryText="GRASP" href="grasp/"
                                   secondaryText={<p style={{whiteSpace: "normal", overflow: "visible"}}>
                                        GRASP visualizes dataflow of arbitrary LISP s-expressions with a directed graph. Editable graphs coming soon in 2016!</p>}
                                   leftIcon={<Material.IconButton iconClassName="material-icons">settings_ethernet</Material.IconButton>} />
                <Material.ListItem primaryText="Magic Deck"
                                   secondaryText={<p style={{whiteSpace: "normal", overflow: "visible"}}>
                                        I made an NFC-tagged deck of cards for a Media Lab seminar on Magic.</p>}
                                   href="http://indistinguishablefrom.media.mit.edu/2015/03/14/trick-documentation-magic-deck/"
                                   leftIcon={<Material.IconButton iconClassName="material-icons">nfc</Material.IconButton>} />
            </Material.List>
        </Material.Card>
    }
});

module.exports = Projects;