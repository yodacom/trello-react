const React = require('react');
const ReactDOM = require('react-dom');
const Card = require('./Card');

const CardList = React.createClass({
    render: function () {
        const cards = [];
        for (let i = 0; i < 3; i++) {
            cards.push(<Card />);
        }
        return (
            <div className="card-list">
                {cards}
            </div>
        );
    }
});

module.exports = CardList;