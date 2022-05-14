import Header from '../components/Header'
import Banner from '../components/Banner/Banner'
import Showcase from '../components/Showcase/Showcase'
import NewSletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'

import './../styles/main.scss'

export default function Home(){
    return(
        <main className="main">
            <Header />
            <Banner screen={window.innerWidth >= 991 ? 'desktop' : 'mobile' }/>
            <div className="main__container">
                <Showcase />
            </div>
            <NewSletter />
            <Footer />
        </main>
    )
}