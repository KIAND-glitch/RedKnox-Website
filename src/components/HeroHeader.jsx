import { createStyles, Container, Title, Text, Button, rem, Image } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 90%), url(https://www.natriologistics.com/wp-content/uploads/2023/06/Natrio-Global-Logistics-Distribution-Wharehouse.jpg)',
    paddingTop: `calc(${theme.spacing.xl} * 7)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,
    marginLeft: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

const HeroImageRight = () =>  {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="xl">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: '#f6a951', to: '#8c4a22' }}
              >
                RedKnox
              </Text>
              
               
            </Title>

            <Text className={classes.description} mt={30}>
            Your One-Stop Solution for Global Sourcing, Procurement, and Supply Chain Excellence
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: '#f6a951', to: '#8c4a22' }}
              size="md"
              className={classes.control}
              mt={40}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroImageRight;