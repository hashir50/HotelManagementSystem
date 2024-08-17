import { model, Schema } from 'mongoose';

const reservationSchema = new Schema(
    {
        guest: {
            type: Schema.Types.ObjectId,
            ref: 'User', // Assuming User model for guests
            required: true,
        },
        room: {
            type: Schema.Types.ObjectId,
            ref: 'Room',
            required: true,
        },
        checkInDate: {
            type: Date,
            required: true,
        },
        checkOutDate: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ['confirmed', 'checked-in', 'checked-out', 'cancelled'],
            default: 'confirmed',
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
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

export default model('Reservation', reservationSchema);
