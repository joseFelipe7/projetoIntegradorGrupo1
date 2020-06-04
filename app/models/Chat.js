module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define("Chat", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        clientes_id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, //pode ser nulo? não
        },
        prestadores_id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, //pode ser nulo? não
        },
        datainicio: DataTypes.DATE,
    }, {
        timestamps:false,//terá create_at e update_at criada automaticamente? Não
        tableName: 'token_cliente'
    });

    /*
    hasOne	  //tem um
    belongsTo //pertence a um
    hasMany // tem muitos
    */

    //defindo a relaçao com a tabela mensagens, 1:n
    Chat.associate = (listaModels)=>{
        Chat.hasMany(listaModels.Mensagens,{
            forenKey:'id_chats',
            //fk da tabela em que está sendo o relacionamento, o id dessa tabela na outra (fk_chats)
            //procura a fk dentro da model que tenho relação, no caso: na Mensagens
            as:'mensagens',
            //alias, apelido para a fk da relaçao
        })
    }
    return Chat;
};