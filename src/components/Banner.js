import {useEffect, useState} from 'react'
import i18n from '../i18n'
import { withNamespaces } from "react-i18next"
function Banner({t}){
    const [isActive, setActive] = useState(true)

    
    useEffect(()=>{
        if(localStorage.getItem('lang') === 'es') setActive(false);
    },[])

    const changeLanguage = (lng) => {
        setActive(!isActive)
        i18n.changeLanguage(lng)
        localStorage.setItem('lang', lng)
    }

    return( 
        <div className='home'>
        <div className='translate'>
            <button onClick={() => changeLanguage('en')} className={` ${isActive ? 'active' : ''}`}>EN</button>
            <button onClick={() => changeLanguage('es')} className={` ${!isActive ? 'active' : ''}`}>ES</button>
        </div>
        <h5 className="scroll-text">scroll -&gt; </h5>
        <div>
            <h1>{t('welcome')}</h1>
            <p>{t('welcome_fullstack')} 🤗</p>
            <a href="#">{t('download_cv')}</a>
        </div>
        <img src="assets/img/me.png" alt="me" />
    </div>
    )
}

export default withNamespaces()(Banner);