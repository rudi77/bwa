import { DataProvider } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const apiUrl = 'http://localhost:3000';

const dataProvider: DataProvider = simpleRestProvider(apiUrl);

export default dataProvider;
