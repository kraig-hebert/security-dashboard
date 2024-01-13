import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      height: '100%',
      width: '100%',
    },
    body: {
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
    },
    button: {
      border: 'none',
    },
  },
  app: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
    height: '100%',
    backgroundColor: 'blue',
  },
}));
