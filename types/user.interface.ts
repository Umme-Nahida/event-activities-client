

import { UserRole } from "@/lib/auth-utils";
// import { IPatient } from "./patient.interface";

export interface IUserInfo {
    id?: string;
    name: string;
    email: string;
    role: UserRole;
    bio?: string;
    image?: string;
    interests?: string[]
    hobbies?: string[]
    location?: string;
    createdAt?: string;
    updatedAt?: string;
}



