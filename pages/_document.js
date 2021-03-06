import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import '../node_modules/react-flippy/dist/styles.css';

import { Provider } from 'react-redux'
import configureStore from '~/state/store/configureStore'
import { verifyCredentials } from '~/state/actions/reduxTokenAuthConfig'

export default class MyDocument extends Document {
  componentDidMount() {
    this.store = configureStore()
    verifyCredentials(this.store)
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <Provider store={this.store}>
            <Main />
          </Provider>
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
