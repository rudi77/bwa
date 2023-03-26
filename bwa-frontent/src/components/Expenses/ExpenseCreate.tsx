import React, { FC } from 'react';
import { Create, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin';

const ExpenseCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="Art" />
      <NumberInput source="Brutto" />
      <NumberInput source="Netto" />
      <NumberInput source="Steuersatz" />
      <DateInput source="Datum" />
      <TextInput source="Kostenarten" />
    </SimpleForm>
  </Create>
);

export default ExpenseCreate;
