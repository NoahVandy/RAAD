import react from 'react';
import logo from '../img/logo.png';
import logo2 from '../img/logo-2.jpg';
import facebook from '../img/SVG/facebook-with-circle.svg';
import insta from '../img/SVG/instagram-with-circle.svg';
import landingimg from '../img/landing-image.jpg';
import storyimg from '../img/story-image.jpg';
import '../css/style.css';
import Nominate from '.././Nominate';

export default function Home() {
    return (
        <>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet" />
                <link rel="stylesheet" href="../css/grid.css" />
                <link rel="stylesheet" href="../css/style.css" />
                <link rel="shortcut icon" type="image/png" href="img/favicon.png" />

                <title>RADD FOUNDATION</title>
            </head>

            <body>
                <div class="container">
                    <div class="nav">
                        <img src={logo} alt="radd logo" class="nav__logo" />

                        <div class="nav__btn-list">
                            <a href="#about" class="nav__btn">Who we are</a>
                            <a href="#story" class="nav__btn">Our Story</a>
                            <a href="#shop" class="nav__btn">Shop RADD Gear</a>
                            <a href="#nominate" class="nav__btn">Nominate</a>
                            <a href="#footer" class="nav__btn">Follow us</a>
                        </div>
                    </div>

                    <img src={landingimg} alt="radd group pic" class="landing__img" />

                    <section class="about" id="about">

                        <h3 class="heading-h3">Heres a little bit about RADD!</h3>

                        <div class="about__text">
                            <p class="about__text-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos doloribus
                            officiis
                            laudantium fugiat hic sapiente quibusdam in recusandae, optio totam? Ipsam odit totam incidunt
                            recusandae. Consectetur quidem impedit dignissimos illo! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Praesentium provident assumenda, iusto laboriosam dolorum nam maiores consectetur,
                          voluptatum cupiditate quae modi animi reiciendis et rem. Beatae inventore ducimus ad nisi!</p>

                            <p class="about__text-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus
                            accusantium
                            omnis, laudantium dolore ipsa aperiam quibusdam illum necessitatibus repellendus quia, nemo sed?
                          Temporibus porro quod, magni aut aspernatur qui?</p>
                        </div>
                    </section>

                    <img src={storyimg} alt="radd group pic-2" class="story__img" />

                    <section class="story" id="story">
                        <h3 class="heading-h3">Our story</h3>

                        <div class="story__text">
                            <p class="story__text-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos doloribus
                            officiis
                            laudantium fugiat hic sapiente quibusdam in recusandae, optio totam? Ipsam odit totam incidunt
                            recusandae. Consectetur quidem impedit dignissimos illo! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Praesentium provident assumenda, iusto laboriosam dolorum nam maiores consectetur,
                          voluptatum cupiditate quae modi animi reiciendis et rem. Beatae inventore ducimus ad nisi!</p>
                        </div>

                    </section>

                    <section class="shop" id="shop">

                    </section>

                    <section class="section-form nominate" id="nominate">
                        <Nominate />
                    </section>

                    <footer class="footer" id="footer">
                        <div class="footer__container">
                            <img src={logo2} alt="RADD logo 2" class="footer__logo" />
                            <p class="footer__text">&copy; Copyright 2021 RADD Foundation. This website was developed by Jordan
                          Nicols, Henry Harvey, and Noah Vandy</p>
                            <div class="footer__social">
                                <a href="https://www.instagram.com/raddfoundation/"><svg class="footer__social-instagram">
                                    <use href={insta}>
                                        <a href="https://www.instagram.com"></a></use>
                                </svg></a>
                                <a href="https://www.facebook.com/TheRaddFoundation"><svg class="footer__social-facebook">
                                    <use href={facebook}></use>
                                </svg></a>
                            </div>
                        </div>
                    </footer>
                </div>
                <script src="js/script.js"></script>
            </body>
        </>

    )
}