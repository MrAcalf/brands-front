import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Bem vindo à {' '}
        <Text
          inherit
          variant="gradient"
          gradient={{ from: 'teal', to: 'white', deg: 180 }}
          component="span"
          weight={700}
          className={classes.logo}
        >
          BRANDS
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This starter Next.js projects includes a minimal setup for server side rendering, if you
        want to learn more on Mantine + Next.js integration follow{' '}
        <Anchor href="https://mantine.dev/theming/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text>
    </>
  );
}
