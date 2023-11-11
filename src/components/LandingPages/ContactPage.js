import React from 'react'

const ContactPage = () => {
  return (
    <div class="contact padding--top padding--bottom bg-light" >
        <div class="container">
            <div class="section__header text-center">
                <h2>Contact Us</h2>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            </div>
            <div class="section__wrapper">
                <div class="contact__form">
                    <form class="d-flex flex-wrap justify-content-between" action="contact.php" id="contact-form" method="POST">
                        <input type="text" placeholder="Your Name" id="name" name="name" required="required" />
                        <input type="text" placeholder="Your Email" id="email" name="email" required="" />
                        <input class="w-100" type="text" placeholder="Subject" id="subject" name="subject" required="" />
                        <textarea placeholder="Your Message" rows="8" name="message" id="message" required=""></textarea>
                        <div class="text-center w-100">
                            <button type="submit" class="default-btn move-right"><span>SEND NOW</span></button>
                        </div>
                    </form>
                    <p class="form-message"></p> 
                </div> 
            </div>
        </div>
    </div>
  )
}

export default ContactPage
