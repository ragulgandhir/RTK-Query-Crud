import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  active: {
    backgroundColor: '#020381 !important',
  },
  listItem: {
    alignItems: 'center',
    '& .MuiIconButton-root': {
      margin: 2,
      '& path': {
        color: '#2873bf',
      },
    },
  },
  avatarWrap: {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid darkcyan',
    borderRadius: '50%',
    background: 'lightyellow',
  },
  btnWrapper: {
    '& button': {
      backgroundColor: '#2873bf',
      '&:hover': {
        backgroundColor: '#020381',
      },
      '&.MuiButtonGroup-grouped:not(:last-of-type)': {
        borderColor: 'white',
      },
    },
  },
});

export default useStyles;