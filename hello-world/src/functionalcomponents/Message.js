// THis is for changing the sentence when click on button
import React, { Component } from 'react';

class Message extends Component
{
    constructor (){
        super ()
        this.state = {
            message: 'Welcome Visitors'
        }
    }
    changeMessage()
    {
        this.setState({
            message: 'Thank You For Subscribing Us '
        })
    }
    render ()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button className='btn' onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}

export default Message;