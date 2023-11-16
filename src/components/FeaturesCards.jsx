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
    createStyles
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';

const mockdata = [
    {
      title: 'Extreme performance',
      description:
        'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
      icon: IconGauge,
    },
    {
      title: 'Privacy focused',
      description:
        'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
      icon: IconUser,
    },
    {
      title: 'No third parties',
      description:
        'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
      icon: IconCookie,
    },
  ];

  const useStyles = createStyles((theme) => ({
    title: {
        fontSize: '34px',
        fontWeight: 900,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: '24px',
        },
    },
    description: {
        maxWidth: '600px',
        margin: 'auto',
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.colors.blue[6],
            width: '45px',
            height: '2px',
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    card: {
        border: `1px solid black`,
    },
    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.colors.blue[6],
            width: '45px',
            height: '2px',
            marginTop: theme.spacing.sm,
        },
    },
    // Other styles...
}));


const FeaturesCards = () => {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon
                style={{ width: 50, height: 50 }}
                stroke={2}
                color={theme.colors.blue[6]}
            />
            <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text size="sm" color="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="lg">
            Best company ever
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Integrate effortlessly with any technology stack
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
}

export default FeaturesCards;
