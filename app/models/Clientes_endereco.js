//cliente_endereco pertence a um cliente

module.exports = (sequelize, DataTypes) => {
    const Clientes_endereco = sequelize.define("Clientes_endereco", {
id:{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER 
  },
  logradouro:{
   type:DataTypes.STRING(190),
   allowNull:false
  },
  uf:{
    type:DataTypes.CHAR(2),
    allowNull:false
  },
  cidade:{
    type:DataTypes.STRING(90),
    allowNull:false
  },
  bairro:{
    type:DataTypes.STRING(90)
  },
  cep:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  numero:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  complemento:{
    type:DataTypes.STRING(90)
  },
  tipo_endereco:{
    type:DataTypes.CHAR(1)
  }

}, {
timestamps:false,
tableName: 'clientes_endereco'
});

Clientes_endereco.associate = (listaDeModelos) => {
  Clientes_endereco.belongsTo(listaDeModelos.Cliente, {
    foreignKey: 'fk_clientes',
    as: 'cliente'
  })
}


return Clientes_endereco;
};