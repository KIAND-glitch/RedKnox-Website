import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem, Image, List, Flex } from '@mantine/core';
import { IconPackage } from '@tabler/icons-react';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';
import styles from './Features.module.css';
import FeaturesCards from './FeaturesCards';

const BasicServices = [
  {
    title: 'Strategic Sourcing',
    image: '/images/supply-chain-management.png'
  },
  {
    title: 'Procurement',
    image: '/images/procurement.png'
  },
  {
    title: 'Import - Export',
    image: '/images/export.png'
  },
];

const ExtendedServices =[
  {
    title: 'Value Added Services',
    image: '/images/public-service.png'
  },
  {
    title: 'Project Logistics',
    image: '/images/logistics.png'
  },
  {
    title: 'Air Express/Freight',
    image: '/images/freight.png'
  },
]

const Services =[
  {
    title: 'Sourcing and Procurement',
    image: '/images/public-service.png'
  },
  {
    title: 'Supply Chain Management Solutions',
    image: '/images/logistics.png'
  },
  {
    title: 'Specialised Project Logistics',
    image: '/images/freight.png'
  },
]

const useStyles = createStyles((theme) => ({
  wrapper: {
    maxWidth: 'unset',
    marginLeft: '0px',
    marginRight: '0px',
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
    fontSize: `calc(${theme.fontSizes.xl} * 2)`,
    color: '#393232',

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
    fontSize: `calc(${theme.fontSizes.xl} * 1.75)`,
    color: '#393232',

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
    fontSize: `calc(${theme.fontSizes.xl})`,

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'center',
    },
  },

  list: {
    padding: theme.spacing.xl,
    display: 'flex',
    justifyContent: 'center',
    fontSize: `calc(${theme.fontSizes.xl} * 5)`,
    marginBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  SupplyChainContainer: {
    display: 'flex',
  }
}));

function SupplyChainComponent({ items1, items2 }) {
  return (
    <div className={styles.SupplyChainContainer}>
      <div className={styles.BasicServices}>
        <h3 className={styles.heading}>Basic Services</h3>
        <div className={`${styles.grid} ${styles.basicServicesGrid}`}>
          {items1}
        </div>
      </div>

      <div className={styles.ExtendedServices}>
        <h3 className={styles.heading}>Extended Services</h3>
        <div className={`${styles.grid} ${styles.extendedServicesGrid}`}>
          {items2}
        </div>
      </div>
    </div>
  );
}

const FeaturesGrid = () => {
  const { classes } = useStyles();

  const items1 = BasicServices.map((item) => <Feature2 {...item} key={item.title} />);
  const items2 = ExtendedServices.map((item) => <Feature2 {...item} key={item.title} />);

  return (
    <Container className={classes.wrapper} id="our-services">
      {/* <FeaturesCards/> */}
      <Title order={2} className={classes.title} ta="center">
        Explore Our Services
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md" style={{fontWeight: "400"}}>
        Here are just some of the services we offer, please contact us to gain an in-depth understanding of all our offerings. 
      </Text>
      <Container className={classes.list}>
          <List
          spacing="xl"
          size="xl"
          center
          style={{fontWeight: "700", fontSize: `calc(1.5rem)`, margin: "10px"}}
          icon={
            <ThemeIcon color="#e7f5ff" size={32} radius="xl">
              <IconPackage size="1.75rem" color='black'/>
            </ThemeIcon>
          }
        >
          <List.Item>Sourcing and Procurement</List.Item>
            <List spacing="2px" withPadding listStyleType="disc" style={{fontSize: "1.25rem", fontWeight: "600", marginLeft: "1rem"}}>
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
      
      <SupplyChainComponent items1={items1} items2={items2} />

    </Container>
  );
}

export default FeaturesGrid;

const useStyles2 = createStyles((theme) => ({
  content: {
    backgroundColor: 'white',
    borderRadius: '15px',
    height: rem(200),
    width: '100%',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.fn.smallerThan('sm')]: {
      height: rem(100),
      width: rem(300),
    },
  },

  icon: {
    width: '5rem',
    height:'5rem',
    color: 'red',
    [theme.fn.smallerThan('sm')]: {
      width: '3rem',
      height:'3rem',
    },
  },

  title: {
    color: '#393232',
  },
}));

function Feature2({ title, image, className, ...others }) {
  const { classes, cx } = useStyles2();

  return (
      <div className={classes.content}>
        <Image src={image} className={classes.icon} width='3rem' height='3rem'/>
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
      </div>
  );
}



