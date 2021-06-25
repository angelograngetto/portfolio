import {useState} from 'react'


export default function Navbar(){

    const [active, setActive] = useState(false)

    return(
        <nav className="navbar">
            <button onClick={()=> setActive(true)} className={`btn__menu`}><i className="fas fa-bars"></i></button>
            <button onClick={()=> setActive(false)} className={`btn__menu-close  ${active ? 'active' : ''}`}><i className="fas fa-times"></i></button>
            <ul className="navbar__menu">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className="navbar__social">
                <li><a title="Linkedin" href="https://linkedin.com/in/angelo-grangetto"><i className="fab fa-linkedin"></i></a></li>
                <li><a title="GitHub" href="https://github.com/angelograngetto"><i className="fab fa-github"></i></a></li>
            </ul>

            <ul className={`navbar__menu-responsive  ${active ? 'active' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        )
}