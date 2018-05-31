import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Test(props) {
    const data = props.data;
    const ListData = data.map((data) =>
        <li className="list-group-item">{data}</li>);
    return(
        <ul className="list-group">
            {ListData}
        </ul>
    );
}

export default Test