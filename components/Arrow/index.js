// import { h, Component } from 'preact';
import { Component } from 'react';
import cls from 'classnames';

import global from '../../style/global.scss';
import css from './style.scss';

import ArrowSVG from '../../static/arrow.svg';

export const DIRECTION = Object.freeze({
  down: css.down,
  up: css.up,
  left: css.left
});

export const COLOR = Object.freeze({
  white: global.fwhite,
  black: global.fblack
})

export default function Arrow (props) {
  return <ArrowSVG className={cls(css.arrow, props.direction, props.color)} />;
}