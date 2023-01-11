class application{
    private name : string;

    constructor(name : string) {
        this.name = name;
    }
}
class Application {
    private name: string;
    static count: number = 0

    constructor(name: string) {
        this.name = name;
        Application.count++;
    }
}
console.log(Application.count);
let app1 = new Application('app1');
console.log(Application.count);
let app2 = new Application('app2');
console.log(Application.count);