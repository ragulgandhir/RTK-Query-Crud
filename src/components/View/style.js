
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    margin: '50px auto',
    boxShadow:
      '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07),0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07) !important',
    width: '400px',
    height: 'auto',
    borderRadius: '50px !important',
    overflow: 'hidden',
    '& .flag': {
      width: 20,
      height: 20,
      borderRadius: '50%',
      objectFit: 'cover',
      border: '1px solid #000000',
    },
    '& div#user': {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '& span': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 150,
        height: 150,
        borderRadius: '50%',
        position: 'relative',
        top: '70px',
        border: 'solid 7px #2873bf',
        backgroundColor: 'lightyellow',
        color: 'darkcyan',
        fontSize: '3rem',
      },
    },
    '& div#content': {
      paddingTop: '70px',
      '& h6': {
        fontWeight: '300',
      },
    },
    '& #contactInfo': {
      paddingLeft: '20px',
      paddingBottom: '20px',
    },
    '& .MuiAvatar-root': {
      background: '#2873bf',
    },
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    '& button': {
      backgroundColor: '#2873bf',
      '&:hover': {
        backgroundColor: '#020381',
      },
    },
    '& svg': {
      transform: 'rotate(180deg)',
    },
  },
});

export default useStyles;