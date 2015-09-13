var React = require('react');
var Material = require('material-ui');
var Router = require('react-router');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var ThemeManager = new Material.Styles.ThemeManager();
ThemeManager.setTheme(ThemeManager.types.LIGHT);
let CustomTheme = {
    getPalette() {
        return { };
    },
    getComponentThemes(palette) {
        return {
            appBar: {
                color: '#2e7d32',
            }
        }
    }
};
ThemeManager.setTheme(CustomTheme);
var Content = React.createClass({displayName: 'Content',
    mixins: [React.addons.LinkedStateMixin],
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    handleChange: function(e, t) {
        console.log(e);
        console.log(t);
    },
    render: function() {
        return <div>
            <Material.AppBar iconElementLeft={<Material.IconButton href='/' iconClassName="material-icons">home</Material.IconButton>}
                             title="joel" />
            <div className="content">
                <Router.RouteHandler />
            </div>
        </div>
    }
});

module.exports = Content;