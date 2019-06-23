
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
  small: 'small',
  medium: 'medium',
  big: 'big'
});

const CONFIG = [
  {
    icon: <BodybuildingSVG />,
    size: SIZES.small
  },
  {
    icon: <HorseSVG />,
    size: SIZES.small
  }
]

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