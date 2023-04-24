const { AppoloServer, gql, ApolloServer } = require("apollo-server");

const usuarios = [
  {
    id: 1,
    nome: "Julio Oliveira",
    email: "jo@gmail.com",
    idade: 23,
    salari_real: 11111.11,
    vip: true,
    perfil_id: 1,
  },
  {
    id: 2,
    nome: "Bruce Wayne",
    email: "bw@gmail.com",
    idade: 23,
    salari_real: 11111.11,
    vip: true,
    perfil_id: 2,
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

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: Int
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
    perfil: Perfil
  }

  type Product {
    name: String!
    price: Float!
    discount: Float
    discountTotal: Float
  }

  type Perfil {
    id: Int
    nome: String!
  }

  type Query {
    ola: String
    horaAtual: Date
    usuarioLogado: Usuario
    productPurchased: Product
    numerosMegaSena: [Int!]!
    usuarios: [Usuario]
    usuario(id: Int): Usuario
    perfis: [Perfil]
    perfil(id: Int): Perfil
  }
`;

const resolvers = {
  Usuario: {
    salario(usuario) {
      return usuario.salari_real;
    },
    perfil(usuario) {
      const sel = perfis.filter((o) => o.id === usuario.perfil_id);
      return sel ? sel[0] : null;
    },
  },

  Product: {
    discountTotal(product) {
      if (product.discount !== null) {
        return product.price * product.discount;
      }
      return null;
    },
  },

  Query: {
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
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
