var React = require('react');
var Material = require('material-ui');

var Contact = React.createClass({
    getDefaultProps: function() {
        return {
            initiallyExpanded: true
        }
    },
    render: function() {
        return <Material.Card className="card" initiallyExpanded={this.props.initiallyExpanded}>
            <Material.CardTitle
                showExpandableButton={true}
                title="Contact" />
            <Material.List expandable={true}>
                <Material.ListItem href="mailto:joelg@mit.edu" primaryText="Email"
                                   leftIcon={<Material.IconButton iconClassName="material-icons">email</Material.IconButton>} />
                <Material.ListItem primaryText="Resume" href="Gustafson_Resume.pdf"
                                   leftIcon={<Material.IconButton iconClassName="material-icons">description</Material.IconButton>} />
                <Material.ListItem primaryText="Twitter" href="https://twitter.com/gustafjt"
                                   leftIcon={<Material.IconButton iconClassName="icon-twitter" />} />
                <Material.ListItem primaryText="Facebook" href="https://www.facebook.com/joeltgustafson"
                                   leftIcon={<Material.IconButton iconClassName="icon-facebook2" />} />
                <Material.ListItem primaryText="LinkedIn" href="https://linkedin.com/pub/joel-gustafson/aa/4b3/8b0"
                                   leftIcon={<Material.IconButton iconClassName="icon-linkedin" />} />
            </Material.List>
        </Material.Card>
    }
});

module.exports = Contact;