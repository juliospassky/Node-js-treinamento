module.exports = {
  discountTotal(produto) {
    if (produto.discount !== null) {
      return produto.price * produto.discount;
    }
    return null;
  },
};
