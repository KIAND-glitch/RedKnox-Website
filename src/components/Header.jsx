import { createStyles, Header, Menu, Group, Center, Burger, Container, rem, Text, Image, ActionIcon, useMantineTheme} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link as ScrollLink, Element } from 'react-scroll';

const useStyles = createStyles((theme) => ({

  header: {
    borderBottom: 0,
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.fn.smallerThan('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: theme.fontSizes.md,
    fontWeight: 700,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.1
      ),
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

const HeaderMenu = ({ links }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const items = links.map((link) => {
    let hrefValue = link.link; // Default to the provided link

    // Map specific links to component IDs
    switch (link.link) {
      case '/services':
        hrefValue = 'features-grid';
         // Use the ID of the HeroBullets component
        break;
      case '/about':
        hrefValue = 'hero-bullets';// Use the ID of the FeaturesGrid component
        break;
      case '/contact':
        hrefValue = 'contact-us'; // Use the ID of the ContactUs component
        break;
      default:
        break;
    }

    return (
      <ScrollLink
        key={link.label}
        to={hrefValue}
        className={classes.link}
        spy={true}
        smooth={true}
        duration={500}
        offset={0}
      >
        {link.label}
      </ScrollLink>
    );
  });

  return (
    <Header height={56} mb={0} className={classes.header} style={{ background: '#061879e8'}}>
      <Container>
        <div className={classes.inner}>
          <div style={{display:'flex', gap: '16px'}}>
          <ActionIcon>
            <Image src="/images/redknox-logo.png" width={40} height={40} style={{marginBottom: '-10px'}}/>
          </ActionIcon>
          

              <Text fw={800} size="24px" color='#db2727'>
                RED<Text component='span' inherit color='white' size="26px">K</Text>NOX 
                <Text component='span' inherit color='white'> GLOBAL</Text>
              </Text>           
          </div>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          {/* <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" /> */}
        </div>
      </Container>
    </Header>
  );
}

export default HeaderMenu;