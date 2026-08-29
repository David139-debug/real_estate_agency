export interface FormDataType {
    name?: string | null;
    last_name?: string | null;
    phone?: string | null;
    email?: string | null;
    password?: string | null;
    role?: "ADMIN" | "USER" | "GUEST";
}