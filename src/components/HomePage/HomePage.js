import React from 'react';
import CarouselImages from './CarouselImages';
import NavigationBar from './NavigationBar';
import Events from './Events';
import HomePageFooter from './HomePageFooter';

const HomePage = ()=>{
    return <div>
        <NavigationBar />
        <CarouselImages />
        <Events />
        <HomePageFooter />
    </div>
}

export default HomePage;
