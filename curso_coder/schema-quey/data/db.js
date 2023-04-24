const usuarios = [
  {
    id: 1,
    nome: "Julio Oliveira",
    email: "jo@gmail.com",
    idade: 23,
    salari_real: 11111.11,
    vip: true,
    perfil_id: 1,
    status: "ATIVO",
  },
  {
    id: 2,
    nome: "Bruce Wayne",
    email: "bw@gmail.com",
    idade: 23,
    salari_real: 11111.11,
    vip: true,
    perfil_id: 2,
    status: "INATIVO",
  },
];

const perfis = [
  {
    id: 1,
    nome: "Comum",
  },
  {
    id: 2,
    nome: "Administrador",
  },
];

module.exports = { usuarios, perfis };
