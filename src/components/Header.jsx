import { createStyles, Header, Menu, Group, Center, Burger, Container, rem, Image, Text} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link as ScrollLink, Element } from 'react-scroll';

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 700,
    color: 'rgb(40, 66, 88)',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

const HeaderMenu = ({ links }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    let hrefValue = link.link; // Default to the provided link

    // Map specific links to component IDs
    switch (link.link) {
      case '/services':
        hrefValue = 'hero-bullets'; // Use the ID of the HeroBullets component
        break;
      case '/about':
        hrefValue = 'features-grid'; // Use the ID of the FeaturesGrid component
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
        duration={500} // Adjust this value for scroll speed
        offset={0} // Adjust this value to account for the header height
      >
        {link.label}
      </ScrollLink>
    );
  });

  return (
    <Header height={56} mb={0}>
      <Container>
        <div className={classes.inner}>
          <Image src="../../public/vercel.svg"/>
          <Text fw={800} variant="gradient"
              gradient={{ from: '#8c4a22', to: '#f6a951' }}
              size="32px">RedKnox Global</Text>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </div>
      </Container>
    </Header>
  );
}

export default HeaderMenu;