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
//   import { IconCheck } from '@tabler/icons-react';
//   import image from './image.svg';
  
  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 6)`,
      paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    },
  
    content: {
      maxWidth: rem(480),
      marginRight: `calc(${theme.spacing.xl} * 3)`,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(36),
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
      position: 'relative',
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      borderRadius: theme.radius.sm,
      padding: `${rem(4)} ${rem(12)}`,
    },
  }));
  
const HeroBullets = () => {
    const { classes } = useStyles();
    return (
      <div>
        <Container>
          <div className={classes.inner}>
          <Image src='https://www.publicdomainpictures.net/pictures/490000/velka/global-delivery-service.jpg' className={classes.image} />
            <div className={classes.content}>
              <Title className={classes.title}>
                The  <span className={classes.highlight}>RedKnox</span> Difference <br />
              </Title>
              {/* <Text color="dimmed" mt="md">
                Build fully functional accessible web applications faster than ever – Mantine includes
                more than 120 customizable components and hooks to cover you in any situation
              </Text> */}
  
              <List
                mt={30}
                spacing="sm"
                size="sm"
                // icon={
                //   <ThemeIcon size={20} radius="xl">
                //     {/* <IconCheck size={rem(12)} stroke={1.5} /> */}
                //   </ThemeIcon>
                // }
              >
                <List.Item>
                  <b>Customer-Centric Philosophy</b> – Our unwavering commitment is to place the customer at the core of every decision and action. We go beyond just understanding our customers; we anticipate their needs and craft tailored solutions that exceed expectations.
                </List.Item>
                <List.Item>
                  <b>Adaptability and Customization</b> – While we adhere to industry-standard processes, we never lose sight of the fact that every client is unique. Our adaptability shines as we customize our approaches, ensuring that our solutions seamlessly align with the distinct requirements of each project.
                </List.Item>
                <List.Item>
                  <b>Global Expertise, Local Excellence</b> – Our global reach empowers us to navigate complex international markets with ease. Yet, we're firmly grounded in local knowledge, enabling us to deliver solutions tailored to the specific dynamics of each region.
                </List.Item>
              </List>

            </div>
          </div>
        </Container>
      </div>
    );
  }

  export default HeroBullets;