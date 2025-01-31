import { useEffect } from 'react';
import './App.scss'
import logo from './assets/logo.svg'
import action from './assets/ilustracao-page2/action.svg';
import animation from './assets/ilustracao-page2/animation.svg';
import fighter from './assets/ilustracao-page2/fighter.svg';
import gaming from './assets/ilustracao-page2/gaming.svg';
import racing from './assets/ilustracao-page2/racing.svg';
import story from './assets/ilustracao-page2/story.svg';
import storyPopular from './assets/ilustracao-page2/storyPopular.svg';
import link from './assets/ilustracao-page2/anuncio.svg';
import carro from './assets/ilustracao-page2/carro.svg';
import gamingImage from './assets/ilustracao-page2/Container-1.svg';
import fighterImage from './assets/ilustracao-page2/Container-2.svg';
import fortinite from './assets/ilustracao-page2/Container.svg';
import freeGamingAnuncio from './assets/ilustracao-page2/freeGamingAnuncio.svg';
import racingRecent from './assets/ilustracao-page2/racingRecent.svg';
import storyRecent from './assets/ilustracao-page2/storyRecent.svg';
import animationRecent from './assets/ilustracao-page2/animationRecent.svg';
import fighterRecent from './assets/ilustracao-page2/fighterRecent.svg';
import racingRecent2 from './assets/ilustracao-page2/racingRecent2.svg';
import videoFighter from './assets/ilustracao-page3/videoFighter.svg';
import videoAnimation from './assets/ilustracao-page3/videoAnimation.svg';
import videoAction from './assets/ilustracao-page3/videoAction.svg';
import videoRacing from './assets/ilustracao-page3/videoRacing.svg';
import ScrollReveal from 'scrollreveal';

function App() {

  useEffect(() => {
    ScrollReveal().reveal('.hero-container, .categorias, .content-games1, .content-games2, .trending', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
      easing: 'ease-in-out'
    });

    ScrollReveal().reveal('header, .navegation', {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
      easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.card, .card-gameRecents', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
      easing: 'ease-in-out'
    });
  }, []);

  const Header = () => {
    return (
      <header>
        <img src={logo} alt="Logo" />

        <div className='search-links'>
          <div className='search'>
            <input type='text' placeholder='Search here...'></input>
            <i class="bi bi-search"></i>
          </div>

          <div className='links'>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-linkedin"></i>
          </div>
        </div>
      </header>
    );
  }

  const Navegation = () => {
    return (
      <div className='navegation'>
        <nav>
          <ul>
            <label>
              <li><a href='#'>Home</a></li>
              <i class="bi bi-caret-down-fill"></i>
            </label>

            <label>
              <li><a href='#'>About Us</a></li>
              <i class="bi bi-caret-down-fill"></i>
            </label>

            <label>
              <li><a href='#'>Features</a></li>
              <i class="bi bi-caret-down-fill"></i>
            </label>

            <label>
              <li><a href='#'>Categories</a></li>
              <i class="bi bi-caret-down-fill"></i>
            </label>

            <label>
              <li><a href='#'>Contact</a></li>
              <i class="bi bi-caret-down-fill"></i>
            </label>
          </ul>
        </nav>

        <div className='account-carrinho'>
          <i class="bi bi-heart"></i>
          <i class="bi bi-basket2-fill"></i>
          <div className='account'>
            <i class="bi bi-person-circle"></i>
            <p>Sign In</p>
          </div>
        </div>
      </div>
    );
  }

  const HeroSection = () => {
    return (
      <section className="hero-container">
        <div className="hero-item left">
          <div className="overlay"></div>
          <div className="hero-content">
            <span className="tag fighter">Fighter</span>
            <h2>Mobile Apple Planning Big Mac Redesign</h2>
            <p>BY ADMIN • 27 AUGUST, 2024 • 20 MINS</p>
          </div>
        </div>
        <div className="hero-item right">
          <div className="overlay"></div>
          <div className="hero-content">
            <span className="tag action">Action</span>
            <h2>How To Build A Magazine Layout With CSS Grid Areas</h2>
            <p>BY ADMIN • 27 AUGUST, 2024 • 20 MINS</p>
          </div>
        </div>
      </section>
    );
  };

  const Categories = () => {
    return (
      <section className='page2'>
        <div className='categorias'>
          <div className='title-categories'>
            <h3>Exciting Categories</h3>
          </div>

          <div className='section-images'>
            <img src={action}></img>
            <img src={gaming}></img>
            <img src={racing}></img>
            <img src={animation}></img>
            <img src={fighter}></img>
            <img src={story}></img>
          </div>
        </div>

        <div className='anuncio'>
          <img src={link}></img>
        </div>

        <div className='content-games1'>
          <div className='todaySpotlinght'>
            <div className='title-spotlinght'>
              <h3>Today’s Spotlight</h3>
            </div>
            <div className='secao-spotlight'>
              <div className='div1'>
                <img src={carro}></img>
                <div className='text-racing'>
                  <div className='title-racing'>
                    <h4>RACING</h4>
                  </div>
                  <p>How To Build A Magazine Layout<br />
                    With CSS Grid Areas
                  </p>
                  <div className='stastitics-racing'>
                    <label>
                      <i class="bi bi-person-circle"></i>
                      <p className='texts-stastistics-racing'>BY ADMIN</p>
                    </label>
                    <label>
                      <i class="bi bi-calendar"></i>
                      <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                    </label>
                    <label>
                      <i class="bi bi-stopwatch"></i>
                      <p className='texts-stastistics-racing'>20 MINS</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className='div2'>
                <div className='card'>
                  <div className='texts'>
                    <div className='gamings'>
                      <div className='title-racing'>
                        <h4>ACTION</h4>
                      </div>
                      <h3>Fortnite Ratings are<br />
                        Skyrocketing
                      </h3>
                      <label>
                        <i class="bi bi-calendar"></i>
                        <p>27 AUGUST, 2024</p>
                      </label>
                    </div>
                    <img src={fortinite}></img>
                  </div>
                </div>
                <div className='card'>
                  <div className='texts'>
                    <div className='gamings'>
                      <div className='title-racing'>
                        <h4>FIGHTER</h4>
                      </div>
                      <h3>Everything You Need<br />
                        To Know About
                      </h3>
                      <label>
                        <i class="bi bi-calendar"></i>
                        <p>27 AUGUST, 2024</p>
                      </label>
                    </div>
                    <img src={gamingImage}></img>
                  </div>
                </div>
                <div className='card'>
                  <div className='texts'>
                    <div className='gamings'>
                      <div className='title-racing'>
                        <h4>GAMING</h4>
                      </div>
                      <h3>We Can’t Wait to Try<br />
                        This Gaming Area
                      </h3>
                      <label>
                        <i class="bi bi-calendar"></i>
                        <p>27 AUGUST, 2024</p>
                      </label>
                    </div>
                    <img src={fighterImage}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='content-games2'>
          <div className='ourPopular'>
            <div className='title-popular-news'>
              <h3>Our Popular News</h3>
            </div>
            <div className='content-popular1'>
              <div className='racing-car'>
                <div className='texts'>
                  <div className='title-racing'>
                    <h3>RACING</h3>
                  </div>
                  <p>Racing Games Browned Butte roadert
                    Cookies Daily Breakfast</p>
                  <div className='stastitics'>
                    <label>
                      <i class="bi bi-calendar"></i>
                      <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                    </label>
                    <label>
                      <i class="bi bi-stopwatch"></i>
                      <p className='texts-stastistics-racing'>20 MINS</p>
                    </label>
                  </div>
                </div>
              </div>

              <div className='action-game'>
                <div className='texts'>
                  <div className='title-racing'>
                    <h3>ACTION</h3>
                  </div>
                  <p>How To Host A WordPress Site On
                    Amazon Lightsail</p>
                  <div className='stastitics'>
                    <label>
                      <i class="bi bi-calendar"></i>
                      <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                    </label>
                    <label>
                      <i class="bi bi-stopwatch"></i>
                      <p className='texts-stastistics-racing'>20 MINS</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='content-popular2'>
              <div className='cards-action'>
                <div className='texts'>
                  <div className='title-populares'>
                    <h3>FIGHTER</h3>
                  </div>
                  <p>The Magic Of February<br />
                    2024 Wallpapers</p>
                  <label>
                    <i class="bi bi-calendar"></i>
                    <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                  </label>
                </div>
              </div>

              <div className='cards-animation'>
                <div className='texts'>
                  <div className='title-populares'>
                    <h3>ANIMATION</h3>
                  </div>
                  <p>Customization And<br />
                    Animation</p>
                  <label>
                    <i class="bi bi-calendar"></i>
                    <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                  </label>
                </div>
              </div>

              <div className='cards-story'>
                <div className='texts'>
                  <div className='title-populares'>
                    <h3>STORY</h3>
                  </div>
                  <p>Better ROI For Your<br />
                    Digital Products</p>
                  <label>
                    <i class="bi bi-calendar"></i>
                    <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className='recentPosts'>
            <div className='title-recentsPosts'>
              <h3>Recent Posts</h3>
            </div>

            <div className='card-gameRecents'>
              <img src={racingRecent}></img>
              <div className='texts-gamesRecents'>
                <div className='title-recents'>
                  <h4>FIGHTER</h4>
                </div>
                <p>The Butter Chocolate<br />
                  Cookies Daily</p>
                <label>
                  <i class="bi bi-calendar"></i>
                  <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                </label>
              </div>
            </div>
            <div className='card-gameRecents'>
              <img src={storyRecent}></img>
              <div className='texts-gamesRecents'>
                <div className='title-recents'>
                  <h4>STORY</h4>
                </div>
                <p>Copying Designs<br />
                  Doesn’t Work</p>
                <label>
                  <i class="bi bi-calendar"></i>
                  <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                </label>
              </div>
            </div>
            <div className='card-gameRecents'>
              <img src={animationRecent}></img>
              <div className='texts-gamesRecents'>
                <div className='title-recents'>
                  <h4>ANIMATION</h4>
                </div>
                <p>ollaboration Problems<br />
                  Go Away By Sharing</p>
                <label>
                  <i class="bi bi-calendar"></i>
                  <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                </label>
              </div>
            </div>
            <div className='card-gameRecents'>
              <img src={fighterRecent}></img>
              <div className='texts-gamesRecents'>
                <div className='title-recents'>
                  <h4>FIGHTER</h4>
                </div>
                <p>Level Up Your CSS<br />
                  Skills With The</p>
                <label>
                  <i class="bi bi-calendar"></i>
                  <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                </label>
              </div>
            </div>
            <div className='card-gameRecents'>
              <img src={racingRecent2}></img>
              <div className='texts-gamesRecents'>
                <div className='title-recents'>
                  <h4>RACING</h4>
                </div>
                <p>The Key To Good<br />
                  Component Design</p>
                <label>
                  <i class="bi bi-calendar"></i>
                  <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='freeGamingAnuncio'>
          <img src={freeGamingAnuncio}></img>
        </div>
      </section >
    );
  }

  const Trending = () => {
    return (
      <section className='page3'>
        <div className='title-gamingNews'>
          <h3>Trending Gaming News</h3>
        </div>
        <div className='container-fighter'>
          <div className='card-fighter'>
            <img src={videoFighter}></img>
            <div className='text-racing'>
              <div className='title-racing'>
                <h4>FIGHTER</h4>
              </div>
              <p>Exciting New Browned Chocolate Gaming<br />
                Cookies Daily Breakfast
              </p>
              <div className='stastitics-racing'>
                <label>
                  <i class="bi bi-person-circle"></i>
                  <p className='texts-stastistics-racing'>BY ADMIN</p>
                </label>
                <label>
                  <i class="bi bi-calendar"></i>
                  <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                </label>
                <label>
                  <i class="bi bi-stopwatch"></i>
                  <p className='texts-stastistics-racing'>20 MINS</p>
                </label>
              </div>
            </div>
          </div>

          <div className='posts-view'>
            <div className='card-gameRecents'>
              <img src={videoAnimation}></img>
              <div className='texts-gamesRecents'>
                <div className='title-recents'>
                  <h4>ANIMATION</h4>
                </div>
                <p>A Guide To Getting Data<br />
                  Visualization Right</p>
                <label>
                  <i class="bi bi-calendar"></i>
                  <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                </label>
              </div>
            </div>
            <div className='card-gameRecents'>
              <img src={videoAction}></img>
              <div className='texts-gamesRecents'>
                <div className='title-recents'>
                  <h4>ACTION</h4>
                </div>
                <p>Fluid Typography: Predicting A<br />
                  Problem With Your User’s Zoom-In</p>
                <label>
                  <i class="bi bi-calendar"></i>
                  <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                </label>
              </div>
            </div>
            <div className='card-gameRecents'>
              <img src={videoRacing}></img>
              <div className='texts-gamesRecents'>
                <div className='title-recents'>
                  <h4>RACING</h4>
                </div>
                <p>Deploying CSS Logical Properties<br />
                  On Web Apps</p>
                <label>
                  <i class="bi bi-calendar"></i>
                  <p className='texts-stastistics-racing'>27 AUGUST, 2024</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__brand">
            <img src={logo} className='logo'></img>
            <p className="footer__description">
              Browned Butter And Brown Sugar Caramelly Goodness, Crispy Edges
              Thick And Soft Centers And Melty Little Puddles Of Chocolate.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>The Test Kitchen</li>
                <li>Podcast</li>
                <li>Events</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div className="footer__column">
              <h3>Get Help</h3>
              <ul>
                <li>Contact & FAQ</li>
                <li>Orders & Returns</li>
                <li>Gift Cards</li>
                <li>Register</li>
                <li>Catalog</li>
              </ul>
            </div>
            <div className="footer__column">
              <h3>Explore</h3>
              <ul>
                <li>The Shop</li>
                <li>Recipes</li>
                <li>Food</li>
                <li>Travel</li>
                <li>Hotline</li>
              </ul>
            </div>
            <div className="footer__column">
              <h3>Follow Us On</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
                <li>Pinterest</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Privacy Policy & Terms • Site Credits</p>
          <p>© 2023 All Rights Reserved</p>
        </div>
      </footer>
    );
  };

  return (
    <>
      <div className='container'>
        <Header />
        <Navegation />
        <HeroSection />
        <Categories />
        <Trending />
        <Footer />
      </div >
    </>
  )
}

export default App
