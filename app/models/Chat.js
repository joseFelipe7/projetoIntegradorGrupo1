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
        tableName: 'chats'
    });

    /*
    hasOne	  //tem um
    belongsTo //pertence a um
    hasMany // tem muitos
    */

    //defindo a relaçao com a tabela mensagem, 1:n
    //Chat possuiMuitas mensagens
    Chat.associate = (listaModels)=>{
        Chat.hasMany(listaModels.Mensagem,{
            foreignKey:'id_chats',
            //fk da tabela em que está sendo o relacionamento, o id dessa tabela na outra (fk_chats)
            //procura a fk dentro da model que tenho relação, no caso: na Mensagem
            as:'mensagens',
            //alias, apelido para a fk da relaçao
        });

        //defindo a relaçao com fk do prestador na tabela chat
        //Chat pertenceAum prestador
        Chat.belongsTo(listaModels.Prestador,{
            foreignKey:'prestadores_id',
            //nome da fk dentro da tabela que carrega a relação: Chat
            as:'prestador',
            //alias, apelido para a fk da relaçao
        });

        //defindo a relaçao com fk do cliente na tabela chat
        //Chat pertenceAum cliente
        Chat.belongsTo(listaModels.Cliente,{
            foreignKey:'clientes_id',
            //nome da fk dentro da tabela que carrega a relação: Chat
            as:'cliente',
            //alias, apelido para a fk da relaçao
        });
    }

    return Chat;
};