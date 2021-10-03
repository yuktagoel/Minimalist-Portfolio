import { useState } from "react";
import "./contacts.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
    function sendemail(e){
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_pn7iu8e', e.target, 'user_kMTzUkMU6tQQT1RN2JXuW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Get in touch</h2>
        <h3>Looking forward to start a project with you!</h3>
        <form  onSubmit={sendemail}>
          {/* <input type="text" placeholder="Email" name='email' />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button> */}
          <a href="mailto:yukta.goyal25@gmail.com">Mail</a> 
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
// import emailjs from "emailjs-com";
// import React from 'react';
// import "./contacts.scss";


// export default function ContactUs() {

//     function sendEmail(e) {
//         e.preventDefault();

//     emailjs.sendForm('gmail', 'template_pn7iu8e', e.target, 'user_kMTzUkMU6tQQT1RN2JXuW')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//         e.target.reset()
//     }

//     return(
//         <div>
//             <div className="container">
//             <form onSubmit={sendEmail}>
//                     <div className="row pt-5 mx-auto">
//                         <div className="col-8 form-group mx-auto">
//                             <input type="text" className="form-control" placeholder="Name" name="name"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <input type="email" className="form-control" placeholder="Email Address" name="email"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <input type="text" className="form-control" placeholder="Subject" name="subject"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
//                         </div>
//                         <div className="col-8 pt-3 mx-auto">
//                             <input type="submit" className="btn btn-info" value="Send Message"></input>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }