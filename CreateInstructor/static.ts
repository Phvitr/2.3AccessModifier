class instructor {
    public name: string;
    public role: string;

    constructor({name, role = 'assistant'}) {
        this.name = name;
        this.role = role;

    }

    // phương thức phiên bản
    renderDetails() {
        console.log(`${this.name}-${this.role}`)
    }

    static helloworld() {
        console.log('hi there')
    }

    static canTeach(instructor) {
       return instructor.role === 'class room'
    }

}

let juniorIntructor = new instructor({'name': 'brain'});
let seniorIntructor = new instructor({'name': 'Alice', 'role': 'class room'});

juniorIntructor.renderDetails();
seniorIntructor.renderDetails();

instructor.helloworld();

console.log(`${juniorIntructor.name} canteach : ${instructor.canTeach(juniorIntructor)}`);

console.log(`${seniorIntructor.name} canteach : ${instructor.canTeach(seniorIntructor)}`);