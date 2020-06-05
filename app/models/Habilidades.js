module.exports = (sequelize, DataTypes) => {
    const Habilidades = sequelize.define("Habilidades", {
id:{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER 
  },
  titulo:{
   type:DataTypes.STRING(190),
   allowNull:false
  },
  inicio_profissao:{
    type:DataTypes.DATE,
    allowNull:false
  },
  descricao:{
    type:DataTypes.STRING(290),
    allowNull:false
  }
}, {
timestamps:false,
tableName: 'habilidades'
});



return Habilidades;
};