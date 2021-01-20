import { createConnection, getConnection} from 'typeorm';

const connection = {
    async create() {
        try {
            await createConnection();
        }
        catch {
            throw Error
        }
        
    },
    async close() {
    try {
        await getConnection().close();
    }
    catch {
        throw Error
    }
        
    }
}

export default connection;