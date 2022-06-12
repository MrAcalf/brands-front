import { ActionIcon, useMantineColorScheme, createStyles } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  toggleMobile: {
    position: 'fixed',
    right: 0,
    bottom: '10vh',
    ...(theme.colorScheme === 'light' && {
      border: '1px solid #e9ecef',
    }),
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      size="xl"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? '#37C8AB' : '#C82AFF',
      })}
    >
      {colorScheme === 'dark' ? <Sun size={24} /> : <MoonStars size={24} />}
    </ActionIcon>
  );
}

export function ColorSchemeToggleMobile() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  return (
    <ActionIcon
      className={classes.toggleMobile}
      onClick={() => toggleColorScheme()}
      size="xl"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? '#37C8AB' : '#C82AFF',
      })}
    >
      {colorScheme === 'dark' ? <Sun size={24} /> : <MoonStars size={24} />}
    </ActionIcon>
  );
}
