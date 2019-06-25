// import { h, Component } from 'preact';
import { Component } from 'react';
import cls from 'classnames';
import css from './style.scss';

export default class SingleCircle extends Component {
  render () {
    const { icon, empty } = this.props;
    return (
      <div className={cls(css.circle, css[this.props.size])} style={this.props.style}>
        {empty ? null : (
          <>
            <span className={css.circlet} />
            <span className={css.circlet} />
            <span className={css.circlet} />
            <span className={css.circlet} />
          </>
        )}
        {icon ? icon : null}
      </div>
    )
  }
}