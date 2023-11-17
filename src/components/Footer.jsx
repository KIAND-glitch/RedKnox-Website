import { createStyles, Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core';
import { IconPhone, IconMailFilled } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(10),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    // maxWidth: rem(200),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },

  highlight: {
    textAlign: 'center',
    position: 'relative',
    // backgroundColor: '#e7f5ff',
    background: theme.fn.linearGradient(90, 'black', '#0044FF'),
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
    [theme.fn.smallerThan('sm')]: {
      padding: `${rem(2)} ${rem(2)}`,
    },
  },
}));


const data = [{ title: 'string', links: [{ label: 'string', link: 'string' }]}, { title: 'string', links: [{ label: 'string', link: 'string' }]}]

const FooterLinks = () => {
  const { classes } = useStyles();

  const handlePhoneClick = () => {
    window.location.href = 'tel:+971 56894 7430';
  };
  
  const handleMailClick = () => {
    window.location.href = 'mailto:sales@redknox.ae';
  };

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <Image src="/images/RedKnox_Global_1.png" className={classes.logo} width={300} height={60}/>
        {/* <Text fw={800} color='#db2727' size="32px" className={classes.highlight}>Red<Text component='span' inherit color='white'>K</Text>nox <Text component='span' inherit color='white'>Global</Text></Text> */}
          <Text size="md" color="dimmed" className={classes.description}>
          Your One-Stop Solution for Global Sourcing, Procurement, and Supply Chain Excellence
          </Text>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg" onClick={handlePhoneClick}>
            <IconPhone size="1.25rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" onClick={handleMailClick}>
            <IconMailFilled size="1.25rem" stroke={1.5} />
          </ActionIcon>
        </Group>
        
      </Container>
      {/* <div size='6px'>
      <a href="https://www.flaticon.com/free-icons/logistic" title="logistic icons">Logistic icons created by noomtah - Flaticon</a>
      <div> Icons made by <a href="https://www.flaticon.com/authors/kosonicon" title="kosonicon"> kosonicon </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
      <div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
      <div> Icons made by <a href="https://www.flaticon.com/authors/parzival-1997" title="Parzival’ 1997"> Parzival’ 1997 </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
      <div> Icons made by <a href="https://www.flaticon.com/authors/designing-hub" title="Designing Hub"> Designing Hub </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
      <div> Icons made by <a href="https://www.flaticon.com/authors/iconjam" title="Iconjam"> Iconjam </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
      <div> Icons made by <a href="https://www.flaticon.com/authors/lutfix" title="lutfix"> lutfix </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
      <div> Icons made by <a href="https://www.flaticon.com/authors/circlon-tech" title="Circlon Tech"> Circlon Tech </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
      </div> */}
    </footer>
  );
}

export default FooterLinks;