import React from 'react';
import appLogo from '../../assets/app-logo.png';
import '../styles/mainPage.css';
import { Link } from 'react-router-dom';
import shoeAds from '../../assets/shoe-ads.mp4';
import shoe1 from '../../assets/air-jodan-4-retro.webp';
import shoe2 from '../../assets/air-jodan-gold.jpg';
import shoe3 from '../../assets/akatsuki-sneakers.png';
import shoe4 from '../../assets/blue-sneakers.webp';
import shoe5 from '../../assets/Inferno-Customized-Shoes.jpg';
import shoe6 from '../../assets/nike-air-jodan.jpg';
import shoe7 from '../../assets/nike-shoe.png';
import shoe8 from '../../assets/sport-shoe-green.jpg';
import shoe9 from '../../assets/zer0-3-PF.avif';

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
                            <Link className='cart-btn'><span className='cart-icon'>&#x1F6D2;</span></Link>
                            <Link className='login-btn' >Login</Link>
                        </div>
                    </header>
                </div>
                <div>
                    <main>
                        <section className='section-1'>
                            <div className='section-1-content'>
                                <video className='shoe-video' src={shoeAds} autoPlay loop></video>
                                <div className='ads-title'>Shop New Ranges Of Shoe!</div>
                            </div>
                        </section>
                        <section className='section-2'>
                            <div className='section-2-content'>
                                <div className='shoe-1'>
                                    <img className='shoe-1-pic' src={shoe1} alt="" />
                                    <div className='shoe-details'>
                                        <div className='shoe-name'>Air Jordan 4 Retro</div>
                                        <div className='shoe-price'>Price: Rs. 12999</div>
                                        <button className='cart-button'>Add to cart</button>
                                    </div>
                                </div>
                                <div className='shoe-2'>
                                    <img className='shoe-2-pic' src={shoe2} alt="" />
                                    <div className='shoe-details'>
                                        <div className='shoe-name'>Air Jordan Gold</div>
                                        <div className='shoe-price'>Price: Rs. 45999</div>
                                        <button className='cart-button'>Add to cart</button>
                                    </div>
                                </div>
                                <div className='shoe-3'>
                                    <img className='shoe-3-pic' src={shoe3} alt="" />
                                    <div className='shoe-details'>
                                        <div className='shoe-name'>Nike Akatsuki Sneakers</div>
                                        <div className='shoe-price'>Price: Rs. 9999</div>
                                        <button className='cart-button'>Add to cart</button>
                                    </div>
                                </div>
                                <div className='shoe-4'>
                                    <img className='shoe-4-pic' src={shoe4} alt="" />
                                    <div className='shoe-details'>
                                        <div className='shoe-name'>Blue Trackking Sneakers</div>
                                        <div className='shoe-price'>Price: Rs. 3599</div>
                                        <button className='cart-button'>Add to cart</button>
                                    </div>
                                </div>
                                <div className='shoe-5'>
                                    <img className='shoe-5-pic' src={shoe5} alt="" />
                                    <div className='shoe-details'>
                                        <div className='shoe-name'>Inferno Customized Shoes</div>
                                        <div className='shoe-price'>Price: Rs. 12499</div>
                                        <button className='cart-button'>Add to cart</button>
                                    </div>
                                </div>
                                <div className='shoe-6'>
                                    <img className='shoe-6-pic' src={shoe6} alt="" />
                                    <div className='shoe-details'>
                                        <div className='shoe-name'>Nike Red Air Jordan</div>
                                        <div className='shoe-price'>Price: Rs. 9999</div>
                                        <button className='cart-button'>Add to cart</button>
                                    </div>
                                </div>
                                <div className='shoe-7'>
                                    <img className='shoe-7-pic' src={shoe7} alt="" />
                                    <div className='shoe-details'>
                                        <div className='shoe-name'>Nike Carrimon Sneakers</div>
                                        <div className='shoe-price'>Price: Rs. 5999</div>
                                        <button className='cart-button'>Add to cart</button>
                                    </div>
                                </div>
                                <div className='shoe-8'>
                                    <img className='shoe-8-pic' src={shoe8} alt="" />
                                    <div className='shoe-details'>
                                        <div className='shoe-name'>Green Grass Sports Shoes</div>
                                        <div className='shoe-price'>Price: Rs. 7999</div>
                                        <button className='cart-button'>Add to cart</button>
                                    </div>
                                </div>
                                <div className='shoe-9'>
                                    <img className='shoe-9-pic' src={shoe9} alt="" />
                                    <div className='shoe-details'>
                                        <div className='shoe-name'>Zer0 3 PR</div>
                                        <div className='shoe-price'>Price: Rs. 11099</div>
                                        <button className='cart-button'>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
                <div>
                    <footer></footer>
                </div>
            </div>
        </>
    );
}

export default MainPage;