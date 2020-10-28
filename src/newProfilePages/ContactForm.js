import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

    function sendEmail(e){
        console.log("this works, just turning it off for now so I don't hit the quota")
        e.preventDefault();

         emailjs.sendForm('gmail', 'Testing', e.target, 'user_HNJQYRfuuvOlzm6OR6IKn')
         .then((result) => {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
         });
         console.log("Are you here?")
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
