// module.exports = {
//   development: {
//     client: 'sqlite3',
//     // connection: {
//     //   filename: './database/resources.db3',
//     // },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './database/migrations',
//     },
//     seeds: {
//       directory: './database/seeds',
//     },
//     dev: {
//       client: 'sqlite3',
//     connection: {
//       filename: './database/resources.db3',
//     },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './database/migrations',
//     },
//     seeds: {
//       directory: './database/seeds',
//     },
//     }
//   },
//   test: {
//     client: 'sqlite3',
//     connection: {
//       filename: './database/test.db3',
//     },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './database/migrations',
//     },
//     seeds: {
//       directory: './database/seeds',
//     },
//   },
// };

const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./database/migrations",
  },
  seeds: {
    directory: "./database/seeds",
  },
}
module.exports = {
  dev: {
    ...sqlite,
    connection: {
      filename: "./database/dev.db3",
    },
  },
  test: {
    ...sqlite,
    connection: {
      filename: "./database/test.db3",
    },
  },
}