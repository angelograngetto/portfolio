import listprojects from '../../listprojects'
import {Helmet} from 'react-helmet'
import { withNamespaces } from 'react-i18next';
import {useLocation} from 'wouter'



function Project({params, t}){
    const [path, pushLocation] = useLocation()
    const {id} = params
    const project = listprojects.filter(project => project.id === id)
    if(project.length === 0){
        pushLocation('/404')
    }
    const {title, large_description, demo, github, technologies, images} = project[0]

    window.scrollTo( 0, 0 );

    return(
        <div className="container">
            <Helmet>
                <title>{title} - Angelo Grangetto</title>
                <meta name="description" content={large_description} />
            </Helmet>
            <div className="project">
                <h1>{title}</h1>
                <a href={demo} rel='noreferrer' target='_blank'><i className="fas fa-globe"></i>{t('projects_visit_site')}</a>
                <a href={github} rel='noreferrer' target='_blank'><i className="fab fa-github"></i>GitHub</a>
                <p>{large_description}</p>
                <h3>{t('projects_tech')}</h3>
                <p>{technologies}</p>
                <h2>Screenshots</h2>
                <div className="screenshots">
                    {images.map(image => (
                        <img key={image} loading="lazy" src={image} alt={title} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default withNamespaces()(Project);