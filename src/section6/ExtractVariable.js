function price(order) {
  /**
   * 価格 = 本体価格 - 数量割引 + 送料
   */
  const basePrice = order.quantity * order.itemPrice
  return basePrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(basePrice * 0.1, 100);
}
