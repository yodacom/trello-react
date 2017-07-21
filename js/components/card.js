const React = require('react');
const ReactDom = require('react-dom');

const Card = function () {
    const label = 'this is a card';
    return (
        <div className="card">
            <div className="card-label">{label}</div>
        </div>
    );
};

module.exports = Card;
