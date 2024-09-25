const dbConfig = {
  user: 'ccq',
  password: 'ccq',
  server: '172.30.0.2', 
  port: 1433,
  database: 'HOSVITAL',
  dialect: "mssql",
  options: {
    encrypt: false,
    trustServerCertificate: true,
    trustedConnection: true,  
  },
};


export default dbConfig;








































// import { Sequelize } from 'sequelize';
// const sequelize = new Sequelize({
//   database: process.env.DB_NAME,
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   dialect: 'mysql',
// });

// interface Part {
//   text: string; 
// }

// export interface ChatEntry {
//   role: "user" | "model";
//   parts: Part[]; 
// }


// const GENERATION_CONFIG = {
//   stopSequences: ["red"],
//   maxOutputTokens: 400,
//   temperature: 0.9,
//   topP: 0.1,
//   topK: 16,

// };




// export { GENERATION_CONFIG};

// export default sequelize;