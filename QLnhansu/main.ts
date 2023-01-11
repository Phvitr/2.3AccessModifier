import {EmployeeManager} from "./employManager";
import {Employee} from "./employ"

let employee1 = new Employee('Tran',"Hung1","1/1","ha noi","staff")
let employee2 = new Employee('Tran',"Hung2","2/1","nam dinh","staff")
let employee3 = new Employee('Tran',"Hung3","3/1","nam dinh","manager")
let employee4 = new Employee('Tran',"Hung4","4/1","ha tay","leader")

let manager = new EmployeeManager()
manager.add(employee1)
manager.add(employee2)
manager.add(employee3)
manager.add(employee4)

console.table(manager.display())

manager.Delete('Tran','Hung1')

console.table(manager.display())
