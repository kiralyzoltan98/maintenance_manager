// in src/users.js
import * as React from "react";
import { Show, SimpleShowLayout, DateField, List, Datagrid, TextField, EmailField } from 'react-admin';
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
} from 'react-admin';
import { ShowButton } from 'react-admin';

export const TaskList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="UserName" />
            <TextField source="Qualification" />
            <TextField source="Type" />
            <TextField source="Date" />
            <ShowButton label="SHOW" />
        </Datagrid>

    </List>
);

export const TaskCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="username" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
            <ReferenceInput source="qualificationId" reference="qualifications">
                <SelectInput optionText="qualification" />
            </ReferenceInput>
            <TextField source="Type" />
            <TextField source="Date" />
        </SimpleForm>
    </Create>
);

export const TsakShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="teaser" />
            <TextField source="body" />
            <DateField label="Publication date" source="published_at" />
        </SimpleShowLayout>
    </Show>
);