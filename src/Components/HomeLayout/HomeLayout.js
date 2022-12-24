import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TopHeader from '../Header/TopHeader/TopHeader';

const HomeLayout = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;