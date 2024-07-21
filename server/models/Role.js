import { Schema, model } from 'mongoose';

const roleSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            default:true,
        }
    },
    {
        timestamps: true // This will automatically add createdAt and updatedAt fields
    }
);

export default model('Role', roleSchema);