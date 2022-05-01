import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookies } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, Tuple, DefaultMantineColor } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

interface MantineTheme {
  // Defines color scheme for all components, defaults to "light"
  colorScheme?: 'light' | 'dark';

  // Controls focus ring styles:
  // auto – display focus ring only when user navigates with keyboard (default)
  // always – display focus ring when user navigates with keyboard and mouse
  // never – focus ring is always hidden (not recommended)
  focusRing?: 'auto' | 'always' | 'never';

  // Default border-radius used for most elements
  defaultRadius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

  // White and black colors, defaults to '#fff' and '#000'
  white?: string;
  black?: string;

  // Object of arrays with 10 colors
  colors?: Record<string, Tuple<string, 10>>;

  // Should be key of theme.colors, cannot be actual color value
  primaryColor?: DefaultMantineColor;

  // font-family and line-height used in most components
  fontFamily?: string;
  lineHeight?: string | number;

  // Timing function used for animations, defaults to 'ease'
  transitionTimingFunction?: string;

  // Monospace font-family, used in Code, Kbd and Prism components
  fontFamilyMonospace?: string;

  // Sizes for corresponding properties
  fontSizes?: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
  radius?: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
  spacing?: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;

}

const theme: MantineTheme = {
  fontFamily: 'darkmode-on, sans-serif',
  black: '#1a1a1a',
  white: '#fafafa',
  primaryColor: 'teal',
};
export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>{pageProps?.title || 'Brands Home'}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{ ...theme, colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
