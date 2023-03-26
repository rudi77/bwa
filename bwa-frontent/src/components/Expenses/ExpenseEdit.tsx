import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin';

const ExpenseEdit: FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="Art" />
      <NumberInput source="Brutto" />
      <NumberInput source="Netto" />
      <NumberInput source="Steuersatz" />
      <DateInput source="Datum" />
      <TextInput source="Kostenarten" />
    </SimpleForm>
  </Edit>
);

export default ExpenseEdit;
