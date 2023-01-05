import React from "react";

export default class Counter extends React.Component {
    state = {
        counter: 0,
    }
    constructor(props) {
        super(props) 

        setInterval(() => {
            this.setState( prevState => {
                 return {counter: this.state.counter + 1} 
            }
            )
        }, 1000);
    }


    
    render() {
        return <h1>{this.state.counter}</h1>
    }
}