import React from 'react';
import Navigation from "../layouts/Navigation";
import Footer from "../layouts/Footer";
import BookView from "../features/books/BookView";

function Home(props) {
    return (
        <div>
            <Navigation/>
            <BookView/>
            <Footer/>
        </div>
    );
}

export default Home;