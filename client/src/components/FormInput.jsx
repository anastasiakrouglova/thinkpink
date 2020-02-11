import React from "react";
import { inject } from "mobx-react";
//import styles from "./FormInput.module.css"

const FormInput = ({raceStore}) => {
        return (
            <div className="App-form-input-container">
                <label className="App-form-label">{raceStore.myLabel}</label>
                <input className="App-form-input" placeholder="John Doe" type="text" size="15"/>
            </div>
        )
}


export default inject(`raceStore`)(FormInput)