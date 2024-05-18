---
to: src/containers/<%= dir %>/<%= componentName %>Container.tsx
---
import { connect } from 'react-redux';
import React from 'react';
import <%= componentName %> from '<%= backwardDir %>components/<%= dir %><%= componentName %>';

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

const <%= componentName %>Container: React.FC<Props> = () => <<%= componentName %> />;

const mapStateToProps = (/* state: RootState */): StateProps => ({
  // add state props here
});

const mapDispatchToProps = (/* dispatch: Dispatch */): DispatchProps => ({
  dispatch: {
    // add dispatch props here
  },
});

const Connected = connect(mapStateToProps, mapDispatchToProps)(<%= componentName %>Container);

export default Connected;
