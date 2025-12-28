import { Schema, model, Document } from "mongoose";
import { OrderState, OrderStatus, ServiceStatus } from "./order.types";

export interface OrderDocument extends Document {
    lab: string;
    patient: string;
    customer: string;
    services: {
        name: string;
        value: number;
        status: ServiceStatus;
    }[];
    state: OrderState;
    status: OrderStatus;
}

const ServiceSchema = new Schema(
    {
        name: { type: String, required: true },
        value: { type: Number, required: true },
        status: { type: String, enum: ['PENDING', 'DONE'], required: true }
    },
    { _id: false }
);

const OrderSchema = new Schema<OrderDocument>(
  {
    lab: { type: String, required: true },
    patient: { type: String, required: true },
    customer: { type: String, required: true },

    state: {
      type: String,
      enum: ['CREATED', 'ANALYSIS', 'COMPLETED'],
      default: 'CREATED'
    },

    status: {
      type: String,
      enum: ['ACTIVE', 'DELETED'],
      default: 'ACTIVE'
    },

    services: {
      type: [ServiceSchema],
      required: true
    }
  },
  { timestamps: true }
);

export const OrderModel = model<OrderDocument>("Order", OrderSchema);