// spread in config as selected and export
// const common = require('./common.json');
switch (process.env.NODE_ENV) {
    // case 'prod':
        // const prodConf =  require('./prod.json');
        // break;

    default:
        const devConf =  require('./dev.json');
        module.exports = {...devConf};
        break;
}