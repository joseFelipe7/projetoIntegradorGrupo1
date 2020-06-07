module.exports = (sequelize, DataTypes) => {
    const Chamados = sequelize.define("Chamados", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        assunto: {
            type: DataTypes.STRING(190),
            allowNull: false //pode ser nulo? Não
        },
        nome: {
            type: DataTypes.STRING(190),
            allowNull: false //pode ser nulo? Não
        },
        email: {
            type: DataTypes.STRING(190),
            allowNull: false //pode ser nulo? Não
        },
        celular: {
            type: DataTypes.STRING(11),
            allowNull: false //pode ser nulo? Não
        },
        telefone: {
            type: DataTypes.STRING(10),
            allowNull: true //pode ser nulo? Sim
        },
        mensagem: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        tipo_remetente: {
            type: DataTypes.CHAR(1),
            allowNull: false //pode ser nulo? Não
        },
        data_chamado: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.CHAR(2),
            allowNull: true //pode ser nulo? Sim
        }, 
    }, {
        timestamps: false,
        tableName: 'chamados',
    });

    return Chamados;
};