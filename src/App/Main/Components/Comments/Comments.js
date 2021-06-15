import React, { Fragment } from 'react'
import { useState } from 'react'

import './Comments.css'

function addComment(comments, id, commentFormState) {
    if (!comments[id]) {
        comments[id] = []
    }
    comments[id].push(commentFormState)
    return comments
}

const Comments = ({className, id, comments, handleAddComment}) => {            
    const initCommentFormState = {name: '', msg: ''}
    const [commentFormState, setCommentFormState] = useState(initCommentFormState)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddComment(addComment(comments, id, commentFormState))
        setCommentFormState(initCommentFormState)
    }

    const handleNameChange = (e) => {
        setCommentFormState({...commentFormState, name: e.target.value})
    }

    const handleMessageChange = (e) =>{
        setCommentFormState({...commentFormState, msg: e.target.value})
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
                                    <div style={{lineHeight: '20px'}}>{`${(new Date()).toDateString()} from ${comment.name}`}</div>
                                    <div>{comment.msg}</div>
                                </div>
                            ))
                        }
                        return null
                    })()
                }   
            </div>
            <form className={`form ${className}`}>
                <div className="row">
                    <div className="col-xs-12 col-md-3">
                        <input 
                            className="form__control" 
                            type="text" 
                            value={commentFormState.name} 
                            onChange={handleNameChange} 
                            placeholder="Your name" 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-9">
                        <textarea 
                            className="form__control" 
                            rows="10" 
                            value={commentFormState.msg} 
                            onChange={handleMessageChange} 
                            placeholder="Message"
                        />
                    </div>
                </div>                            
                <div className="row">
                    <div className="col-xs-12 col-md-9" style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <input 
                            className="btn form__control" 
                            type="submit" 
                            onClick={handleSubmit} 
                            value="Send" 
                            disabled={commentFormState.name === '' || commentFormState.msg === ''}
                        />
                    </div>
                </div>                            
            </form>            
        </Fragment>    
    )
}

export default Comments