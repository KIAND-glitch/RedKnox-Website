import React from 'react';
import { Container, Paper, Text, createStyles } from '@mantine/core';
import { IconPhoneFilled, IconMailFilled } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
  container: {
    width: 'xl',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    color: '#284258',
    padding: '16px',
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
    color: '#284258',
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
   },

   phone: {
    cursor: 'pointer',
    marginLeft: '54px', 
    color: '#284258',
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      marginLeft: '54px',
    },
   },

   ctaText: {
    fontWeight: 'bold'
   }
}));

const Banner = () => {
  const { classes } = useStyles();

  const handlePhoneClick = () => {
    window.location.href = 'tel:050 1234567';
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:sales@redknox.ae';
  };

  const iconStyle = {
    verticalAlign: 'middle',
    marginRight: '6px',
    color: '#db2727',
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
          <span className={classes.ctaText}>+971 56894 730 </span>
        </Text>
      </div>
    </div>
  );
};

export default Banner;
