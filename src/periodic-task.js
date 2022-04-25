import {Create, ReferenceInput, SelectInput, SimpleForm, TextInput} from "react-admin";
import * as React from "react";

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