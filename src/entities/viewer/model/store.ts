import {makeAutoObservable} from "mobx";
import {IViewer} from "./interfaces/IViewer";
import {AuthService} from "../services/AuthService";
import {AuthResponse} from "./interfaces/AuthResponse";
import axios from "axios";
import {API_URL} from "../api";

export default class ViewerStore {

    viewer = {} as IViewer;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setViewer(viewer: IViewer) {
        this.viewer = viewer
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem("token", response.data.token);
            this.setAuth(true);
            this.setViewer(response.data.viewer);
        } catch (e: unknown) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem("token");
            this.setAuth(false);
            this.setViewer({} as IViewer);
        } catch (e: unknown) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.post<AuthResponse>(
                `${API_URL}/auth/refresh-tokens`,
                {},
                {
                    withCredentials: true,
                },
            );
            localStorage.setItem("token", response.data.token);
            this.setAuth(true);
            this.setViewer(response.data.viewer);
        } catch (e: unknown) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}