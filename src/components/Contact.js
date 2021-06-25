export default function Contact(){
    return(
        <div className="contact" id="contact">
            <h2>Contact</h2>
            <p>Send me a email and let's talk</p>
            <form action="https://submit-form.com/5VkAkSmZ">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name="name" placeholder="Alan Turing" required="" />
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" name="email" placeholder="yourname@domain.com" required="" />
                <label htmlFor="message">Your message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Write me a message here"
                    required=""
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}