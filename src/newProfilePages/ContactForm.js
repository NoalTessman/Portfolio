import React from 'react';
import emailjs from 'emailjs-com';
import { useAlert } from "react-alert"

export default function ContactUs() {
alert = useAlert();
function sendEmail(e){
        e.preventDefault();

         emailjs.sendForm('gmail', 'Testing', e.target, 'user_HNJQYRfuuvOlzm6OR6IKn')
         .then((result) => {
            alert.show("Your message has been sent")
         }, (error) => {
            alert.show("The contact feature may be down, I will fix this ASAP, for the time being, you can use the social media links below to contact me")
         });
        e.target.reset()
}
  return (
    <div className="ContactForm">
        <form onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email"/>
            <input type="text" placeholder="Business/Company" name="business"/>
            <textarea type="text" placeholder="Message" name="message"></textarea>
            <input type="submit" value="Send" />
        </form>
    </div>
  );
}
