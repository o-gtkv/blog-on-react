import React from 'react'

const FeedbackForm = () => {
    return (
        <form className="form margin-bottom--lg">
            <div className="adjacent-form-controls ">
                <input className="form__control" type="text" placeholder="Your name" />
                <input className="form__control" type="text" placeholder="Your email" />
            </div>
            <div>
                <input className="form__control" type="text" placeholder="Subject" />
            </div>
            <div>
                <textarea className="form__control" placeholder="Message" />                
            </div>
            <div>
                <input className="btn" type="submit" value="Send Message" />
            </div>
        </form>
    )
}

export default FeedbackForm