"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (value) {
        this.name = value;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setEmail = function (value) {
        this.email = value;
    };
    User.prototype.getRole = function () {
        return this.role;
    };
    User.prototype.setRole = function (value) {
        this.role = value;
    };
    User.prototype.getInfo = function () {
        return {
            "UserName": this.name,
            "UserEmail": this.email,
            "role": this.isAdmin()
        };
    };
    User.prototype.isAdmin = function () {
        if (this.role === 0) {
            return "admin";
        }
        else if (this.role === 1) {
            return "user";
        }
        else if (this.role === 2) {
            return "public";
        }
        else {
            return "role is not defined";
        }
    };
    return User;
}());
exports.User = User;
var int;
(function (int) {
    int[int["admin"] = 0] = "admin";
    int[int["user"] = 1] = "user";
    int[int["public"] = 2] = "public";
})(int || (int = {}));
var user1 = new User("hung", "hug@gamil.com", 0);
var user2 = new User("quyet", "quyet@gamil.com", 1);
var user3 = new User("hoang", "hoang@gamil.com", 2);
console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(user3.getInfo());
