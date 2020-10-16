import React, { Component } from "react";
import './style.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faPlusCircle, faMinusCircle);

class Content extends Component {
    
    state = {
        counter: this.props.user,
        decEnable: true,
    };

    handelInc = (key) => {
        this.props.onChangeValue("+" , this.props.key2)
    };

    handelDec = () => {
        this.props.onChangeValue("-" , this.props.key2)
    };

    render() {
        const dis = this.props.user == 0;

        return (
            <div className="parent" >
                <div className="r1"><span className={this.props.user === 0 ? "zero" : "btn1"}  >{this.props.user}</span></div>
                <button className="btn2" onClick={this.handelInc}> <FontAwesomeIcon icon="plus-circle" className="icon" /></button>
                <button className="btn3" onClick={this.handelDec} disabled={dis}> <FontAwesomeIcon icon="minus-circle" className="icon" /></button> 
            </div>
        )
    }
}
export default Content;