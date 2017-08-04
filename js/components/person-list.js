const React = require('react');
const ReactDom = require('react-dom');

const Person = require('./Person');

const PersonList = function () {
    return (
        <div className="person-list">
            <Person name='Derek Zoolander'
                imageUrl='https://s3.drafthouse.com/images/made/zoolander-blue-steel-ben-stiller-today-tease-150720_690101f3edc8f1aa9fc8b8b754527bd5_800_450_81_s.jpg'
                job='Male model' />

            <Person name="Donald Kuth"
                imageUrl="https://s3.drafthouse.com/images/made/zoolander-blue-steel-ben-stiller-today-tease-150720_690101f3edc8f1aa9fc8b8b754527bd5_800_450_81_s.jpg"
                job="Cleverchap" />

            <Person name="Vincent Ramdhanie"
                    //imageUrl=""  //WANT TO USE DEFAULT IMAGE URL HERE is it pulled from PERSON Component?
                    job="Programer Extraordinare" />
        </div>
    );
};

module.exports = PersonList;