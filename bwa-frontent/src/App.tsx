import React, { FC } from 'react';
import { Admin, Resource } from 'react-admin';
import IncomeList from './components/IncomeList';
import IncomeCreate from './components/IncomeCreate';
import IncomeEdit from './components/IncomeEdit';
import incomeProvider from './providers/incomeProvider';

const App: FC = () => (
  <Admin dataProvider={incomeProvider}>
    <Resource name="income" list={IncomeList} create={IncomeCreate} edit={IncomeEdit} />
  </Admin>
);

export default App;
