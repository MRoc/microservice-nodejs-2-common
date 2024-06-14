export enum OrderStatus {
  // When the order has been created, but the
  // ticker has not been reserved yet.
  Created = "created",

  // Ticket already was reserved of the user or
  // canceledby user or the order expired.
  Cancelled = "cancelled",

  // The order has successfully reserved the ticket.
  AwaitingPayment = "awaiting:payment",

  // The order has completed after payment.
  Complete = "complete",
}
