import React from 'react'

const ContactForm = () => {
    return (
        <div className="contact-cont">
        <div class="login-box">
            <p>Login</p>
            <form>
                <div class="user-box">
                <label>Email</label>
                    <input required="" name="" type="text"/>
                </div>
                <div class="user-box">
                <label>Last Name</label>
                    <input required="" name="" type="text"/>
                </div>
                <div class="user-box">
                <label>Contact</label>
                    <input required="" name="" type="number"/>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
            <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
        </div>
        </div>
    )
}

export default ContactForm
