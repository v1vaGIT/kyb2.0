import {IViewer} from "./IViewer";

export interface AuthResponse {
    token: string;
    viewer: IViewer;
    expiresAt: string;
}