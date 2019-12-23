import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: 300,
    position: 'relative',
    bottom: 0,
    minWidth: '100%',
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
