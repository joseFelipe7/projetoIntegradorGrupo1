module.exports = (sequelize, DataTypes) => {
    const HistoricoPedidos = sequelize.define("HistoricoPedidos", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        pedidos_id: {
            type: DataTypes.INTEGER,
            allowNull: false //pode ser falso? Não
        },
        status_: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
        data_modificacao: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false, //terá create_at e update_at criada automaticamente? Não
        tableName: 'historico_pedidos'
    });
    /**
    ENV    : Enviado    (cliente enviou o pedido)
    ANALI  : Analise    (Prestador aceitou e esta analisando a proposta)
    CANC   : Cancelado  (Tanto Cliente Quanto prestador podem ter cancelado)
    AGUAR  : Aguardando (Prestador Aguardando o cliente aceitar o orçamento proposto)
    CONC   : Concluido  (Serviço foi concluido)
     */

    /*
    hasOne	  //tem um
    belongsTo //pertence a um
    hasMany // tem muitos
    */

    //defindo a relaçao com a tabela pedidos, 1:n
    //HistoricoPedidos pertenceAum pedido
    HistoricoPedidos.associate = (listaModels) => {
        //defindo a relaçao com fk do historico na tabela pedidos
        //HistoricoPedidos pertenceAum pedido
        HistoricoPedidos.belongsTo(listaModels.Pedido, {
            foreignKey: 'pedidos_id',
            //nome da fk dentro da tabela que carrega a relação: HistoricoPedidos
            as: 'pedido',
            //alias, apelido para a fk da relaçao
        });
    }

    return HistoricoPedidos;
};