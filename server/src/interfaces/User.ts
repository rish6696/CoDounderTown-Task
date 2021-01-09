import { Document } from 'mongoose'
interface UserInterface extends Document {
    name: string;
    email: string;
    password : string;
    createdAt:string;
    updatedAt:string;
}

export default UserInterface
