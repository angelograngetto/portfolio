import {useState} from 'react'
import { withNamespaces } from 'react-i18next';

function Navbar({t}){

    const [active, setActive] = useState(false)

    return(
        <nav className="navbar">
            <button onClick={()=> setActive(true)} className={`btn__menu`}><i className="fas fa-bars"></i></button>
            <button onClick={()=> setActive(false)} className={`btn__menu-close  ${active ? 'active' : ''}`}><i className="fas fa-times"></i></button>
            <ul className="navbar__menu">
                <li><a href="/">{t('navbar_home')}</a></li>
                <li><a href="#about">{t('navbar_about')}</a></li>
                <li><a href="#projects">{t('navbar_projects')}</a></li>
                <li><a href="#contact">{t('navbar_contact')}</a></li>
            </ul>
            <ul className="navbar__social">
                <li><a title="Linkedin" href="https://linkedin.com/in/angelo-grangetto"><i className="fab fa-linkedin"></i></a></li>
                <li><a title="GitHub" href="https://github.com/angelograngetto"><i className="fab fa-github"></i></a></li>
            </ul>

            <ul className={`navbar__menu-responsive  ${active ? 'active' : ''}`}>
                <li><a onClick={()=> setActive(false)} href="/">{t('navbar_home')}</a></li>
                <li><a onClick={()=> setActive(false)} href="#about">{t('navbar_about')}</a></li>
                <li><a onClick={()=> setActive(false)} href="#projects">{t('navbar_projects')}</a></li>
                <li><a onClick={()=> setActive(false)} href="#contact">{t('navbar_contact')}</a></li>
            </ul>
        </nav>
        )
}

export default withNamespaces()(Navbar);