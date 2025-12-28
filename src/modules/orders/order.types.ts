export type OrderState = 'CREATED' | 'ANALYSIS' | 'COMPLETED';
export type OrderStatus = 'ACTIVE' | 'DELETED';
export type ServiceStatus = 'PENDING' | 'DONE';

export interface OrderService {
    name: string;
    value: number;
    status: ServiceStatus;
}

export interface CreateOrderDTO {
    lab: string;
    patient: string;
    customer: string;
    services: OrderService[];
}