/**
 * 微信授权
 * 1.基本授权
 * 2.高级授权
 * @type {AuthProxy|exports|module.exports}
 */
var apis = require('../apis');
var config = require('../config');
var _ = require("underscore")._;
var logger = require('../util/log4jsUtil');

/**
 * 跳转到微信授权地址
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.authWxUser = function (req, res, next) {
    if (!_.isEmpty(req.headers['user-agent']) && req.headers['user-agent'].indexOf("MicroMessenger") != -1) {
        next();
    } else {
        next();
    }
};
