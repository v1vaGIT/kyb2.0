import type {AxiosResponse} from 'axios';
import apiInstance from "../api";
import {AuthResponse} from "../model/interfaces/AuthResponse";

export class AuthService {
    static async login(
        email: string,
        password: string,
    ): Promise<AxiosResponse<AuthResponse>> {
        return apiInstance.post<AuthResponse>(`/login`, {
            email,
            password,
        })
    }

    static async logout(): Promise<unknown>{
        return apiInstance.post(`/logout`)
    }
}