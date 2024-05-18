import React from 'react';
import { Button } from '@mui/material';
import Page from '../widgets/Page';

type Props = {
  counter: number;
  lastAdded?: number;
  onAdd: (value: number) => void;
};

const IndexPage: React.FC<Props> = ({ counter, lastAdded, onAdd }) => (
  <Page>
    <h2>Index Page</h2>
    <div>
      <p>Count: {counter}</p>
      <p>Last Added: {lastAdded !== undefined ? lastAdded : '(no added)'}</p>
      <Button variant="contained" onClick={() => onAdd(1)}>
        +1
      </Button>
      <Button variant="contained" onClick={() => onAdd(2)}>
        +2
      </Button>
      <Button variant="contained" onClick={() => onAdd(3)}>
        +3
      </Button>
    </div>
  </Page>
);

export default IndexPage;
