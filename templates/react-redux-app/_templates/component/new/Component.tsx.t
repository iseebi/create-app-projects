---
to: src/components/<%= dir %>/<%= componentName %>.tsx
---
import React from 'react';

type Props = {
  /* N/A */
};

const <%= componentName %>: React.FC<Props> = () => (
  <div><%= componentName %></div>
);

// componentName: <%= componentName %>
// dir: <%= dir %>

export default <%= componentName %>;
