import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';
import { Footer, Header, Master } from '../../components';
import { State } from '../../reducers';
import * as style from './style.css';

export interface AppProps extends RouteComponentProps<void> {
  /* empty */
}

export interface AppState {
  /* empty */
}

export class App extends React.Component<AppProps, AppState> {

  render() {
    const { children } = this.props;
    return (
      <div className={style.normal}>
        <Header />
        <Master />
        {children}
        <Footer />
      </div>
    );
  }
}

