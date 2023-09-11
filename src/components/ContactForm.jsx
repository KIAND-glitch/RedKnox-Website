import {
    createStyles,
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
    rem,
  } from '@mantine/core';
  import { IconPhone, IconMailFilled } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: 400,
      boxSizing: 'border-box',
      backgroundColor: '#c6d6e2',
      borderRadius: theme.radius.md,
      padding: `calc(${theme.spacing.xl} * 4.5)`,
      paddingLeft: `calc(${theme.spacing.xl} * 10)`,
      paddingRight: `calc(${theme.spacing.xl} * 10)`,
  
      [theme.fn.smallerThan('sm')]: {
        padding: `calc(${theme.spacing.xl} * 1.5)`,
        marginLeft: `0`,
        marginRight: `0`,
      },
      mx: theme.spacing.xl,
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: '#284258',
      lineHeight: 1,
    },
  
    description: {
      color: '#284258',
      maxWidth: rem(300),
  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
    },
  
    form: {
      backgroundColor: theme.white,
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
    },
  
    social: {
      color: '#284258',
  
      '&:hover': {
        color: theme.colors[theme.primaryColor][1],
      },
    },
  
    input: {
      backgroundColor: theme.white,
      borderColor: theme.colors.gray[4],
      color: theme.black,
  
      '&::placeholder': {
        color: theme.colors.gray[5],
      },
    },
  
    inputLabel: {
      color: theme.black,
    },
  
    control: {
      backgroundColor: '#284258',
      [theme.fn.smallerThan('sm')]: {
        width: '100%',
      },
    },
  }));
  
const handlePhoneClick = () => {
  window.location.href = 'tel:050 1234567';
};

const handleMailClick = () => {
  window.location.href = 'mailto:sales@redknox.ae';
};

const ContactUs = () => {
    const { classes } = useStyles();
  
    const icons = 
      <>
        <ActionIcon size={28} onClick={handlePhoneClick} className={classes.social} variant="transparent">
          <IconPhone size="1.4rem" stroke={1.5} />
        </ActionIcon><ActionIcon size={28} onClick={handleMailClick} className={classes.social} variant="transparent">
            <IconMailFilled size="1.4rem" stroke={1.5} />
          </ActionIcon>
      </>
    ;
  
    return (
      <div className={classes.wrapper} id="contact-us">
        <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you within 24 hours
            </Text>
    
            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
  
            <Group position="right" mt="md">
              <Button className={classes.control}>Send message</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    );
  }

  export default ContactUs;