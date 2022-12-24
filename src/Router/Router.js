import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from '../Components/HomeLayout/HomeLayout';
import AboutUs from '../Components/Pages/AboutUs/AboutUs';
import Contact from '../Components/Pages/Contact/Contact';
import Home from '../Components/Pages/Home/Home';
import LoginBox from '../Components/Pages/LoginBox/LoginBox.js';
import SignUp from '../Components/Pages/LoginBox/SignUp/SignUp';
import LoginForm from '../Components/Pages/LoginForm/LoginForm';
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy';


const Router = () => {
    const router = createBrowserRouter ([
        {path: '/', element: <HomeLayout></HomeLayout>, children:[
            {path: '/', element: <Home></Home>},
            {path: 'home', element: <Home></Home>},
            {path: 'about', element: <AboutUs></AboutUs>},
            {path: 'contact', element: <Contact></Contact>},
            {path: 'LoginBox', element: <LoginBox></LoginBox>},
            {path: 'loginForm', element: <LoginForm></LoginForm>},
            {path: 'signUp', element: <SignUp></SignUp>},
            {path: 'privacyPolicy', element: <PrivacyPolicy></PrivacyPolicy>},
        ]}
       
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;