function price(order) {
  /**
   * 価格 = 本体価格 - 数量割引 + 送料
   */
  return order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100);
}
