import { withNamespaces } from "react-i18next"
function Contact({t}){
    return(
        <div className="contact" id="contact">
            <h2>{t('contact_title')}</h2>
            <p>{t('contact_p')}</p>
            <form action="https://submit-form.com/5VkAkSmZ">
                <label htmlFor="name">{t('contact_your_name')}</label>
                <input type="text" id="name" name="name" placeholder="Alan Turing" required="" />
                <label htmlFor="email">{t('contact_your_email')}</label>
                <input type="email" id="email" name="email" placeholder="yourname@domain.com" required="" />
                <label htmlFor="message">{t('contact_your_message')}</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder={t('contact_write_a_message')}
                    required=""
                ></textarea>
                <button type="submit">{t('contact_send')}</button>
            </form>
        </div>
    )
}

export default withNamespaces()(Contact);