import { MongoClient, ServerApiVersion } from 'mongodb';

let cachedClient = null; // Prevents re-connecting on every call

export const collectionName = {
    serviceCollection: 'service',
}

export default async function dbConnect(collectionName) {
    if (!process.env.DBURI) {
        throw new Error("Please define the DBURI environment variable inside .env.local");
    }

    if (!cachedClient) {
        const client = new MongoClient(process.env.DBURI, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });

        await client.connect();
        cachedClient = client;
    }

    return cachedClient.db('CarDoctor').collection(collectionName);
}
