import React from "react";
import './css/Contact.css'

function Contact(){
    return(
        <div className="contact-main">
            <h1 className="contact-header">Get In Touch</h1>
            <div className="contact-holder">
                <h1 className="cont-header">Have any questions or want to work with me?</h1>
                <a className="send-button" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqsgXNwKvMgqqSdKjbjTMWGwtgbxdTdnRmQzfQVkdSmLpLnWrjRpClBtQsdFGHSjTrVqV" target='_blank'>Send Email📨</a>
            </div>
        </div>
    )
}

export default Contact;