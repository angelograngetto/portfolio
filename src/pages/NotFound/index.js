import {Link} from 'wouter'
import {Helmet} from 'react-helmet'
export default function NotFound(){
    return(
        <div className="container">     
            <Helmet>
                <title>Not Found - Angelo Grangetto</title>
                <meta name="description" content="A Angelo Grangetto's portfolio - Fullstack developer" />
            </Helmet>
            <div className="notfound">
                <h1>¡Oops!</h1>
                <p>404 Not Found</p>
                <p>Don't worry</p>
                <Link to="/">Go home</Link>
            </div>
        </div>
    )
}