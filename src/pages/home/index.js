import About from '../../components/About'
import Banner from '../../components/Banner'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import {Helmet} from 'react-helmet'
export default function Home(){
    return(
        <div className='container'>
            <Helmet>
                <title>Portfolio - Angelo Grangetto</title>
                <meta name="description" content="A Angelo Grangetto's portfolio - Fullstack developer. You can see my projects and skills here." />
            </Helmet>
            <Banner/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
        )
}