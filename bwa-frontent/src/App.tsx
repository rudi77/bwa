import React, { FC } from 'react';
import { Admin, Resource } from 'react-admin';

import IncomeList from './components/Income/IncomeList';
import IncomeCreate from './components/Income/IncomeCreate';
import IncomeEdit from './components/Income/IncomeEdit';

import ExpenseList from './components/Expenses/ExpenseList';
import ExpenseCreate from './components/Expenses/ExpenseCreate';
import ExpenseEdit from './components/Expenses/ExpenseEdit';
import customDataProvider from './providers/customDataProvider';

const App: FC = () => (
  <Admin dataProvider={customDataProvider}>
    <Resource name="income" list={IncomeList} create={IncomeCreate} edit={IncomeEdit} />
    <Resource name="expense" list={ExpenseList} create={ExpenseCreate} edit={ExpenseEdit} />
  </Admin>
);

export default App;
