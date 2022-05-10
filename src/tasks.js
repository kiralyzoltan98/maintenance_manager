// in src/users.js
import * as React from "react";
import {Show, SimpleShowLayout, DateField, List, Datagrid, TextField, EmailField, SelectField} from 'react-admin';
import MyUrlField from './MyUrlField';
import {
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    DateInput,
} from 'react-admin';
import { ShowButton } from 'react-admin';

const taskFilters = [
    <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="username" />
    </ReferenceInput>,
];

export const TaskList = props => (
    <List {...props} filters={taskFilters}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <ReferenceField label="Maintenance Name" source="id" reference="maintenances">
                <TextField source="maintenanceName" />
            </ReferenceField>
            <TextField source="userName" />
            <TextField source="qualification" />
            <TextField source="Description" />
            <TextField source="type" />
            <DateField source="date" />
            <ShowButton label="SHOW" />
        </Datagrid>

    </List>
);

export const TaskCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
            <ReferenceInput source="qualificationId" reference="qualifications">
                <SelectInput optionText="qualification" />
            </ReferenceInput>
            <ReferenceInput source="maintenanceId" reference="maintenances">
                <SelectInput optionText="maintenanceName" />
            </ReferenceInput>
            <DateInput source="date" />
            <TextInput source="description" />
            <TextInput source="periodtype" />
            <TextInput source="period" />
        </SimpleForm>
    </Create>
);

export const TaskShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <ReferenceField source="username" reference="users">
                <TextField optionText="username" />
            </ReferenceField>
            <ReferenceField source="qualificationId" reference="qualifications">
                <TextField optionText="qualification" />
            </ReferenceField>
            <ReferenceField source="maintenanceId" reference="maintenances">
                <TextField optionText="maintenanceName" />
            </ReferenceField>
            <DateField label="date" source="date" />
            <TextField source="description" />
            <TextField source="periodtype" />
            <TextField source="period" />
        </SimpleShowLayout>
    </Show>
);