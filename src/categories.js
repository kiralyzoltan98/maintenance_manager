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

//ab mezo szerint
export const CategoryList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="deviceCategoryName" />
            <TextField source="description" />
            <TextField source="dualificationId" />
            <TextField source="intervall" />
            <TextField source="time" />
        </Datagrid>

    </List>
);
//
export const CategoryCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="deviceCategoryName" />
            <TextInput source="description" />
            <TextInput source="intervall" />
            <TextInput source="normtime" />
        </SimpleForm>
    </Create>
);