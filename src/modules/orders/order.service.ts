import { OrderModel } from './order.model';
import { CreateOrderDTO, OrderState } from './order.types';

export class OrderService {
  static async create(data: CreateOrderDTO) {
    
    if (!data.services || data.services.length === 0) {
        throw new Error('At least one service is required to create an order.');
    }

    const totalValue = data.services.reduce((sum, service) => sum + service.value, 0);

    const order = await OrderModel.create(data);
    return order;
  }

  static async findAll(
    page: number,
    limit: number,
    state?: OrderState
  ) {
    const filter: Record<string, unknown> = {
      status: 'ACTIVE'
    };

    if (state) {
      filter.state = state;
    }

    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      OrderModel.find(filter)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 }),
      OrderModel.countDocuments(filter)
    ]);

    return {
      items,
      total,
      page,
      limit
    };
  }
}
