var React = require('react');
var Material = require('material-ui');
var Work = React.createClass({
    render: function() {
        return <Material.Card className="card">
            <Material.CardTitle title="Work" />
            <Material.List>
                <Material.ListItem primaryText="MIT Media Lab" href="http://viral.media.mit.edu/projects/glue/"
                                   secondaryText={<p style={{whiteSpace: "normal", overflow: "visible"}}>
                                        In summer of 2015, I worked with the Viral Communications group on Glue, a media analysis framework.</p>}
                                   leftIcon={<Material.IconButton iconStyle={{marginLeft: 5, marginTop: 5}} iconClassName="icon-mit_media_lab_2014_logo_detail"></Material.IconButton>}/>

                <Material.ListItem primaryText="MIT Admissions Blogger" href="http://mitadmissions.org/blogs/author/joeltg"
                                   secondaryText={<p style={{whiteSpace: "normal", overflow: "visible"}}>
                                        I'm also a student blogger for the MIT Admissions Office. Read more things I wrote over there.</p>}
                                   leftIcon={<Material.IconButton iconClassName="material-icons">description</Material.IconButton>} />
            </Material.List>
        </Material.Card>
    }
});

module.exports = Work;