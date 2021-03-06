import React from 'react'
import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import './Comments.css'

function addComment(comments, id, formState) {
    if (!comments[id])
        comments[id] = []    
    comments[id].push({
        date: new Date(),
        name: formState.name,
        msg: formState.msg,
    })
    
    return comments
}

const Comments = ({className, id, comments, handleAddComment}) => {
    --id
    const initFormState = {name: '', msg: ''}
    const [formState, setFormState] = useState(initFormState)    

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddComment(addComment(comments, id, formState))
        setFormState(initFormState)
    }

    const handleChange = (e) => {        
        setFormState(
            {             
                ...formState,
                [e.target.name]: e.target.value
            }
        )
    }

    const renderCommentsList = () => {        
        if (comments[id]) {
            return (
                <div className="comments-list">
                    {
                        comments[id].map((comment, i) => (
                            <div  className="comments-list__item" key={i}>
                                <div className="comments-list__item-from">
                                    {`${comment.date.toDateString()} from ${comment.name}`}
                                </div>
                                <div>{comment.msg}</div>
                            </div>
                        ))
                    }                    
                </div>
            )            
        }
        return null
    }

    return (  
        <div className="comments">
            <Row>
                <Col xs={12} md={3}>
                    <h4>Comments</h4>
                    <div className="line line--color-primary line--width-bold" />
                </Col>  
            </Row>
            <Row>
                <Col xs={12} md={9}>
                    {renderCommentsList()}
                </Col>
            </Row>            
            <form className={`form comments__form ${className}`} onSubmit={handleSubmit} >
                <Row>
                    <Col xs={12} md={3}>
                        <input 
                            className="form__control" 
                            type="text" 
                            name="name"
                            value={formState.name} 
                            onChange={handleChange} 
                            placeholder="Your name"                             
                            minLength={3}
                            required={true}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={9}>
                        <textarea 
                            className="form__control" 
                            rows="10" 
                            name="msg"
                            value={formState.msg} 
                            onChange={handleChange} 
                            placeholder="Message"
                            minLength={3}
                            required={true}
                        />
                    </Col>
                </Row>                            
                <Row>
                    <Col xs={12} md={9}>
                        <input 
                            className="btn form__control" 
                            type="submit" 
                            value="Send"                             
                        />
                    </Col>
                </Row>                            
            </form>            
        </div>    
    )
}

export default Comments