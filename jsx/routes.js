var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Content = require('./Content');
var Home = require("./Home");

var routes = (
    <Route handler={Content} >
        <Route name="home" path="/" handler={Home} />
    </Route>
);

module.exports = routes;