import { User } from './user';

export interface Teacher extends User {
    fullName: string
    dob: Date;
}