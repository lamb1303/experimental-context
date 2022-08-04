export interface IUser {
    user_permissions: [];
    first_name: string;
    last_name: string;
    email: string;
    cc_id: string;
    role: string;
    status: string;
    created_by?: string;
    created_at: Date;
    updated_by?: string;
    updated_at: Date;
}