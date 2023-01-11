import {Employee} from './employ';
export class EmployeeManager {
    employees: Employee[] = []

    display() {  // trả về
        return this.employees
    }

    add(employee: Employee): void {
        this.employees.push(employee)
    }

    Delete(firstName: string, lastName: string,): void {
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].getFirstName() == firstName && this.employees[i].getLastName() == lastName
            ) {
                this.employees.splice(i, 1)
            }
        }
    }
}