require('babel-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');

const Board = require('./components/board');
const Person = require('./components/person');
const PersonList = require('./components/person-list');

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<PersonList />, document.getElementById('app'));
});
