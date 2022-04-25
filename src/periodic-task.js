import {Create, Datagrid, List, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput} from "react-admin";
import * as React from "react";

export const PeriodicList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="qualification" />
            <TextField source="type" />
        </Datagrid>
    </List>
);

export const PeriodicCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="categoryId" reference="devicecategories">
                <SelectInput optionText="deviceCategoryName" />
            </ReferenceInput>
            <TextInput source="deviceName" />
            <TextInput source="location" />
        </SimpleForm>
    </Create>
);