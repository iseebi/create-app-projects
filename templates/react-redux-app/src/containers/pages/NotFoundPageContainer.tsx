import { connect } from 'react-redux';
import React from 'react';
import NotFoundPage from '../../components/pages/NotFoundPage';

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

const NotFoundPageContainer: React.FC<Props> = () => <NotFoundPage />;

const mapStateToProps = (/* state: RootState */): StateProps => ({
  // add state props here
});

const mapDispatchToProps = (/* dispatch: Dispatch */): DispatchProps => ({
  dispatch: {
    // add dispatch props here
  },
});

const Connected = connect(mapStateToProps, mapDispatchToProps)(NotFoundPageContainer);

export default Connected;
