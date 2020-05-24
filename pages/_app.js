import App from 'next/app';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { withApollo } from '../lib/apollo/apollo';
import { CacheProvider } from '@emotion/core';

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion';

import { globalStyles } from '../shared/styles';

import Page from '../components/Page';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx);

    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, client, pageProps } = this.props;

    return (
      <CacheProvider value={cache}>
        {globalStyles}
        <ThemeProvider>
          <CSSReset />
          <Page client={client}>
            <Component {...pageProps} />
          </Page>
        </ThemeProvider>
      </CacheProvider>
    );
  }
}

export default withApollo({ ssr: true })(MyApp);
