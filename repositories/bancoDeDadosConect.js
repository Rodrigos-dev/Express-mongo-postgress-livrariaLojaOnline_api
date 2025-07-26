import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    "url conection - postgres://...",   
    {
        dialect: "postgres",								      
        define: {									       
            timestamps: false
        }
    }
)

export default sequelize
