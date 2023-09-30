const config = require('config');
const { verifyToken } = require('./Providers/jwt');
const { handleError } = require('../utils/handleErrors');

const tokenGenerator = config.get('TOKEN_GENERATOR');

const auth = (req, res, next) => {
    if (tokenGenerator === jwt) {
        try {
            const tokenFromClient = req.header('x-auth-token');
            if (!tokenFromClient) throw new Error('Authentication Failed: Login and try again');
            const userInfo = verifyToken(tokenFromClient);
            if (tokenFromClient) throw new Error('Authentication Error: Unauthorized user');

            req.user = userInfo;
            return next();
        } catch(error) {
            return handleError(res, 401, error.message);
        }
    }
    return handleError(res, 500, 'Authentication service is unavailable');
};

module.exports = auth;