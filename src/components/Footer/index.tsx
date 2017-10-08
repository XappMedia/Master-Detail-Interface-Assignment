import * as classNames from 'classnames';
import * as React from 'react';
import * as style from './style.css';

export interface FooterProps {
  /* empty */
}

export interface FooterState {
  /* empty */
}

export class Footer extends React.PureComponent<FooterProps, FooterState> {

  render() {
    return (
      <footer className={style.normal} />
    );
  }
}
