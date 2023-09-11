import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem, Icon } from '@mantine/core';
import { IconPackage } from '@tabler/icons-react';

export const MOCKDATA = [
  {
    title: 'Air Express/Freight',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
  },
  {
    title: 'Customs Clearance',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
  },
  {
    title: 'Strategic Sourcing',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
  },
  {
    title: 'Import - Export',
    description:
      'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right',
  },
  {
    title: 'Repair & Warranty Support',
    description:
      'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
  },
  {
    title: 'Procurement',
    description:
      'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
  },
];


export function Feature({ title, description }) {
  return (
    <div style={{backgroundColor: '#c6d6e2', width: '290px', height: '160px', borderRadius: '10px', padding: '8px'}}>
      <div style={{
          display: 'flex', gap: '12px'}}>
        <ThemeIcon variant="light" size={40} radius={40} color='#c6d6e2'>
          <IconPackage size="5rem" stroke={1.5} color='#8c4a22' />
        </ThemeIcon>
        <Text mt="8px" mb='16px' color='#284258' fontWeight={900}>
          {title}
        </Text>
      </div>

      <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
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

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'center',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'center',
    },
  },

  grid: {
    [theme.fn.smallerThan('sm')]: {
      marginLeft: `calc(${theme.spacing.sm} * 1.5)`,
    },
  }
}));


const FeaturesGrid = ({ title, description, data = MOCKDATA }) => {
  const { classes } = useStyles();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper} id="our-services">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Explore Our Services
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Here are just some of the services we offer, please contact us to gain in-depth understanding of all our offerings. 
      </Text>
      <Title className={classes.title}>{title}</Title>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
        className={classes.grid}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default FeaturesGrid;