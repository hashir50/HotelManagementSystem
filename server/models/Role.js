import { schema, model } from 'mongoose';

const roleSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean
        },
        createdAt: {
            type: Date,
        },
        updatedAt: {
            type: Date,
        }
    }
);

export default model('Role', roleSchema);