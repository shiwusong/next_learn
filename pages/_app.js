import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from '../core/story'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider value={{ a: 1, updateA: () => {} }}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    )
  }
}
