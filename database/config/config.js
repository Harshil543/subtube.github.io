export default {
	development: {
		username: process.env.NEXT_PUBLIC_DB_USERNAME,
		password: process.env.NEXT_PUBLIC_DB_PASSWORD,
		database: process.env.NEXT_PUBLIC_DB_NAME_DEVELOPMENT,
		host: process.env.NEXT_PUBLIC_DB_HOSTNAME,
		port: process.env.NEXT_PUBLIC_DB_PORT,
		dialect: "mysql",
	},
	production: {
		username: process.env.NEXT_PUBLIC_DB_USERNAME,
		password: process.env.NEXT_PUBLIC_DB_PASSWORD_PROD,
		database: process.env.NEXT_PUBLIC_DB_NAME_PRODUCTION,
		host: process.env.NEXT_PUBLIC_DB_HOSTNAME,
		port: process.env.NEXT_PUBLIC_DB_PORT_PROD,
		logging: false,
		dialect: "mysql",
	},
};
