import React from 'react';

import { useStyles } from './globalStyles';

const App = () => {
  const classes = useStyles();
  return <div className={classes.app}></div>;
};

export default App;
