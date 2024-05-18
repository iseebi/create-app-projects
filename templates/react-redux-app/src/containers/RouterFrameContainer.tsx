import { connect } from 'react-redux';
import React from 'react';
import RouterFrame from '../components/RouterFrame';

type ExportProps = {
  children?: React.ReactNode;
};

type StateProps = {
  /* N/A */
};

type DispatchProps = {
  /*
  dispatch: {

  };
   */
};

type Props = ExportProps & StateProps & DispatchProps;

const RouterFrameContainer: React.FC<Props> = ({ children }) => <RouterFrame>{children}</RouterFrame>;

const mapStateToProps = (/* state: RootState */): StateProps => ({
  // add state props here
});

const mapDispatchToProps = (/* dispatch: Dispatch */): DispatchProps => ({
  /*
  dispatch: {
    // add dispatch props here
  },
   */
});

const Connected = connect(mapStateToProps, mapDispatchToProps)(RouterFrameContainer);

export default Connected;
