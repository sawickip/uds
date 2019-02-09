// import { h, Component } from 'preact';
import { Component } from 'react';
import css from '../style/header.scss';

export default class Header extends Component {
  render () {
    return (
      <header className={css.root}>
        <span className={css.mainLine} />
      </header>
    )
  }
}