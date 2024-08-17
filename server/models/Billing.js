import { model, Schema } from 'mongoose';

const billingSchema = new Schema(
    {
        reservation: {
            type: Schema.Types.ObjectId,
            ref: 'Reservation',
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        details: {
            type: String,
            required: true, // Breakdown of charges
        },
        issuedDate: {
            type: Date,
            default: Date.now,
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

export default model('Billing', billingSchema);
