import { connect } from 'react-redux';
import React from 'react';
import AppBar from '../../components/widgets/AppBar';

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

const AppBarContainer: React.FC<Props> = () => <AppBar />;

const mapStateToProps = (/* state: RootState */): StateProps => ({
  // add state props here
});

const mapDispatchToProps = (/* dispatch: Dispatch */): DispatchProps => ({
  dispatch: {
    // add dispatch props here
  },
});

const Connected = connect(mapStateToProps, mapDispatchToProps)(AppBarContainer);

export default Connected;
