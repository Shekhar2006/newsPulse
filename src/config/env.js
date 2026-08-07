import "dotenv/config";

const requiredEnvVars = [
    "PORT",
    "NODE_ENV",
    "NEWSDATA_API_KEY",
    "NEWSDATA_BASE_URL",
];

for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        throw new Error(`Missing required environment variable: ${envVar}`);
    }
}

export const env = {
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV,
    newsdataApiKey: process.env.NEWSDATA_API_KEY,
    newsdataBaseUrl: process.env.NEWSDATA_BASE_URL,
};