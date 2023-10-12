import { BaseModel } from "@models/index";

export default interface UserModal extends BaseModel {
    id: number;
    username: string;
    hashedPassword: string;
    name: string;
    surname: string;
}