// in src/devices.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';
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

export const QualificationList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="Qualification" />
            <TextField source="QualificationDescription" />
        </Datagrid>

    </List>
);

export const QualificationCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="mainCategoryId" reference="qualifications">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="subCategoryId" reference="qualifications">
                <SelectInput optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);