import Header from './header'
import Meta from './meta'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Meta />
            <Header />
            {children}
            <Footer />   
        </div>
    )
}

export default Layout