var React = require('react');

var Home = React.createClass({
  render: function() {
    var test = 'World!';
    return (
      <h1>Hello {test}</h1>
    )
  }
});

module.exports = Home;
