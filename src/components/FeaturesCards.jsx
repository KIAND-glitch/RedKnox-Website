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
      description: (
        <>
            <p>Sourcing and procurement are an essential component of effective supply chain management.</p>
            <p>We provide collaborative solutions for our customers that place a total supply chain perspective in their procurement processes.</p>
            <p>Some of the sectors that we cater to:</p>
        </>
    ),
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
      description: (
        <>
            <p>We support in transforming your supply-chain and logistics through efficiency and visibility to enhance performance and reduce operating costs.</p>
            <p>Our dedicated account management teams collaborate with customers to devise new operation models and solutions; from design to implementation and evaluation. The benefits are optimised inventory, shorter lead time to market and increased cost-efficiency.</p>
            <p>Through quality driven management techniques, we are committed to helping you achieve your strategic requirements at the global, regional and local level.</p>
        </>
    ),    
      icon: '/images/supply-chain-management.svg',
    },
    {
      title: 'Specialised Project Logistics',
      description: (
        <>
            <p>When you have to move over-sized, exceptional, bulky or heavy items leave it to the experts.</p>
            <p>Redknox Global have the expertise needed to plan, engineer and execute the best-suited end-to-end transportation solutions.</p>
            <p>We recognise that commencing a relationship with a new Logistics Service Provider may be considered as a risk. By using proven Project Management tools and methodology, coupled with our experienced and professional team we engage with all key stakeholders within a project to ensure seamless implementation with minimal impact on your business.</p>
        </>
    ),    
      icon: '/images/logistics.svg',
    },
    {
      title: 'Import - Export',
      description: (
        <>
            <p>Importing and exporting goods across the globe can be a challenging process. It includes identifying the right suppliers, understanding the regulatory requirements for Import and then arranging for the transportation; all of which are key components that are vital for the success of a business.</p>
            <p>Redknox Global support our customers in the Import & Export of their goods, taking away the hassle and ensuring their goods arrive their destination within the required lead times and at the right cost.</p>
        </>
    ),    
      icon: '/images/export.svg',
    },
    {
      title: 'Value Added Services',
      description: (
        <>
            <p>Our value-added services (VAS) offering are aimed to relieve your company of some of its non-core activities. These include:</p>
            <ul>
                <li>Control Tower to monitor, coordinate and operationally handle your inbound and outbound shipment flows across all modes of transport.</li>
                <li>Shipment re-packing, package labelling to expediting.</li>
            </ul>
            <p>We ensure flexibility and quality, striving to add value to your supply chain.</p>
        </>
    ),
    
      icon: '/images/delivery-service.svg',
    },
    {
      title: 'Air Express / Air Freight',
      description: (
        <>
            <p>We provide Import/Export services to/from over 220 countries with customs clearance and delivery within 2-4 days.</p>
            <p>We work with a network of trusted partners to ensure a reliable and cost-effective solution to your air transportation needs.</p>
            <p>We provide competitive pricing to key trade lanes across GCC, Asia, Europe, US & Africa.</p>
            <p>We arrange the entire end-to-end process right from arranging pick-up to final delivery.</p>
        </>
    ),    
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
