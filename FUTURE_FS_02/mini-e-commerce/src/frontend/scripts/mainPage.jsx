import React from 'react';
import appLogo from '../../assets/app-logo.png';
import '../styles/mainPage.css';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <>
            <div className="main-page">
                <div className="header">
                    <header className="app-header">
                        <div className='app-branding'>
                            <img src={appLogo} className='app-logo' alt="App Logo" />
                            <div className='app-name'>Click Charm</div>
                        </div>
                        <div className='app-tagline'>
                            <div className='tagline'>Your Online E-Commerce For Shopping</div>
                        </div>
                        <div className='auth-buttons'>
                            <Link>About</Link>
                            <Link className='login-btn' >Login</Link>
                        </div>
                    </header>
                </div>
                <div>
                    <main></main>
                </div>
                <div>
                    <footer></footer>
                </div>
            </div>
        </>
    );
}

export default MainPage;