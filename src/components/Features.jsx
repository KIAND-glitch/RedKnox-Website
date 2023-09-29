import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem, Image, List, Flex } from '@mantine/core';
import { IconPackage } from '@tabler/icons-react';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';
// Importing the CSS file into your SupplyChain.js component file
import styles from './Features.module.css';

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

  list: {
    padding: theme.spacing.xl,
    display: 'flex',
    justifyContent: 'center',
    fontSize: '32px',
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
      <Title order={2} className={classes.title} ta="center">
        Explore Our Services
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md" style={{fontSize: "1.15rem", fontWeight: "400"}}>
        Here are just some of the services we offer, please contact us to gain in-depth understanding of all our offerings. 
      </Text>
      <Container className={classes.list}>
          <List
          spacing="xs"
          size="lg"
          center
          style={{fontSize: "1.25rem", fontWeight: "600"}}
          icon={
            <ThemeIcon color="#e7f5ff" size={32} radius="xl">
              <IconPackage size="1.5rem" color='black'/>
            </ThemeIcon>
          }
        >
          <List.Item>Sourcing and Procurement</List.Item>
            <List withPadding listStyleType="disc" style={{fontSize: "16px", fontWeight: "400"}}>
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
    backgroundColor: '#061879e8',
    borderRadius: '20px',
    height: rem(200),
    width: rem(300),
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
    [theme.fn.smallerThan('sm')]: {
      width: '3rem',
      height:'3rem',
    },
  },

  title: {
    color: 'white',
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



