import { withNamespaces } from 'react-i18next';
function About({t}){
    return(
        <div className="about" id="about">
            <h2>{t('about_title')}</h2>
            <p>{t('about_p')}</p>
            <h4>{t('about_tech')}</h4>
            <div className="technologies">
                <i title="JavaScript" className="fab fa-js-square"></i>
                <i title="React" className="fab fa-react"></i>
                <i title="CSS3" className="fab fa-css3-alt"></i>
                <i title="SASS" className="fab fa-sass"></i>
                <i title="Python / DJango" className="fab fa-python"></i>
                <i title="NodeJS" className="fab fa-node-js"></i>
            </div>
            <h4>{t('about_ed')}</h4>
            <ul>
                <li>
                    Fullstack Python - Digitalers Telecom & EducacionIT
                    <br />
                    <small>2021</small>
                </li>
                <li>
                    {t('about_sass')} - EducacionIT
                    <br />
                    <small>2021</small>
                </li>
                <li>
                    {t('about_eng')} - UTN FRVM
                    <br />
                    <small>2017-2018</small>
                </li>
            </ul>
        </div>
    )
}
export default withNamespaces()(About);