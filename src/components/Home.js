import React from 'react'
import Footer from './Footer';
import Body from './Body';
import Header from './Header';
function Home() {
    return (
        <div className="home">
            <div>
                <Header />
            </div>
            <div>
                <Body />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;
