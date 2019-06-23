// import { h, Component } from 'preact';
import { Component } from 'react';
import css from './style.scss';

import FastSVG from '../../static/fast.svg';
import SafetySVG from '../../static/noun_Safety_1930823.svg';
import StarSVG from '../../static/star.svg';

import Badge from './Badge';

const badges = [
  {
    title: 'Szybkie',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus ligula eros, egestas congue lorem sodales nec. Vivamus placerat eu orci ac fringilla.',
    icon: <FastSVG className={css.iconFast} />
  },
  {
    title: 'Solidne',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus ligula eros, egestas congue lorem sodales nec. Vivamus placerat eu orci ac fringilla.',
    icon: <SafetySVG className={css.iconSafety} />
  },
  {
    title: 'Uczciwe',
    text: 'Llorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus ligula eros, egestas congue lorem sodales nec. Vivamus placerat eu orci ac fringilla.',
    icon: <StarSVG className={css.iconStar} />
  },
];

export default function Badges () {
  return (
    <div className={css.root}>
      <ul className={css.list}>
        {badges.map(item => <Badge {...item} />)}
      </ul>
    </div>
  )
}