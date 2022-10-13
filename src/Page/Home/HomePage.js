import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import NavBarLogin from '../../Components/Uitily/NavBarLogin';
import Silder from './../../Components/Home/Silder';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import Footer from '../../Components/Uitily/Footer';
const HomePage = () => {
    return (
        <div className='font' style={{ minHeight: '670px' }}>

            <Silder />
            <HomeCategory />
            <CardProductsContainer title="most selling" btntitle="More" pathText="/products" />
            <DiscountSection />
            <CardProductsContainer title="News" btntitle="More" pathText="/products" />
            <BrandFeatured title="Best brands " btntitle="More"  />

        </div>
    )
}

export default HomePage
