import * as React from 'react';
import { connect } from 'react-redux';
import AppList from '../AppList';
import { Footer } from '../Footer';
import * as style from './style.css';

export interface MasterProps {
  /* empty */
}

export interface MasterState {
  /* empty */
}


export class Master extends React.PureComponent<MasterProps, MasterState> {

  constructor(props?: MasterProps, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <section className={style.main} >
        <AppList />
      </section>
    );
  }
}
