import { OrderState } from "./order.types";

const STATE_FLOW: Record<OrderState, OrderState | null> = {
    CREATED: 'ANALYSIS',
    ANALYSIS: 'COMPLETED',
    COMPLETED: null
};

export function getNextState(currentState: OrderState): OrderState {
    if (!STATE_FLOW[currentState]) {
        throw new Error(`No next state available for state: ${currentState}`);
    }
    return STATE_FLOW[currentState] as OrderState;
}