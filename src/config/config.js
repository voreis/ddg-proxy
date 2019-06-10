const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
        return {
            port: '3001',
            duckDuckGoApi: 'http://api.duckduckgo.com',
            fileName: "ddg-file.txt",
            saveHistory: true
        }

        case 'hml':
        return {    
            port: '3001',
            duckDuckGoApi: 'http://api.duckduckgo.com',
            fileName: "ddg-file.txt",
            saveHistory: true
        }

        case 'prod':
        return {
            port: '3001',
            duckDuckGoApi: 'http://api.duckduckgo.com',
            fileName: "ddg-file.txt",
            saveHistory: true
        }
    }
}

module.exports = config();