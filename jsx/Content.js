var React = require('react');
var Material = require('material-ui');
var Router = require('react-router');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var ThemeManager = new Material.Styles.ThemeManager();
ThemeManager.setTheme(ThemeManager.types.LIGHT);
let CustomTheme = {
    getPalette() {
        return {
            accent1Color: "white"
        };
    },
    getComponentThemes(palette) {
        return {
            appBar: {
                color: '#2e7d32',
                textColor: 'white'
            },
            tabs: {
                backgroundColor: '#2e7d32'
            }
        }
    }
};
ThemeManager.setTheme(CustomTheme);
var Content = React.createClass({displayName: 'Content',
    mixins: [React.addons.LinkedStateMixin, Router.Navigation],
    getChildContext() { return { muiTheme: ThemeManager.getCurrentTheme() }; },
    getInitialState: function() { return { tabsValue: 2 } },
    childContextTypes: { muiTheme: React.PropTypes.object },
    handleChange: function(t, e) {
        var name = e.props.label.toLowerCase();
        if (name == "contact") { console.log(name); }
        window.location = '/#/#' + e.props.label.toLowerCase();
        this.setState({tabsValue: t});
    },
    click: function() {
        window.location = '/#/#home';
        this.setState({tabsValue: 3});
    },
    render: function() {
        return <table className="fill" border="0" cellSpacing="0" cellPadding="0">
            <tr style={{height: "64px"}}><td style={{height: 64, width: "100%"}}>
            <Material.AppBar title="Joel G" className="appBar" iconStyleRight={{width: "100%", maxWidth: "400px"}}
                iconElementLeft={<Material.IconButton onClick={this.click} iconClassName="material-icons">home</Material.IconButton>}
                iconElementRight={<Material.Tabs value={this.state.tabsValue} onChange={this.handleChange}>
                    <Material.Tab value={0} label="Work" />
                    <Material.Tab value={1} label="Projects" />
                    <Material.Tab value={2} label="Heroes" />
                    <Material.Tab value={3} label="Contact" />
                </Material.Tabs>}/></td></tr>
            <tr><td className="fill"><div className="content">
                <Router.RouteHandler />
            </div></td></tr>
        </table>
    }
});

module.exports = Content;