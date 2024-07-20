import { model, Schema } from 'mongoose';

const roomSchema = new Schema(
    {
        number: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        type: {
            type: Schema.Types.ObjectId,
            ref: 'RoomType',
            required: true,
        },
        price: {
            type: Number,
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

export default model('Room', roomSchema);