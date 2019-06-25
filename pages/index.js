import React, { Component } from 'react';
// import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';
import cls from 'classnames';
import Sidebar from "react-sidebar";

import css from '../style/style.scss';

import Arrow, { DIRECTION, COLOR } from '../components/Arrow'
import Head from '../components/Head';
import TopSuperman from '../components/TopSuperman';
import Badges from '../components/Badges';
import SportCircles from '../components/SportCircles';
import BackgroundSwitcher from '../components/BackgroundSwitcher';

import SuperheroSVG from '../static/superhero.svg';
// const bg1 = '../static/pexels-photo-416676.jpg';

export default class Index extends Component {
  constructor (props) {
    super (props);

    this.state = {
      isSidebarOpened: false
    };
  }

  handleSidebarClose = () => {
    this.setState({
      isSidebarOpened: false
    });

    // document.body.style.overflow = 'visible';
  }

  handleSidebarOpen = () => {
    this.setState({
      isSidebarOpened: true
    });

    // document.body.style.overflow = 'hidden';
  }

  render () {
    return (
      <React.Fragment>
        <Head />
        <section className={css.heroContainer}>
          <header className={css.root}>
            <div className={css.rootContent}>
  
              <span className={cls(css.mainLine, css.sideLine)} />
              <TopSuperman />
              <span className={css.mainLine} />
  
              <button className={cls(css.rectangle, css.rectangleSmall, css.whiteBg)} onClick={this.handleSidebarOpen}>
                <span className={css.rectangleText}>
                  Informacje o nas
                </span>
                <span className={cls(css.rectangleCircle, css.rectangleCircleSmall, css.yellowBg)}>
                  <Arrow direction={DIRECTION.down} color={COLOR.black} />
                </span>
              </button>
  
              <span className={cls(css.mainLine, css.sideLine)} />
            </div>
  
            <h2 className={css.heroHeader}>
              Nasze ubezpieczenia są jak superbohaterowie:
            </h2>
  
            <Badges />
  
          
            <div>
              <p className={css.freeConsultationText}>
                Skorzystaj z <strong>darmowej</strong> konsultacji
              </p>
  
              <button className={cls(css.rectangle, css.rectangleBig, css.yellowBg)}>
                <span className={css.rectangleText}>
                  Wyślij swoje zgłoszenie
                </span>
                <span className={cls(css.rectangleCircle, css.rectangleCircleBig, css.backBg)}>
                  <Arrow direction={DIRECTION.up} color={COLOR.white} />
                </span>
              </button>
            </div>
          </header>
  
          {/* 
          <Parallax
            className="custom-class"
            offsetYMax={'50%'}
            offsetYMin={'-50%'}
            tag="figure"
            slowerScrollRate
          >
           */}
            <BackgroundSwitcher className={css.heroImage} />
            {/* <div
              className={css.heroImage}
              style={{ backgroundImage: `url(${bg1})` }}
            >
             
            </div>
            */}
          {/* </Parallax> */}
        </section>
  
        <section>
          <div className={css.threeHeroes}>
            <SuperheroSVG className={css.hero} />
            <SuperheroSVG className={css.bigHero} />
            <SuperheroSVG className={css.hero} />
          </div>
  
          <h2 className={css.mainText}><strong>Nasze wsparcie.</strong> Twój spokój i bezpieczeństwo.</h2>
          <h3 className={css.subText}>Jesteśmy otwarci na wspieranie wielu dyscyplin by zapewnić bezpieczeństwo sportowcom.</h3>
  
          <button className={cls(css.rectangle, css.rectangleBig, css.whiteBg, css.rectangleBorder)}>
            <span className={css.rectangleText}>
              Wyślij swoje zgłoszenie
            </span>
            <span className={cls(css.rectangleCircle, css.rectangleCircleBig, css.yellowBg)}>
              <Arrow color={COLOR.black} />
            </span>
          </button>
  
          <div className={css.bigYellowSmth}>
            <span className={css.bigQuestionMark}>?</span>
            <span>
              Uprawiasz nietypową dyscyplinę sportu i chcesz czuć się bezpiecznie? <button className={css.openFormBtn}>Skontaktuj się z nami</button>, porozmawiamy o najlepszym rozwiązaniu dla Ciebie.
            </span>
          </div>
  
          <SportCircles />
        </section>

        {/* 
        <Sidebar
          sidebar={<span>tetetetetetet</span>}
          open={this.state.isSidebarOpened}
          pullRight={true}
          // contentClassName={css.xxx}
          styles={{
            root: {
              // position: 'fixed',
              // bottom: 'auto',
              // height: '100vh',
              // zIndex: 1
            },
            sidebar: {
              background: "white",
              position: 'fixed'
            }
          }}
          onSetOpen={this.handleSidebarClose}
        />
         */}
      </React.Fragment>
    )
  }
}