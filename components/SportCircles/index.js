
import { Component } from 'react';
import SingleCircle from './SingleCircle';

import css from './style.scss';

import RunningSVG from '../../static/bieganie.svg';
import HorseSVG from '../../static/jazda_konna.svg';
import ExtremeSVG from '../../static/jazda_wyczynowa.svg';
import BasketballSVG from '../../static/koszykowka.svg';
import FootballSVG from '../../static/pilka_nozna.svg';
import SwimmingSVG from '../../static/plywanie.svg';
import CyclingSVG from '../../static/rowerowanie.svg';
import VolleyballSVG from '../../static/siatkowka.svg';
import BodybuildingSVG from '../../static/silownia.svg';
import WaterSportsSVG from '../../static/sporty wodne.svg';

export const SIZES = Object.freeze({
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  big: 'big',
  huge: 'huge'
});

const CONFIG = [
  {
    size: SIZES.small,
    empty: true,
    style: {
      backgroundColor: '#B0E1E2'
    }
  },
  {
    size: SIZES.tiny,
    empty: true,
    style: {
      backgroundColor: '#FFF0E8'
    }
  },
  {
    icon: <FootballSVG />,
    size: SIZES.medium,
    style: {
      backgroundColor: '#B4E5CE'
    }
  },
  {
    icon: <BasketballSVG />,
    size: SIZES.huge,
    style: {
      backgroundColor: '#A6DBF3'
    }
  },
  {
    icon: <CyclingSVG />,
    size: SIZES.medium,
    style: {
      backgroundColor: '#6A8EAE'
    }
  },
  {
    icon: <BodybuildingSVG />,
    size: SIZES.small,
    style: {
      backgroundColor: '#f3abb7'
    }
  },
  {
    icon: <WaterSportsSVG />,
    size: SIZES.big,
    style: {
      backgroundColor: '#95D9DA'
    }
  },
  {
    size: SIZES.tiny,
    empty: true,
    style: {
      backgroundColor: '#FFF0E8'
    }
  },
  {
    icon: <RunningSVG />,
    size: SIZES.big,
    style: {
      backgroundColor: '#FFE5A6'
    }
  },
  {
    icon: <HorseSVG />,
    size: SIZES.small,
    style: {
      backgroundColor: '#FAC7A6'
    }
  },
  {
    icon: <ExtremeSVG />,
    size: SIZES.medium,
    style: {
      backgroundColor: '#F3B7B0'
    }
  },
  {
    icon: <VolleyballSVG />,
    size: SIZES.big,
    style: {
      backgroundColor: '#F8D8BD'
    }
  },
  {
    icon: <SwimmingSVG />,
    size: SIZES.medium,
    style: {
      backgroundColor: '#79ADDC'
    }
  }
];

export default class SportCircles extends Component {
  render () {
    return (
      <div className={css.root}>
        {
          CONFIG.map((item, key) => <SingleCircle key={key} {...item} />)
        }
      </div>
    )
  }
}