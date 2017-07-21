const React = require('react');
const ReactDOM = require('react-dom');
const Card = require('./Card');
const CardList = require('./card-list');

// ====== Attempt 1 successful to creat list of 9 items========
// const Board = React.createClass({
//     render: function () {
//         const Lists = [];
//         for (let i = 0; i < 3; i++) {
//             Lists.push(<CardList />);
//         }
//         return (
//             <div className="board-list">
//                 {Lists}
//             </div>
//         );
//     }
// });

// ======= Attempt 2

const Board = function () {
    const label = CardList;
    return (
        <div className="board">
            <div className="card-label">{label}</div>
        </div>
    );
};



module.exports = Board;