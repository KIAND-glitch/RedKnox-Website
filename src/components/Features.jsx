import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem, Image, List } from '@mantine/core';
import { IconPackage } from '@tabler/icons-react';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';

const BasicServices = [
  {
    title: 'Air Express/Freight',
    image: '/images/freight.png'
  },
  {
    title: 'Customs Clearance',
    image: '/images/custom-clearance.png'
  },
];

const ExtendedServices =[
  {
    title: 'Strategic Sourcing',
    image: '/images/supply-chain-management.png'
  },
  {
    title: 'Aftermarket Services',
    image: '/images/call-center-service.png'
  },
  {
    title: 'Reverse Logistics',
    image: '/images/return.png'
  },
  {
    title: 'Import - Export',
    image: '/images/export.png'
  },
  {
    title: 'Repair & Warranty Support',
    image: '/images/insurance.png'
  },
  {
    title: 'Procurement',
    image: '/images/procurement.png'
  },
]

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    [theme.fn.smallerThan('sm')]: {
      paddingTop: `calc(${theme.spacing.xl} * 2)`,
      paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
    fontSize: '32px',
    color: '#061879e8',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'center',
    },
  },

  title2: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
    fontSize: '28px',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
      textAlign: 'center',
    },
  },

  title3: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
    fontSize: '24px',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(20),
      textAlign: 'center',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'center',
    },
  },

  grid1: {
    marginBottom: theme.spacing.xl,
    marginLeft: `calc(${theme.spacing.xl} * 3.5)`,
    [theme.fn.smallerThan('md')]: {
      marginLeft: `calc(${theme.spacing.sm} * 5)`,
    },
    [theme.fn.smallerThan('sm')]: {
      marginLeft: `calc(${theme.spacing.sm} * 2.5)`,
    },
  },

  grid2: {
    marginBottom: theme.spacing.xl,
    [theme.fn.smallerThan('md')]: {
      marginLeft: `calc(${theme.spacing.sm} * 5)`,
    },
    [theme.fn.smallerThan('sm')]: {
      marginLeft: `calc(${theme.spacing.sm} * 2.5)`,
    },
  },

  list: {
    padding: theme.spacing.xl,
    display: 'flex',
    justifyContent: 'center',
  }
}));


const FeaturesGrid = () => {
  const { classes } = useStyles();

  const items1 = BasicServices.map((item) => <Feature2 {...item} key={item.title} />);
  const items2 = ExtendedServices.map((item) => <Feature2 {...item} key={item.title} />);

  return (
    <Container className={classes.wrapper} id="our-services">
      <Title order={2} className={classes.title} ta="center">
        Explore Our Services
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Here are just some of the services we offer, please contact us to gain in-depth understanding of all our offerings. 
      </Text>
      <Container className={classes.list}>
          <List
          spacing="xs"
          size="lg"
          center
          icon={
            <ThemeIcon color="#e7f5ff" size={32} radius="xl">
              <IconPackage size="1.5rem" color='black'/>
            </ThemeIcon>
          }
        >
          <List.Item>Sourcing and Procurement</List.Item>
            <List withPadding listStyleType="disc">
                  <List.Item>Automotive</List.Item>
                  <List.Item>Lighting fixtures</List.Item>
                  <List.Item>Industrial solutions</List.Item>
                  <List.Item>{'Project equipment & supplies'}</List.Item>
                  
              </List>
          <List.Item>Supply chain management solutions</List.Item>
          <List.Item>Specialised Project Logistics</List.Item>
        </List>
      </Container>

      <Title order={3} className={classes.title2} ta="center" mt="md">
        Supply Chain Portfolio
      </Title>

      <Title order={3} className={classes.title3} ta="center" mt="md">
        Basic Services
      </Title>

      <SimpleGrid
        mt={40}
        mb={20}
        cols={2}
        // spacing={10}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
        className={classes.grid1}
      >
        {items1}
      </SimpleGrid>

      <Title order={3} className={classes.title3} ta="center" mt="md">
        Extended Services
      </Title>

      <SimpleGrid
        mt={40}
        mb={20}
        cols={3}
        // spacing={30}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
        className={classes.grid2}
      >
        {items2}
      </SimpleGrid>
    </Container>
  );
}

export default FeaturesGrid;

const useStyles2 = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: rem(120),
    width: rem(280),
    top: 0,
    left: 0,
    backgroundColor: '#061879e8',
    borderRadius: '20px',
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    width: '3rem',
    height:'3rem',
  },

  title: {
    color: 'white',
  },
}));

function Feature2({ title, image, className, ...others }) {
  const { classes, cx } = useStyles2();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Image src={image} className={classes.icon} width='3rem' height='3rem'/>
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
      </div>
    </div>
  );
}



