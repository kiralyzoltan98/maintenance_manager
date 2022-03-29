    import { fetchUtils, Admin, Resource } from 'react-admin';
//import simpleRestProvider from 'ra-data-simple-rest';
import { stringify } from 'query-string';
import {useState} from "react";
import {element} from "prop-types";


const apiUrl = `http://localhost:8000`;
const httpClient = fetchUtils.fetchJson;


export default {

    getList: (resource, params) => {

        let url = `${apiUrl}/${resource}`;

        if (resource === "qualifications") {
            url = `${apiUrl}/qualifications`;
        }else if(resource === "devicecategories"){
            url = `${apiUrl}/devicecategories`;
        }

        /**
         *
         * @param response the response from the api in json format
         * @returns @object result a javascript object containing the new response, and the number of rows affected
         */

        function parseID(response){
            let result = {};
            
            console.log("Pesponse: ", response);
            console.log("resource: ", resource);

            let key = resource === "devices" ? "DeviceId" : "UserId";

            if (resource === "qualifications") {
                key = "QualificationId";
            }else if(resource === "devicecategories"){
                key = "DeviceCategoryId";
            }
            
            response.forEach(element => {

                if (element[key]){
                    element["id"] = element[key];
                }
                result["count"] = element["id"];
                delete element[key];
            });
            result["rows"] = response;

            console.log("RESP: ", result, key);
            console.log("KEY: ", key);

            return result;
        }
        
        return httpClient(url).then(({ headers, json }) => ({
            data: parseID(json)["rows"],
            total: parseID(json)["count"],
            //data: json,
            //total: json.total,
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource, params) => {
        console.log("Update many params: ", params);
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },


    updateMany: (resource, params) => {
        console.log("Update many params: ", params);
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: async (resource, params) => {

        let urlParam = resource === "devices" ? "device" : "user";

        if (resource === "qualifications") {
            urlParam = `category`;
        }
        if(resource === "devicecategories"){
            urlParam = `devicecategory`;
        }

        const url = `${apiUrl}/${urlParam}`;
        params = params.data;
        console.log("create params: ", params);
        async function checkCreate() {

            const requestOptions = {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(params)
            };
            const request = await fetch(url, requestOptions);
            //const data = request.json();
            let data;
            return data ? data : "error" ;
        }

        const response = await checkCreate().then();
        console.log(response.loggedInUser);
    },




    delete: (resource, params) => {

        console.log("Delete params: ", params);
        let urlParam = resource === "devices" ? "device" : "user";

        if (resource === "qualifications") {
            urlParam = `category`;
        }
        if(resource === "devicecategories"){
            urlParam = `devicecategory`;
        }

        const url = `${apiUrl}/${urlParam}`;

        httpClient(url, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json }));
    },

    deleteMany: async (resource, params) => {

        console.log("Delete many params: ", params);
        let urlParam = resource === "devices" ? "device" : "user";

        if (resource === "qualifications") {
            urlParam = `category`;
        }
        if (resource === "devicecategories") {
            urlParam = `devicecategory`;
        }

        const url = `${apiUrl}/${urlParam}`;

        async function checkDelete() {

            const requestOptions = {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({userId: params.ids[0]})
            };
            console.log({userId: params.ids[0]});
            const request = await fetch(url, requestOptions);
            //const data = request.json();
            let data;
            return data ? data : "error";
        }

        const response = await checkDelete().then();
        console.log(response.loggedInUser);
    }
};