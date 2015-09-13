var React = require('react');
var Material = require('material-ui');

var Heroes = React.createClass({
    getDefaultProps: function() {
        return {
            initiallyExpanded: true
        }
    },
    render: function() {
        return <Material.Card className="card" initiallyExpanded={this.props.initiallyExpanded}>
            <Material.CardTitle
                showExpandableButton={true}
                title="Heroes" />
            <Material.List expandable={true}>
                <Material.ListItem primaryText="Doug Engelbart" href="https://en.wikipedia.org/wiki/Douglas_Engelbart"
                                   leftIcon={<Material.IconButton iconClassName="material-icons">subject</Material.IconButton>} />
                <Material.ListItem primaryText="Ted Nelson" href="https://en.wikipedia.org/wiki/Ted_Nelson"
                                   leftIcon={<Material.IconButton iconClassName="material-icons">link</Material.IconButton>} />
                <Material.ListItem primaryText="Alan Kay" href="https://en.wikipedia.org/wiki/Alan_Kay"
                                   leftIcon={<Material.IconButton iconClassName="material-icons">laptop</Material.IconButton>} />
                <Material.ListItem primaryText="Bret Victor" href="http://worrydream.com"
                                   leftIcon={<Material.IconButton iconClassName="material-icons">developer_mode</Material.IconButton>} />
            </Material.List>
        </Material.Card>
    }
});

module.exports = Heroes;