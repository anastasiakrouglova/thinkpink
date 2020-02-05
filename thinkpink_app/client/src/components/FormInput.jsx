import React from "react";
//import styles from "./FormInput.module.css"

class FormInput extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            text: 'voornaampje',
            width: 30,

        }
    }
    render() {
        return (
            <div className="App-form-input-container">
                <label className="App-form-label">{this.state.text}</label>
                <input className="App-form-input" placeholder="John Doe" type="text" size="15"/>
            </div>
        )
    }
}


export default FormInput