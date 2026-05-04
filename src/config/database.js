import dotenv from 'dotenv'
import {Sequelize} from 'sequelize'

dotenv.config()

// Create a new Sequelize instance

const sequelize = new Sequelize(
    process.env.DB_NAME || 'test',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'mysql',
        port: process.env.DB_PORT || 3306,
        logging: process.env.NODE_ENV === 'development' ? console.log : false,
        define: {
            timestamps: false,
            createdAt: false,
        }
    }
)

// DB connection
const dbConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully')
    } catch(e) {
        console.error('Unable to connect to the database', e)
    }
}

export {sequelize, dbConnection}