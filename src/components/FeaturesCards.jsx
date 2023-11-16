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
    List
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';

const mockdata = [
    {
      title: 'Sourcing and Procurement',
      description:
        ' ',
      additionalContent: (
        <List listStyleType="disc">
            <List.Item>Automotive</List.Item>
            <List.Item>Lighting fixtures</List.Item>
            <List.Item>Industrial solutions</List.Item>
            <List.Item>Project equipment & supplies</List.Item>
        </List>
      ),
      icon: IconGauge,
    },
    {
      title: 'Supply chain management solutions',
      description:
        '',
      icon: IconUser,
    },
    {
      title: 'Specialised Project Logistics',
      description:
        '',
      icon: IconCookie,
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
            <feature.icon
                style={{ width: 50, height: 50 }}
                stroke={2}
                color='#cc2229'
            />
            <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text size="sm" color="dimmed" mt="sm">
                {feature.description}
            </Text>
            {feature.additionalContent}
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
