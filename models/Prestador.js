module.exports = (sequelize, DataTypes) => {
    const Prestador = sequelize.define("Prestador", {
        email: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        email2: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        password2: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        sobrenome: DataTypes.STRING,
        sexo: DataTypes.STRING, 
        data_nascimento: DataTypes.DATE,
        rg:  DataTypes.STRING, 
        emissor:  DataTypes.STRING, 
        data_emissao:  DataTypes.DATE, 
        telefone:  DataTypes.STRING, 
        celular: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        email3: DataTypes.STRING,
        endereco: DataTypes.STRING,
        numero: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        cep:  {
            type: DataTypes.STRING, 
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        cnpj:  {
            type: DataTypes.STRING, 
            allowNull: false
        },
        nome_fantasia: DataTypes.STRING,
        endereco2: DataTypes.STRING,
        numero2: DataTypes.STRING,
        bairro2: DataTypes.STRING,
        cidade2: DataTypes.STRING,
        estado2: DataTypes.STRING,
        cep2: DataTypes.STRING,
        telefone2: DataTypes.STRING,
        celular2: DataTypes.STRING, 
           
        email4: DataTypes.STRING   
    }, {
        tableName: 'prestador',
        timestamps: false
    });
    return Prestador;
};