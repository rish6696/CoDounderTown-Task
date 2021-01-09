import { Document,Types } from 'mongoose'

interface BlogInterface extends Document {
    title: string;
    body: string;
    userId: Types.ObjectId;
    createdAt:string;
    updatedAt:string;
    tags :[string]
}

export default BlogInterface
