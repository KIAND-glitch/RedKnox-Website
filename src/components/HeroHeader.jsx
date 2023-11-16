import { createStyles, Container, Title, Text, Button, rem, Image } from '@mantine/core';
import { Link as ScrollLink, Element } from 'react-scroll';


const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(220deg, rgba(130, 201, 30, 0) 0%, rgba(6, 35, 67, 0.9) 100%), url("/images/dall-e-hero-5.png")',
    paddingTop: `calc(${theme.spacing.xl} * 10)`, // increased from 7 to 10
    paddingBottom: `calc(${theme.spacing.xl} * 3)`, // increased from 2 to 5
    [theme.fn.smallerThan('md')]: {
      backgroundSize: 'cover',
    },
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
    paddingBottom: `calc(${theme.spacing.xl} * 1)`,
    marginBottom: `calc(${theme.spacing.xl} * 1)`, // add this for bottom spacing
    marginLeft: 'calc(${theme.spacing.xl} * 2)', // change this from the calculated value to 'auto'
    marginRight: `auto`, // adjust this to increase or decrease right-side space

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
      marginLeft: 0,
      paddingBottom: 0,
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
    opacity: 1,
    fontSize: rem(20),
    fontWeight: 400,
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

            {/* <Title className={classes.title}>
              <Text component='span' inherit color='#db2727'>
                RED<Text component='span' inherit color='white'>K</Text>NOX 
                <Text component='span' inherit color='white'> GLOBAL</Text>
              </Text>           
            </Title> */}

            <Text className={classes.description} mt={30}>
            RedKnox Global General Trading is a leading provider of integrated solutions for Sourcing and Procurement, Supply Chain Management and specialised Logistics services in UAE
            </Text>

            <ScrollLink
              to={'contact-us'}
              className={classes.link}
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
            >
              <Button
                    color="red"
                    size="md"
                    className={classes.control}
                    mt={40}
                  >
                    Get in Touch
                  </Button>
            </ScrollLink>

            
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroImageRight;