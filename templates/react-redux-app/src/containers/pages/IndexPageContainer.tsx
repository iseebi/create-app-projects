import { connect } from 'react-redux';
import React from 'react';
import IndexPage from '../../components/pages/IndexPage';
import { RootState } from '../../modules';
import { addCounterAction, selectCounterValue, selectLastAddedValue } from '../../modules/sample';
import { AppDispatch } from '../../configureStore';

type ExportProps = {
  /* N/A */
};

type StateProps = {
  counter: number;
  lastAdded: number | undefined;
};

type DispatchProps = {
  dispatch: {
    addCounter: (value: number) => void;
  };
};

type Props = ExportProps & StateProps & DispatchProps;

const IndexPageContainer: React.FC<Props> = ({ counter, lastAdded, dispatch }) => (
  <IndexPage counter={counter} lastAdded={lastAdded} onAdd={dispatch.addCounter} />
);

const mapStateToProps = (state: RootState): StateProps => ({
  counter: selectCounterValue(state),
  lastAdded: selectLastAddedValue(state),
});

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  dispatch: {
    addCounter: (value) => dispatch(addCounterAction({ value })),
  },
});

const Connected = connect(mapStateToProps, mapDispatchToProps)(IndexPageContainer);

export default Connected;
