import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookies } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

const globalStyle = {
    fontFamily: 'darkmode-on, sans-serif',
    fontWeight: 400,
    textRendering: 'optimizeLegibility',
    webkitFontSmoothing: 'antialiazed',
    fontFerning: 'normal',
    fontVariantLigatures: 'common-ligatures contextual',
    mozFontFeatureSettings: 'kern, liga, clig, calt',
    msFontFeatureSettings: 'kern, liga, clig, calt',
    webkitFontFeatureSettings: 'kern, liga, clig, calt',
    fontFeatureSettings: 'smcp',
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
                <title>Mantine next example</title>
                <meta
                  name="viewport"
                  content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>

            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                  theme={{ colorScheme, ...globalStyle }}
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
