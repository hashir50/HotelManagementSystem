import { model, Schema } from 'mongoose';

const roomTypeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
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
        updatedBy: { type: Schema.Types.ObjectId, ref: 'User' }, // Define updatedBy if you need it
        updatedAt: { type: Date }
    }
);

export default model('RoomType', roomTypeSchema);