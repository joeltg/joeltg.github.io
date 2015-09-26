var React = require('react');
var Material = require('material-ui');

var Heroes = React.createClass({
    render: function() {
        return <Material.Card className="card">
            <Material.CardTitle title="Heroes" />
            <Material.List>
                <Material.ListItem primaryText="Doug Engelbart" href="https://en.wikipedia.org/wiki/Douglas_Engelbart"
                                   secondaryText={<p style={{whiteSpace: "normal", overflow: "visible"}}>"If you're really dealing with something in a different paradigm, the vocabulary of almost everything you're trying to say is different."</p>}
                                   leftIcon={<Material.IconButton iconClassName="material-icons">format_list_numbered</Material.IconButton>} />
                <Material.ListItem primaryText="Ted Nelson" href="https://en.wikipedia.org/wiki/Ted_Nelson"
                                   secondaryText={<p style={{whiteSpace: "normal", overflow: "visible"}}>"Most people are fools, most authority is malignant, God does not exist, and everything is wrong."</p>}
                                   leftIcon={<Material.IconButton iconClassName="material-icons">link</Material.IconButton>} />
                <Material.ListItem primaryText="Alan Kay" href="https://en.wikipedia.org/wiki/Alan_Kay"
                                   secondaryText={<p style={{whiteSpace: "normal", overflow: "visible"}}>"The visual arts are the imitation of life, but the computing arts are the imitation of life itself."</p>}
                                   leftIcon={<Material.IconButton iconClassName="material-icons">laptop</Material.IconButton>} />
                <Material.ListItem primaryText="Bret Victor" href="http://worrydream.com"
                                   secondaryText={<p style={{whiteSpace: "normal", overflow: "visible"}}>"Stop drawing dead fish."</p>}
                                   leftIcon={<Material.IconButton iconClassName="material-icons">developer_mode</Material.IconButton>} />
                <Material.ListItem primaryText="Douglas Hofstadter" href="https://en.wikipedia.org/wiki/Douglas_Hofstadter"
                                   secondaryText={<p style={{whiteSpace: "normal", overflow: "visible"}}>"In the end, we self-perceiving, self-inventing, locked-in mirages are little miracles of self-reference."</p>}
                                   leftIcon={<Material.IconButton iconClassName="material-icons">loop</Material.IconButton>} />
            </Material.List>
        </Material.Card>
    }
});

module.exports = Heroes;