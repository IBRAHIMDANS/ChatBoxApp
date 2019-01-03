import React, { Component, createRef } from 'react'
import Formulaires from './components/formulaires';
import './App.css'
import './animation.css'
import Messages from './components/Messages';
import base from './base'
import  { CSSTransition , TransitionGroup } from 'react-transition-group'
class App extends Component {
  state = {
    messages : {},
    pseudo : this.props.match.params.pseudo
  }

  messageRef = createRef()

  componentDidMount(){
    base.syncState('/',{
      context :  this,
      state : 'messages',
    }) // sync bdd firebase et state message
  }

  componentDidUpdate(){
    const ref = this.messageRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message =>{
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`]= message
    Object
    .keys(messages)
    .slice(0,-10)
    .forEach(key => 
      {
      messages[key] = null
    })  // Pour garder seulement les 10 derniers msg

    this.setState({messages})
  }
  isUser = pseudo => pseudo === this.state.pseudo
  render () {
    const messages = Object
    .keys(this.state.messages)
    .map(key => (
      <CSSTransition
        key={key}
      timeout={ 200}
      classNames='fade'
      >
    <Messages
        pseudo ={this.state.messages[key].pseudo}
        message ={this.state.messages[key].message}
        isUser = {this.isUser}
        />
      </CSSTransition>
    ))
    console.log( messages);
    return (
      <div className='Box'>
       <div className='messages' ref={this.messageRef}>
          <TransitionGroup className='message'>
            { messages }
          </TransitionGroup>
      
       </div>
       <Formulaires 
         length={140}
         pseudo = {this.state.pseudo}
         addMessage = {this.addMessage}
       />
      </div>
    )
  }
}

export default App