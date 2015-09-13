var React = require('react');
var Material = require('material-ui');

var Projects = React.createClass({
    getDefaultProps: function() {
        return {
            initiallyExpanded: true
        }
    },
    render: function() {
        return <Material.Card className="card" initiallyExpanded={this.props.initiallyExpanded}>
            <Material.CardTitle
                showExpandableButton={true}
                title="Projects" />
            <Material.List expandable={true}>
                <Material.ListItem primaryText="LISP" href=""
                                   secondaryText="LISP is the language of God, and parentheses are the frame of the universe"
                                   leftIcon={<Material.IconButton iconClassName="material-icons">code</Material.IconButton>} />
                <Material.ListItem primaryText="Magic Deck"
                                   secondaryText="I made an NFC-tagged deck of cards for a Media Lab seminar on Magic"
                                   href="http://indistinguishablefrom.media.mit.edu/2015/03/14/trick-documentation-magic-deck/"
                                   leftIcon={<Material.IconButton iconClassName="material-icons">nfc</Material.IconButton>} />
            </Material.List>
        </Material.Card>
    }
});

module.exports = Projects;