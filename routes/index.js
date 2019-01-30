'use strict';

const cors = require('cors');

module.exports = function (app, passport) {
    app.use(cors());
    app.options('*', cors());
    app.use('/api/v1/', require('./api')(passport));
};
