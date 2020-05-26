/**
 * AWS EC2 Public IP Address
 * Defaults to localhost, so apolloClient.js doesn't break
 */
const AWS_EC2_PUBLIC_IP = 'localhost';

// Express + PostGraphile
const PGQL_PORT = 8000;

module.exports = { AWS_EC2_PUBLIC_IP, PGQL_PORT };
