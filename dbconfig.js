
const server = 'localhost'
const port = '49926'
const database = 'sigh'
const user = 'root'
const password = 'root'
const trusted_connection = 'true'
const trust_server_certificate = 'true'

const config = `
server = ${server},${port};
database = ${database};
user id = ${user};
password = ${password};
Trusted_Connection = ${trusted_connection};
TrustServerCertificate = ${trust_server_certificate};
`;
   
module.exports = config;
