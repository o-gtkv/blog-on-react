import React, { useState } from 'react'
// import axios from 'axios'

const FeedbackForm = (props) => {
    const initData = {name: '', email: '', subject: '', msg: ''}
    const [userData, setUserData] = useState(initData)

    const handleSubmit = (e) => {
        console.log('Not implemented yet.');
        // e.preventDefault()
        // setUserData(initData)
        // axios.post('https://my-json-server.typicode.com/o-gtkv/server/someData', userData)
        //     .then(res => res.data)
        //     .then(({name, email, subject, msg}) => console.log(`name: ${name} email: ${email} subject: ${subject} msg: ${msg}`))
    }

    const handleChange = (e) => {
        setUserData(
            {             
                ...userData,   
                [e.target.name]: e.target.value
            }
        )
    }

    return (
        <form className={`form + ${props.className}`} onSubmit={handleSubmit}>
            <div className="adjacent-form-controls ">
                <input className="form__control"
                    type="text"
                    onChange={handleChange}
                    placeholder="Your name"
                    name="name"
                    value={userData.name}
                    required />
                <input className="form__control"
                    type="email"
                    onChange={(e) => setUserData({...userData, email: e.target.value})}
                    placeholder="Your email"
                    name="email"
                    value={userData.email}
                    required />
            </div>
            <div>
                <input className="form__control"
                    type="text"
                    onChange={handleChange}
                    placeholder="Subject"
                    name="subject"
                    value={userData.subject}
                    required />
            </div>
            <div>
                <textarea className="form__control"
                    placeholder="Message"
                    onChange={handleChange}
                    name="msg"
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