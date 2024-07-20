import { model, Schema } from 'mongoose';

const notificationSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        role: {
            type: Schema.Types.ObjectId,
            ref: 'Role',
            required: true,
        },
        isActive: {
            type: Boolean
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        createdAt: {
            type: Date,
            required: true
        },
        updatedAt: {
            type: Date,
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

export default model('Notification', notificationSchema);