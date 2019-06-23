// import { h, Component } from 'preact';
import { Component } from 'react';
import css from './style.scss';

import SupermanSVG from '../../static/superhero2.svg';

export default class TopSuperman extends Component {
  render () {
    return (
      <h1 className={css.root}>
        <SupermanSVG className={css.superman} />
        <span className={css.name}>Rafał Andziak</span><br />
        <span className={css.bigText}>Ubezpieczenia</span><br />
        <span className={css.bottomText}>dla sportu</span>
      </h1>
    )
  }
}