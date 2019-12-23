import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(5),
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  products: {
    display: 'flex',
    flex: 1,
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 50,
  },
  paper: {
    marginBottom: theme.spacing(2),
    margin: theme.spacing(5),
    textAlign: 'center',
  },
  card: {
    maxWidth: 300,
    marginRight: theme.spacing(0),
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 200,
  },
}));
