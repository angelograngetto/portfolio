import { withNamespaces } from "react-i18next"
function Banner({t}){



    return( 
        <div className='home'>
        <h5 className="scroll-text">scroll -&gt; </h5>
        <div>
            <h1>{t('welcome')}</h1>
            <p>{t('welcome_fullstack')} 🤗</p>
            {/* <a href="#">{t('download_cv')}</a> */}
            <div className="buttons-social">
                <a 
                    title="LinkedIn" 
                    href="https://linkedin.com/in/angelo-grangetto"
                    target="_blank"
                    rel="noreferrer" 
                    className="buttons-social__linkedin">
                        <i className="fab fa-linkedin"></i>
                </a>
                <a 
                    title="GitHub" 
                    href="https://github.com/angelograngetto"
                    target="_blank"
                    rel="noreferrer"
                    className="buttons-social__github">
                        <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
        <img src="assets/img/me.png" alt="me" />
    </div>
    )
}

export default withNamespaces()(Banner);