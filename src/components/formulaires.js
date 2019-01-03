import React, {
    Component
} from 'react';

class Formulaires extends Component {
    state = {
        message:'',
        length:this.props.length
    }
    createMessage = () => {

    const { addMessage , pseudo , length} = this.props
    const message = {
        pseudo,
        message : this.state.message
    }

        addMessage(message)
        //reset
        this.setState({ message : '' , length })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.createMessage()
    }
    handleSendMessage = (event) => {
       if ( event.key === 'Entrer') { this.createMessage() }
    }
    handleChange = (event)  => {
        const message = event.target.value
        const length = this.props.length- message.length
        this.setState({message, length}) 
    }
    render() {
        return ( <form className = 'form'
            onSubmit = {this.handleSubmit}>

            <textarea required onKeyUp={ this.handleSendMessage } maxLength = {this.props.length} value={this.state.message} onChange={this.handleChange} />
            <div className = 'info' > {this.state.length} </div> 
            <button type = 'submit' > Envoyer </button> 
            </form>
        );
    }
}

export default Formulaires;