import { h } from 'preact';
import App, { Container } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';

import 'reset-css/sass/_reset.scss';
import '../style/global.scss';


import '../style/colors.scss';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </Container>
    )
  }
}