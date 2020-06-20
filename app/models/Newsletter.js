module.exports = (sequelize, DataTypes) =>{
    const Newsletter = sequelize.define("Newsletter",{
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER
        },
        nome:DataTypes.STRING,
        email:DataTypes.STRING,
        data_cadastro:DataTypes.DATE,
    },{
        timestamps: false,
        tableName:'newsletter'
    })
}
return Newletter