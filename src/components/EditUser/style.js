import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  paper: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& button': {
      marginTop: '10px !important',
      backgroundColor: '#2873bf !important',
      '& svg': {
        transform: 'rotate(180deg)',
      },
      '&:hover': {
        backgroundColor: '#020381 !important',
      },
    },
  },
  avatar: {
    margin: 5,
    background: '#2873bf',
  },
  form: {
    width: '100%',
    marginTop: 10,
  },
  inputWrap: {
    '& div.Mui-focused': {
      border: '1px solid #f5efe0',
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    '& label': {
      background: 'white',
      '&.Mui-focused': {
        color: '#f5efe0',
      },
    },
  },
});

export default useStyles;