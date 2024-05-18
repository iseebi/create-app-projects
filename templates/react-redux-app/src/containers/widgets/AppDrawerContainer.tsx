import { connect } from 'react-redux';
import React from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import AppDrawer from '../../components/widgets/AppDrawer';

type ExportProps = {
  /* N/A */
};

type StateProps = {
  /* N/A */
};

type DispatchProps = {
  dispatch: {
    onNavigate: (path: string) => void;
    /* N/A */
  };
};

type Props = ExportProps & StateProps & DispatchProps;

const AppDrawerContainer: React.FC<Props> = ({ dispatch }) => (
  <AppDrawer onOpen={(path) => dispatch.onNavigate(path)} />
);

const mapStateToProps = (/* state: RootState */): StateProps => ({
  // add state props here
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  dispatch: {
    onNavigate: (path) => dispatch(push(path)),
  },
});

const Connected = connect(mapStateToProps, mapDispatchToProps)(AppDrawerContainer);

export default Connected;
