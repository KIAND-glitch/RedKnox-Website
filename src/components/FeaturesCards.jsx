import React from 'react';
import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    useMantineTheme,
    createStyles,
    List,
    Image
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';

const mockdata = [
    {
      title: 'Sourcing and Procurement',
      description:
        `Sourcing and procurement are an essential
        component of effective supply chain
        management. We provide collaborative
        solutions for our customers that place a total
        supply chain perspective in their procurement
        processes.
        
        Some of the sectors that we cater to:`,
      additionalContent: (
        <List listStyleType="disc" size="md" color="#f1f1f1" mt="sm">
            <List.Item>Automotive</List.Item>
            <List.Item>Lighting fixtures</List.Item>
            <List.Item>Industrial solutions</List.Item>
            <List.Item>Project equipment & supplies</List.Item>
        </List>
      ),
      icon: '/images/procurement.svg',
    },
    {
      title: 'Supply Chain Management Solutions',
      description:
        `We support in transforming your supply-chain
        and logistics through efficiency and visibility to
        enhance performance and reduce operating
        costs.`,
      icon: '/images/supply-chain-management.svg',
    },
    {
      title: 'Specialised Project Logistics',
      description:
        `We work with your business to develop a
        dependable freight plan which suits your
        unique circumstances and needs.`,
      icon: '/images/logistics.svg',
    },
    {
      title: 'Import - Export',
      description:
        '',
      icon: '/images/export.svg',
    },
    {
      title: 'Value Added Services',
      description:
        `Our value-added services (VAS) offering
        are aimed to relieve your company of
        some of its non- core activities, from
        labelling to expediting. We ensure
        flexibility and quality, striving to add value
        to your supply chain.`,
      icon: '/images/delivery-service.svg',
    },
    {
      title: 'Air Express / Air Freight',
      description:
        `We provide Import/Export services to/from over
        220 countries with customs clearance and
        delivery within 2-4 days. We work with a
        network of trusted partners to ensure a reliable
        and cost-effective solution to your air
        transportation needs.`,
      icon: '/images/freight.svg',
    },
  ];

  const useStyles = createStyles((theme) => ({
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      marginBottom: theme.spacing.md,
      textAlign: 'center',
      fontSize: `calc(${theme.fontSizes.xl} * 2)`,
      color: '#393232',
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: '1.75rem',
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

    card: {
        border: `1px solid none`,
        // height: '280px',
        [theme.fn.largerThan('sm')]: {
          [theme.fn.smallerThan('lg')]: {
            // height: '320px',
          }
        },
    },
    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: '#cc2229',
            width: '45px',
            height: '2px',
            marginTop: theme.spacing.sm,
        },
    },
}));


const FeaturesCards = () => {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            {/* <feature.icon
                style={{ width: 50, height: 50 }}
                stroke={2}
                color='#cc2229'
            /> */}
            <Image src={feature.icon} style={{ width: 60, height: 60 }}/>
            <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text size="md" mt="sm">
                {feature.description}
                {feature.additionalContent}
            </Text>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
        Explore Our Services
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md" style={{fontWeight: "400"}}>
        Here are just some of the services we offer, please contact us to gain an in-depth understanding of all our offerings. 
      </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50}
        breakpoints={[
          { maxWidth: 'md', cols: 3, spacing: 'md' },
          { maxWidth: 'sm', cols: 1, spacing: 'md' },
          { maxWidth: 'xs', cols: 1, spacing: 'md' },
        ]}
        >
          {features}
        </SimpleGrid>
      </Container>
    );
}

export default FeaturesCards;
