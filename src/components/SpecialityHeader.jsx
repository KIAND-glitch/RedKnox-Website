import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
  } from '@mantine/core';
  
  const useStyles = createStyles((theme) => ({
    container: {
      maxWidth: 'unset',
      // marginLeft: '0px',
      // marginRight: '0px',
    },

    inner: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: `calc(${theme.spacing.xl} * 2)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
      [theme.fn.smallerThan('sm')]: {
        paddingTop: `calc(${theme.spacing.xl})`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
      },
    },
  
    content: {
      maxWidth: rem(580),
      marginRight: `calc(${theme.spacing.xl} * 3)`,
  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      // color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(34),
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: rem(28),
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    highlight: {
      textAlign: 'center',
      position: 'relative',
      // backgroundColor: '#e7f5ff',
      background: '#061879e8',
      borderRadius: theme.radius.sm,
      padding: `${rem(4)} ${rem(12)}`,
      [theme.fn.smallerThan('sm')]: {
        padding: `${rem(2)} ${rem(2)}`,
      },
    },

    list: {
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
        marginRight: 0,
        paddingLeft: `calc(${theme.spacing.sm} * 2)`,
        paddingRight: `calc(${theme.spacing.sm} * 3)`,
      },
    }
  }));
  
const HeroBullets = () => {
    const { classes } = useStyles();
    return (
      <div id="about-us">
        <Container className={classes.container}>
          <div className={classes.inner}>
          {/* <Image src="/images/courrier" className={classes.image} styles={{width: '100px'}}/> */}
          <img src="/images/courrier-removebg-preview.png" alt="Courrier Image" width='600px' height='400px'/>
            <div className={classes.content}>
              <Title className={classes.title} >
                The  <Text component='span' color='#db2727' className={classes.highlight}>Red<Text component='span' inherit color='white'>K</Text>nox <Text component='span' inherit color='white'>Global</Text></Text> difference <br />
              </Title>
  
              <List
                mt={30}
                spacing="sm"
                size="md"
                className={classes.list}
              >
                <List.Item>
                  <b>Customer-Centric Philosophy</b> – Our unwavering commitment is to place the customer at the core of every decision and action. We go beyond just understanding our customers; we anticipate their needs and craft tailored solutions that exceed expectations.
                </List.Item>
                <List.Item>
                  <b>Adaptability and Customization</b> – While we adhere to industry-standard processes, we never lose sight of the fact that every client is unique.  Our adaptability stands out as we customize our approaches, ensuring that our solutions align seamlessly with the distinct requirements of each client.
                </List.Item>
                <List.Item>
                  <b>Global Expertise, Local Excellence</b> – Our global reach empowers us to navigate complex international markets with ease. Yet we’re firmly grounded in local knowledge, enabling us to deliver solutions tailored to the specific dynamics of each region.
                </List.Item>
              </List>

            </div>
          </div>
        </Container>
      </div>
    );
  }

  export default HeroBullets;