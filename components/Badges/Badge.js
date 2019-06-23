// import { h, Component } from 'preact';
import { Component } from 'react';
import css from './style.scss';

import Arrow, { DIRECTION, COLOR } from '../Arrow';

export default class Badge extends Component {
  render () {
    return (
      <li className={css.badge}>
        <div className={css.circle}>
          {this.props.icon}
        </div>
        <p className={css.title}>
          {this.props.title}
        </p>
        <p className={css.text}>
          {this.props.text}
        </p>
      </li>
    )
  }
}