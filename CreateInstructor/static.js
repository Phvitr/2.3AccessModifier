var instructor = /** @class */ (function () {
    function instructor(_a) {
        var name = _a.name, _b = _a.role, role = _b === void 0 ? 'assistant' : _b;
        this.name = name;
        this.role = role;
    }
    // phương thức phiên bản
    instructor.prototype.renderDetails = function () {
        console.log("".concat(this.name, "-").concat(this.role));
    };
    instructor.helloworld = function () {
        console.log('hi there');
    };
    instructor.canTeach = function (instructor) {
        return instructor.role === 'class room';
    };
    return instructor;
}());
var juniorIntructor = new instructor({ 'name': 'brain' });
var seniorIntructor = new instructor({ 'name': 'Alice', 'role': 'class room' });
juniorIntructor.renderDetails();
seniorIntructor.renderDetails();
instructor.helloworld();
console.log("".concat(juniorIntructor.name, " canteach : ").concat(instructor.canTeach(juniorIntructor)));
console.log("".concat(seniorIntructor.name, " canteach : ").concat(instructor.canTeach(seniorIntructor)));
