var React = require('react');
var ReactDOM = require('react-dom');

// ===== STATEFUL COMPONENT VERSION ======
var Person = React.createClass({
    getInitialState: function() {
        return {
            highlight: false 
        };
},
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
  render: function(){
      var classes = 'person' + (this.state.highlight ? 'highlight' : '');
      return (
          <div className={classes} onClick={this.onClick}>
              <div className="person-name">{this.props.name}</div>
              <img className="person-img" src={this.props.imageUrl}/>
              <div className="person-job">
                  {this.props.job}
              </div>
              
            </div>
            
      )},

        Person: defaultProps = { 
            imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
        }

});

module.exports = Person;
