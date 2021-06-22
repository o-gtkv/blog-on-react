import React, { useState } from 'react'
// import axios from 'axios'

const FeedbackForm = (props) => {
    const [userData, setUserData] = useState({name: '', email: '', subject: '', msg: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserData({name: '', email: '', subject: '', msg: ''})
        console.log('Not implemented yet.');
        // axios.post('https://my-json-server.typicode.com/o-gtkv/server/someData', userData)
        //     .then(res => res.data)
        //     .then(({name, email, subject, msg}) => console.log(`name: ${name} email: ${email} subject: ${subject} msg: ${msg}`))
    }

    return (
        <form className={`form + ${props.className}`} onSubmit={handleSubmit}>
            <div className="adjacent-form-controls ">
                <input className="form__control"
                    type="text"
                    onChange={(e) => setUserData({...userData, name: e.target.value})}
                    placeholder="Your name"
                    value={userData.name}
                    required />
                <input className="form__control"
                    type="text"
                    onChange={(e) => setUserData({...userData, email: e.target.value})}
                    placeholder="Your email"
                    value={userData.email}
                    required />
            </div>
            <div>
                <input className="form__control"
                    type="text"
                    onChange={(e) => setUserData({...userData, subject: e.target.value})}
                    placeholder="Subject"
                    value={userData.subject}
                    required />
            </div>
            <div>
                <textarea className="form__control"
                    placeholder="Message"
                    onChange={(e) => setUserData({...userData, msg: e.target.value})}
                    value={userData.msg}
                    required />
            </div>
            <div>
                <input className="btn" type="submit" value="Send Message" />
            </div>
        </form>
    )
}

export default FeedbackForm