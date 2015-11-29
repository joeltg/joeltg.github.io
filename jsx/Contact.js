var React = require('react');
var Material = require('material-ui');

var Contact = React.createClass({
    render: function() {
        return <Material.Card className="card">
            <Material.CardTitle title="Contact" subtitle="Ordered by most to least professional"/>
            <Material.List>
                <Material.ListItem primaryText="Résumé" href="Gustafson_Resume.pdf" target="_blank"
                                   leftIcon={<Material.IconButton iconClassName="material-icons">description</Material.IconButton>} />
                <Material.ListItem href="mailto:joelg@mit.edu" primaryText="Email"
                                   leftIcon={<Material.IconButton iconClassName="material-icons">email</Material.IconButton>} />
                <Material.ListItem primaryText="LinkedIn" href="https://linkedin.com/pub/joel-gustafson/aa/4b3/8b0" target="_blank"
                                   leftIcon={<Material.IconButton iconClassName="icon-linkedin2" />} />
                <Material.ListItem primaryText="GitHub" href="https://github.com/joeltg" target="_blank"
                                   leftIcon={<Material.IconButton iconClassName="icon-github" />} />
                <Material.ListItem primaryText="Twitter" href="https://twitter.com/gustafjt" target="_blank"
                                   leftIcon={<Material.IconButton iconClassName="icon-twitter" />} />
                <Material.ListItem primaryText="Facebook" href="https://www.facebook.com/joeltgustafson" target="_blank"
                                   leftIcon={<Material.IconButton iconClassName="icon-facebook" />} />
            </Material.List>
        </Material.Card>
    }
});

module.exports = Contact;