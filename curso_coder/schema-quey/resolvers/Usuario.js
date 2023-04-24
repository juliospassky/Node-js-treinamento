const { perfis } = require("../data/db");

module.exports = {
  salario(usuario) {
    return usuario.salari_real;
  },
  perfil(usuario) {
    const sel = perfis.filter((o) => o.id === usuario.perfil_id);
    return sel ? sel[0] : null;
  },
};
