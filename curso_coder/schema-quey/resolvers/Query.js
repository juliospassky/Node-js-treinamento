const { usuarios, perfis } = require("../data/db");

module.exports = {
  ola() {
    return "Nova consulta";
  },
  horaAtual() {
    return new Date();
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Julio Oliveira",
      email: "jo@gmail.com",
      idade: 23,
      salari_real: 11111.11,
      vip: true,
    };
  },
  productPurchased() {
    return {
      name: "Relógio",
      price: 100.0,
      discount: 0.05,
      discountTotal: null,
    };
  },
  numerosMegaSena() {
    return Array(6)
      .fill(0)
      .map((n) => parseInt(Math.random() * 60 + 1))
      .sort((a, b) => a - b);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    const sel = usuarios.filter((o) => o.id === id);
    return sel ? sel[0] : null;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const sel = perfis.filter((o) => o.id === id);
    return sel ? sel[0] : null;
  },
};
