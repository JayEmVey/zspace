var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

// set up a mongoose model
var UserSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

/**
 * [User model save action]
 * @param  {[type]} next) {               var user [description]
 * @return {[type]}       [description]
 */
UserSchema.pre('save', function(next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        /**
         * [Asynchronous bcrypt generate salt with rounds is set to 10]
         * @param  {[type]} err   [description]
         * @param  {[type]} salt) {                       if (err) {                return next(err);            }            bcrypt.hash(user.password, salt, function(err, hash) {                if (err) {                    return next(err);                }                user.password [description]
         * @return {[type]}       [description]
         */
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

/**
 * [User model compare password]
 * @param  {[type]}   passw [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
UserSchema.methods.comparePassword = function(passw, cb) {
    /**
     * [Asynchronous bcrypt compare data]
     * @param  {[type]}  err      [description]
     * @param  {Boolean} isMatch) {                   if (err) {            return cb(err);        }        cb(null, isMatch);    } [description]
     * @return {[type]}           [description]
     */
    bcrypt.compare(passw, this.password, function(err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
