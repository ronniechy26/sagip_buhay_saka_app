import axios, { AxiosRequestConfig } from 'axios';
import * as yup from 'yup';

export const httpClient = () => () => {
    const base = process.env.API_ENDPOINT;

    const r = axios.create({
        headers: {
            'Content-Type': 'application/json',
        },
        transformRequest: [
            (data, headers) => {
                if (axios.defaults.headers.common.Authorization) {
                    headers['Authorization'] =
                        axios.defaults.headers.common.Authorization;
                }

                if (data instanceof FormData) {
                    return data;
                }

                return JSON.stringify(data);
            },
        ],
        baseURL: base,
        withCredentials: false, // false if local
    });

    return {
        post: async <D, S extends yup.MixedSchema>(
            url: string,
            data: D,
            schema: S,
            config?: AxiosRequestConfig
        ): Promise< yup.InferType<S> > => {
            const response = await r.post(url, data, config);
            return schema.validate(response.data, {
                stripUnknown: true,
            });
        },

        get: async <D, S extends yup.MixedSchema>(
            url: string,
            data: D,
            schema: S
        ): Promise<yup.InferType<S>> => {
            const response = await r.get(url, { params: data });
            return schema.validate(response.data, {
                // recursive: false,
                stripUnknown: true,
            });
        },

        put: async <D, S extends yup.MixedSchema>(
            url: string,
            data: D,
            schema: S,
            config?: AxiosRequestConfig
        ): Promise<yup.InferType<S>> => {
            const response = await r.put(url, data, config);
            return schema.validate(response.data, {
                stripUnknown: true,
            });
        },

        delete: async <D, S extends yup.MixedSchema>(
            url: string,
            data: D,
            schema: S
        ): Promise<yup.InferType<S>> => {
            const response = await r.delete(url, data);
            return schema.validate(response.data, {
                stripUnknown: true,
            });
        },
    };
};

export default httpClient();
