import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { extractStyles } from 'evergreen-ui'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const { css, hydrationScript } = extractStyles()

    return {
      ...page,
      css,
      hydrationScript,
    }
  }

  render() {
    const { css, hydrationScript } = this.props

    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="https://console.liferay.cloud/static/images/favicon-dxpcloud.ico"
          />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>

        <body>
          <Main />
          {hydrationScript}
          <NextScript />
        </body>
      </Html>
    )
  }
} 