import { connect } from 'react-redux';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPageContainer from './pages/IndexPageContainer';
import NotFoundPageContainer from './pages/NotFoundPageContainer';

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

const Router: React.FC<Props> = () => (
  <Routes>
    <Route path="/" element={<IndexPageContainer />} />
    <Route path="*" element={<NotFoundPageContainer />} />
  </Routes>
);

const mapStateToProps = (/* state: RootState */): StateProps => ({
  // add state props here
});

const mapDispatchToProps = (/* dispatch: Dispatch */): DispatchProps => ({
  dispatch: {
    // add dispatch props here
  },
});

const Connected = connect(mapStateToProps, mapDispatchToProps)(Router);

export default Connected;
