import React, { FC } from 'react';
import { List, Datagrid, TextField, DateField, NumberField, Filter, TextInput } from 'react-admin';
import { styled } from '@mui/system';

const useStyles = () => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
};

const ExpenseFilter: FC = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="Art" alwaysOn />
    <TextInput label="Kostenarten" source="Kostenarten" />
    <TextInput label="Brutto" source="Brutto" />
    <TextInput label="Netto" source="Netto" />
    <TextInput label="Steuersatz" source="Steuersatz" />
    <TextInput label="Datum" source="Datum" />
  </Filter>
);

const ExpenseList: FC = (props) => {
  const classes = useStyles();

  return (
    <List {...props} filters={<ExpenseFilter />} sort={{ field: 'Datum', order: 'DESC' }}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="Art" />
        <TextField source="Kostenarten" />
        <NumberField source="Brutto" />
        <NumberField source="Netto" />
        <NumberField source="Steuersatz" />
        <DateField source="Datum" />
      </Datagrid>
    </List>
  );
};

export default ExpenseList;
