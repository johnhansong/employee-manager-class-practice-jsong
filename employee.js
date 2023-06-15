class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
    };

};

const leo = new Employee('Leonardo', 90000, 'Ninja');
console.log(leo)


// module.exports = {                   //export option 1
//     Employee
// }

// module.exports.Employee = Employee;  //export option 2

// exports.Employee = Employee;          //export option 3

module.exports = Employee;           //export option 4 (for single item export ONLY)
