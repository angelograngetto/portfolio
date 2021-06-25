import { withNamespaces } from "react-i18next"
function Footer({t}){
    return(
        <footer>
            <p>"{t('footer')}"</p>
        </footer>
    )
}

export default withNamespaces()(Footer);