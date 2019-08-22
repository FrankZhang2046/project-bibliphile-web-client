import React from 'react';
import '../../styles/form.scss';

export default class Form extends React.Component{
    state={
        value: 'enter string to perform search'
    }

    formInput = React.createRef();

    formSubmit = (event) => {
        event.preventDefault();
        alert(this.state.value)
    }

    handleChange = (event) => {
        this.setState(
            {
                value:event.target.value
            }
        )
    }

    render(){
        return(
            <div className="form-container">
                <form ref={this.formInput}  className="form"
                onSubmit={(event)=>{this.formSubmit(event)}}
                >
                    <input type="text"
                    placeholder={this.state.value}
                    onChange={(event)=>{this.handleChange(event)}}
                    className="form--input"
                    />

                    <button type="submit" 
                    className="form--submit">{'submit'.toUpperCase()}</button>
                </form>
            </div>
        )
    }
}
