import { Provider } from 'react-redux';

import store from '../store/redux';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
