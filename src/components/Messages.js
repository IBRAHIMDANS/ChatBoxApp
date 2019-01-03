import React, { Component } from 'react';

class Messages extends Component {
    render() {
     const {
         pseudo,
         message,
         isUser
     } = this.props
     if (isUser(pseudo)){
        return ( <p className = 'user-message' > 
        { message }  </p >
        );
     }
        return (
                <p className='not-user-message'>
               <strong>{pseudo} : </strong>  {message}
                </p>
        );
    }
}

export default Messages;