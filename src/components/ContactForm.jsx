import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
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
} from "@mantine/core";
import { IconPhone, IconMailFilled } from "@tabler/icons-react";

import { Notification } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

const FORMSPARK_FORM_ID = "UYTfMgZo";

  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: 400,
      boxSizing: 'border-box',
      backgroundColor: 'rgba(231, 245, 255, 1)',
      borderRadius: theme.radius.md,
      padding: `calc(${theme.spacing.xl} * 4.5)`,
      paddingLeft: `calc(${theme.spacing.xl} * 10)`,
      paddingRight: `calc(${theme.spacing.xl} * 10)`,

      [theme.fn.smallerThan('md')]: {
        paddingLeft: `calc(${theme.spacing.xl} * 5)`,
        paddingRight: `calc(${theme.spacing.xl} * 5)`,      
      },
  
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

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    companyName: "",
    phoneNumber: "",
    message: "",
  });

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit(formData); // Send form data to Formspark

    // Show the success notification
    setShowSuccessNotification(true);

    // You can clear the form data if needed
    setFormData({
      email: "",
      name: "",
      companyName: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div className={classes.wrapper} id="contact-us">
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email, and we will get back to you within 24 hours
          </Text>

          <Group mt="xl">
            <ActionIcon size={28} onClick={handlePhoneClick} className={classes.social} variant="transparent">
              <IconPhone size="1.4rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size={28} onClick={handleMailClick} className={classes.social} variant="transparent">
              <IconMailFilled size="1.4rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
        <div className={classes.form}>
          <form onSubmit={onSubmit}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="First and Last Name"
              mt="md"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Company Name"
              placeholder="Company"
              mt="md"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Phone Number"
              placeholder="+971 xxxxxxxx"
              mt="md"
              required
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to explore your services"
              minRows={4}
              mt="md"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group position="right" mt="md">
              <Button type="submit" disabled={submitting} className={classes.control}>
                Send message
              </Button>
            </Group>
          </form>
        </div>
      </SimpleGrid>

      {/* Show the success notification at the top right with sliding animation */}
      {showSuccessNotification && (
        <div
          className="notification-container"
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 9999,
            animation: "slide-in 0.5s ease-out",
          }}
        >
          <Notification
            icon={<IconCheck size="1.1rem" />}
            color="teal"
            title="Successfully submitted"
            onClose={() => setShowSuccessNotification(false)}
          >
            We will be in touch shortly.
          </Notification>
        </div>
      )}
    </div>
  );
};

export default ContactUs;