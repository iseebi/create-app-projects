import { connect } from 'react-redux';
import React from 'react';
import Root from '../components/Root';
import AppBarContainer from './widgets/AppBarContainer';
import AppDrawerContainer from './widgets/AppDrawerContainer';
import RouterFrameContainer from './RouterFrameContainer';
import Router from './Router';

type ExportProps = {
  /* N/A */
};

type StateProps = {
  /* N/A */
};

type DispatchProps = {
  dispatch: {
    /* N/A */
  };
};

type Props = ExportProps & StateProps & DispatchProps;

const RootContainer: React.FC<Props> = () => (
  <Root>
    <AppBarContainer />
    <AppDrawerContainer />
    <RouterFrameContainer>
      <Router />
    </RouterFrameContainer>
  </Root>
);

const mapStateToProps = (/* state: RootState */): StateProps => ({
  // add state props here
});

const mapDispatchToProps = (/* dispatch: Dispatch */): DispatchProps => ({
  dispatch: {
    // add dispatch props here
  },
});

const Connected = connect(mapStateToProps, mapDispatchToProps)(RootContainer);

export default Connected;
