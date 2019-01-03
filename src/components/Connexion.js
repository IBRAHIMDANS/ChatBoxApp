import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
class Connexion extends Component {
    state ={
        pseudo:'',
        clicked:false
    }
    handleChange = event =>{
        const pseudo = event.target.value
        this.setState({pseudo})
    }
    handleSubmit= event =>{
        event.preventDefault()
        this.setState({clicked:true})
    }
    render() {
        if(this.state.clicked) {
        return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
    }
        return (
            <div className="connexionBox">  
                <form className='connexion' onSubmit={this.handleSubmit}>
                    <input
                    placeholder='Username'
                    type='text'
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    required/>
                    <button type='submit'> Connexion</button>
                </form>
            </div>
        );
    }
}

export default Connexion; 