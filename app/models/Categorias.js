module.exports = (sequelize, DataTypes) => {
  const Categorias = sequelize.define("Categorias", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoria: { 
      type: DataTypes.STRING(45), 
      allowNull: false, //pode ser nulo? não
      unique: true,
    },
    descricao: { 
      type: DataTypes.STRING(45), 
      allowNull: false, //pode ser nulo? não
      unique: true,
    } 
  }, {
      timestamps: false
  });

  Categorias.associate = (listaModels) => {
    Categorias.hasOne(listaModels.Prestador, {
      foreignKey: 'categoria_id'
    })
  };

  return Categorias;
};