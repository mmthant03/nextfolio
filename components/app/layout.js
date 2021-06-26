import Header from './header'
import Meta from './meta'

const Layout = ({ children }) => {
    return (
        <div>
            <Meta />
            <Header />
            {children}
        </div>
    )
}

export default Layout