import {Link} from 'wouter'
import {Helmet} from 'react-helmet'
import { withNamespaces } from 'react-i18next'
function NotFound({t}){
    return(
        <div className="container">     
            <Helmet>
                <title>Not Found - Angelo Grangetto</title>
                <meta name="description" content="A Angelo Grangetto's portfolio - Fullstack developer" />
            </Helmet>
            <div className="notfound">
                <h1>¡Oops!</h1>
                <p>{t('notfound')}</p>
                <p>{t('notfound_dont_worry')}</p>
                <Link to="/">{t('notfound_go_home')}</Link>
            </div>
        </div>
    )
}

export default withNamespaces()(NotFound);