'use strict';

const router = require('express').Router();
// const ctrl = require('controllers/users');
// const { uploadToS3 } = require('library/upload');

module.exports = function() {
    // let auth = passport.authenticate(['bearer'], { session: false });

    router.get('', () => {
        console.log('it works');
    });
    return router;
};
