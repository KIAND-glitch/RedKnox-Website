import React from 'react';
import { Container, Paper, Text, createStyles } from '@mantine/core';
import { IconPhoneFilled, IconMailFilled } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
  container: {
    position: 'sticky',
    top: '0',
    zIndex: '20',
    width: 'xl',
    backgroundColor: '#cc2229',
    color: '#284258',
    padding: '8px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.fn.smallerThan('sm')]: {
      padding: '8px',
    },
  },

   inner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
   },

   mail: {
    cursor: 'pointer',
    color: 'white',
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
   },

   phone: {
    cursor: 'pointer',
    marginLeft: '54px', 
    color: 'white',
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      marginLeft: '54px',
    },
   },

   ctaText: {
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none', // Remove underline
    WebkitTextDecoration: 'none', // Specific for WebKit browsers like Safari
    MozTextDecoration: 'none', // Specific for Firefox
  }
}));

const Banner = () => {
  const { classes } = useStyles();

  const handlePhoneClick = () => {
    window.location.href = 'tel:+971 56 894730';
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:sales@redknox.ae';
  };

  const iconStyle = {
    verticalAlign: 'middle',
    marginRight: '6px',
    color: '#f8cb53',
    marginBottom: '6px',
  };

  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <Text size="lg" onClick={handleMailClick} className={classes.mail}>
          <IconMailFilled style={iconStyle} /> 
          <span className={classes.ctaText}>sales@redknox.ae</span>
        </Text>

        <Text size="lg" onClick={handlePhoneClick} className={classes.phone}>
          <IconPhoneFilled style={iconStyle} />
          <span className={classes.ctaText}>+971 56 894730</span>
        </Text>
      </div>
    </div>
  );
};

export default Banner;
