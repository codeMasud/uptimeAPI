const environments = {};

environments.development = {
    host: '127.0.0.1',
    port: 3000,
    secrect: 'asdf1234',
};
environments.production = {
    host: '127.0.0.1',
    port: 5000,
    secrect: 'asdf2234',
};
environments.build = {
    host: '127.0.0.1',
    port: 9000,
    secrect: 'asdf1112',
};

const name =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : environments.development;

const currentEnv =
    typeof environments[name] === 'object' ? environments[name] : environments.development;

module.exports = currentEnv;
