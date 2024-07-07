export interface LoginDetails {
    email: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    message: string;
}