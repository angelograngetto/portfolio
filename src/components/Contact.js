import { withNamespaces } from "react-i18next"
function Contact({t}){
    return(
        <div className="contact" id="contact">
            <h2>{t('contact_title')}</h2>
            <p>{t('contact_p')}</p>
            <form action="https://submit-form.com/5VkAkSmZ">
                <label htmlFor="name">{t('contact_your_name')}*</label>
                <input 
                    type="text" 
                    minlength="4" 
                    maxlength="50"
                    id="name" 
                    name="name" 
                    placeholder="Alan Turing" 
                    required
                />
                <label htmlFor="email">{t('contact_your_email')}*</label>
                <input 
                    type="email" 
                    minlength="8" 
                    maxlength="150"
                    id="email" 
                    name="email" 
                    placeholder="yourname@domain.com" 
                    required 
                />
                <label htmlFor="message">{t('contact_your_message')}*</label>
                <textarea
                    id="message"
                    name="message"
                    minlength="50" 
                    maxlength="500"
                    placeholder={t('contact_write_a_message')}
                    required
                ></textarea>
                
                <button type="submit">{t('contact_send')}</button>
                <small>* {t('contact_required')}.</small>
            </form>
        </div>
    )
}

export default withNamespaces()(Contact);