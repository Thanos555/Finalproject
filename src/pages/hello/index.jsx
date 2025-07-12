import React from 'react'
import styles from './index.module.css'
import logo2 from '../../img/avocado.png'
import logo3 from '../../img/chickenbreast.png'
import logo4 from '../../img/salad.png'
import logo5 from '../../img/yogurt.png'
import logo6 from '../../img/makaron.jpeg'
import logo7 from '../../img/snacks.jpg'
import logo8 from '../../img/ratatuy.jpeg'
import logo9 from '../../img/chickenwithvegetables.jpeg'
import logo10 from '../../img/map.png'
import img1 from '../../img/tacorootlogo2.png'
import { Link } from 'react-router-dom'

const Hello = () => {
    return (
        <div>
            <div className={styles.headside}>
                <span className={styles.name}>
                    <Link to="/"><img src={img1} alt="" width={'75px'} height={'auto'}></img></Link>
                    <p id='#top' className={styles.taco}><b>𝓣𝓪𝓬𝓸𝓻𝓸𝓸𝓽 </b></p>
                </span>
                <nav className={styles.navside}>

                    <span><Link to="/recepies">Recepies</Link></span>
                    {/* <span><Link to={'/signup'}>Contact Us</Link></span> */}
                    <span><a href="#scroll" className={styles.scrollink}>Contact Us</a></span>
                    <span><Link to={'/ourteam'}>Our Team</Link></span>
                </nav>
                <div className={styles.btns}>
                    <p className={styles.loginbtn}>Already have an account? <Link to="/login"><span>Log In</span></Link></p>
                    <button className={styles.signupbtn}><Link to="/signup"><span>Sign Up</span></Link></button>
                </div>
            </div>
            <div className={styles.middlepart}>
                <p className={styles.phrase}>
                    <p className={styles.cook}><b>Cook, Share, Savor!</b></p>
                    <br />
                    <p>Kickstart Your Path to a Happier You!</p>
                    <br />
                    <br />
                    <button className={styles.startbtn}><Link to="/recepies"><span>Start Now</span></Link></button>
                </p>
            </div>
            <div className={styles.cardstyle}>
                <div className={styles.imgcontainer}>
                    <div className={styles.card1}>
                        <img src={logo2} alt="" />
                        <p>Avocado toast with egg</p>
                    </div>
                    <div className={styles.card1}>
                        <img src={logo3} alt="" />
                        <p>Chicken breast & kale</p></div>
                    <div className={styles.card1}>
                        <img src={logo4} alt="" />
                        <p>Fig & chickpeas salad</p>
                    </div>
                    <div className={styles.card1}>
                        <img src={logo5} alt="" />
                        <p>Yogurt with mixed fruits</p>
                    </div>
                </div>
                <span className={styles.cardwrites}>
                    <p className={styles.write1}><b>Get Daily Inspiration with Balanced Recipes:Quick and Easy Delights</b></p>
                    <p className={styles.write2}>Our quick and easy recipes are always on the table in no time! All recipes are approved </p>
                    <p className={styles.write3}>by our expert chef team, providing you with a healthy and balanced culinary experience.</p>
                </span>
            </div>
            <div className={styles.cardstyle2}>
                <div className={styles.imgcontainer2}>
                    <div className={styles.card1}>
                        <img src={logo6} alt="" />
                        <p>Pasta with tomato</p>
                    </div>
                    <div className={styles.card1}>
                        <img className={styles.snacks} src={logo7} alt="" />
                        <p>Healthy snacks</p></div>
                    <div className={styles.card1}>
                        <img src={logo8} alt="" />
                        <p>Ratatuelle</p>
                    </div>
                    <div className={styles.card1}>
                        <img src={logo9} alt="" />
                        <p>Baked chicken with vegetables</p>
                    </div>
                </div>
                <span className={styles.cardwrites2}>
                    <p className={styles.write1}><b>Explore Culinary Delights Tailored to Your Tastes</b></p>
                    <p className={styles.write2}>Discover the perfect recipes for your lifestyle and savor long-lasting satisfaction.</p>
                </span>
            </div>
            <div className={styles.mapside}>
                <h2>Discover World Cuisines with Us</h2>
                <br />
                <br />
                <p>
                    Explore global flavors with us. Ready to start your culinary adventure?
                </p>
                <br />
                <br />
                <img src={logo10}
                    alt=""
                    width='934px'
                    height='466px' />
                <br />
                <br />
                <br />
                <button className={styles.mapstartbtn}><Link to="/regions"><span>Start Now</span></Link></button>
            </div>
            <footer className={styles.hellofinal}>
                <div>
                    <h2><a className={styles.footerlogo} href="#top">𝓣𝓪𝓬𝓸𝓻𝓸𝓸𝓽</a></h2>
                    <br />
                    <p className={styles.yearofcreation}>© 2025 tacoroot.az</p>
                </div>
                <div id='scroll' className={styles.contact}>
                    <br />
                    <br />
                    <h3>Contact us :</h3>
                    <br />
                    <p>Email : tacoroot@gmail.com</p>
                    <br />
                    <p>Number : +994-99-999-99-99</p>
                </div>
                <div>
                    <p><b>Want to see some recepies?</b></p>
                    <br />
                    <button className={styles.receipesbtn}><Link to="/recepies"><span>Click Me</span></Link></button>
                </div>
            </footer>
        </div >
    )
}

export default Hello
