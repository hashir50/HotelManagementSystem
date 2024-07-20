import { model, Schema } from 'mongoose';

const roomRequestSchema = new Schema(
    {
        room: {
            type: Schema.type.ObjectId,
            ref: 'Room',
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        status: {
            type: String,
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

export default model('RoomRequest', roomRequestSchema);