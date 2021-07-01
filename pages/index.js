import Layout from '../components/app/layout'
import Banner from '../components/profile/banner'
import MainContent from '../components/index/main-content'
import Footer from '../components/app/footer'

const Home = () => {
    return (
        <div className="bg-gray-200">
            <Layout>
                <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
                    <Banner />
                    <MainContent />
                </div>
                 
            </Layout>
            
        </div>
    )
}

export default Home