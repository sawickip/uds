// import { h, Component } from 'preact';
import { Component } from 'react';
import cls from 'classnames';
import css from './style.scss';

export default class SingleCircle extends Component {
  render () {
    console.log(this.props)
    return (
      <div className={cls(css.circle, css[this.props.size])}>
        <span className={css.circlet} />
        <span className={css.circlet} />
        <span className={css.circlet} />
        <span className={css.circlet} />
        {this.props.icon}   
      </div>
    )
  }
}