import React from 'react';
import axios from 'axios';

class Data extends React.Component {
    constructor() {
        super();
        this.state= {
            data: []
        }
    }

    stateSetter = (newdata) => {
        this.setState({data: newdata})
    }

    componentDidMount(){
    axios
    .get("http://localhost:5000/api/restricted/data")
    .then(res => {
        console.log('Data Received', res)
        this.stateSetter(res.data)
    })   
    .catch(err => {
        console.log('Request failed')
    })
    }

    render(){
        return (
            <div>
            <h1>Data:</h1>
            {this.state.data
                ? this.state.data.map(object => (
                    <div key={object.id}>
                    <h3>{object.name}</h3>
                    <p>Course: {object.course}</p>
                    <p>Technique: {object.technique}</p>
                    </div>
                ))
            : null}
            </div>
        )
    }
}

export default Data;