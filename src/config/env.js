import "dotenv/config";

const requiredEnvVars = [
    "PORT",
    "NODE_ENV",
    "GNEWS_API_KEY",
    "GNEWS_BASE_URL",
];

for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        throw new Error(`Missing required environment variable: ${envVar}`);
    }
}

export const env = {
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV,
    gnewsApiKey: process.env.GNEWS_API_KEY,
    gnewsBaseUrl: process.env.GNEWS_BASE_URL,
};