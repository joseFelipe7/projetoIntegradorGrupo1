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
  },
  fk_clientes:{
    type: DataTypes.INTEGER
}

}, {
timestamps:false,
tableName: 'clientes_endereco'
});



return Clientes_endereco;
};