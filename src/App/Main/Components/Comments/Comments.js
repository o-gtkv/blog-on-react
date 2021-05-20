import React, { Fragment } from 'react'
import { useState } from 'react'

import './Comments.css'

function addComment(comments, id, name, text) {
    if (!comments[id]) {
        comments[id] = []
    }
    comments[id].push({
        name,
        text
    })  
    return comments
}

const Comments = ({className, id, comments, newComment}) => {            
    const [nameValue, setNameValue] = useState('')
    const [messageValue, setMessageValue] = useState('')    

    const onSend = (event) => {
        event.preventDefault()
        newComment(addComment(comments, id, nameValue, messageValue))
        setNameValue('')
        setMessageValue('')
    }

    const onNameValueChange = (event) => {
        setNameValue(event.target.value)
    }

    const onMessageValueChange = (event) =>{
        setMessageValue(event.target.value)
    }

    return (  
        <Fragment>
            <div className="row margin-top--md">
                <div className="col-xs-12 col-md-3">
                    <h4>Comments</h4>
                    <div className="line line--color-primary line--width-bold margin-top--xs margin-bottom--xs" />
                </div>
            </div>
            <div className="comments-list margin-top--md">
                {   
                    (function () {
                        if (comments[id]) {
                            return comments[id].map((comment, i) => (
                                <div  className="comments-list__item" key={i}>
                                    <div style={{lineHeight: '20px'}}>{(new Date ).toDateString() + ' from ' + comment.name}</div>
                                    <div>{comment.text}</div>
                                </div>
                            ))
                        }
                        return null
                    })()
                }   
            </div>
            <form className={'form ' + className ? className : '' }>
                <div className="row">
                    <div className="col-xs-12 col-md-3">
                        <input 
                            className="form__control" 
                            type="text" 
                            value={nameValue} 
                            onChange={onNameValueChange} 
                            placeholder="Your name" 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-9">
                        <textarea 
                            className="form__control" 
                            rows="10" 
                            value={messageValue} 
                            onChange={onMessageValueChange} 
                            placeholder="Message"
                        />
                    </div>
                </div>                            
                <div className="row">
                    <div className="col-xs-12 col-md-9" style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <input 
                            className="btn form__control" 
                            type="submit" 
                            onClick={onSend} 
                            value="Send" 
                            disabled={nameValue === '' || messageValue === ''}
                        />
                    </div>
                </div>                            
            </form>            
        </Fragment>    
    )
}

export default Comments