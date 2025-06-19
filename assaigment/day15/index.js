// adds at the beginning(unshift) and end (push)

const arr2 = [2,3,4,5,6];
console.log(arr2.push(1).unshift(7));

//destructuring
let arr = ["pizza1","pizza2","pizza3","pizza4","pizza5","pizza6","pizza7","pizza8","pizza9","pizza10"];

var fav;
fav = arr[6]
//"pizza7" 

//Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

let [pizza11,pizz12,pizza13, ...rest] = ["pizza1","pizza2","pizza3","pizza4","pizza5","pizza6","pizza7","pizza8","pizza9","pizza10"];

//**T-009**: Clone an Array(Shallow cloning)
let arr9 = [1,2,3,4,5,6];
arrcopy = arr.slice()


//**T-010**: Empty an array using its length property
arrcopy.length = 0;

//**T-011**: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.
let arr10 = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i < arr10.length;i++)
{
    if(arr10[i] == 5)
    {
        arr10.length = 6
        break;
    }
}

//**T-012**: Create an Array of 10 elements. Use the `splice()` method to empty the array.
let arr102 = [1,2,3,4,5,6,7,8,9]
arr.splice(0,arr.length)

// **T-013**: Create an Array of 10 elements.
//  You can empty the array in multiple ways: using the `length` property, using the `pop()` method, using the `shift()` method, setting the array with `[]`, or the `splice()` method. 
// Which among these methods are most efficient and why?

let arr8= [1,2,3,4,5,6,7,8,9];
// - arr.length = 0;

for(let i = arr.length; i > 0 ;i--)
    {
        arr.pop()
    }

    for(let i = 0; i < arr.length ;i++)
    {
        arr.shift()
    }

    // -arr = [];
   //- arr.splice(0,arr.length)
    


   //----------------------------//
   const employees = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
    { id: 7, name: "George", departmentId: 3, salary: 5200 },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
    { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
  ];

  
  const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
  ];

  //**T-021**: Can you filter employees who work in the "Engineering" department?
  let Depid = employees.filter((employee) => {
    return employee.departmentId == 2;
  })


  //**T-022**: Create a new array that combines employee names and department names in the format: "Alice (HR)".
  let mapping = employees.map((employee) => {
    let depname = departments.find((departments) =>{
        if(employee.departmentId == departments.id)
        {
            return true;
        }
    })
    return `${employee.name} (${depname.name})`;
})
console.log(mapping)


//**T-023**: Find the highest salary among employees.
let highestsalary = employees.reduce((max, employee) => {
    return employee.salary > max ? employee.salary : max
}, 0)

//**T-024**: Check if there is at least one employee in the "Sales" department.
let finding = employees.some(emp => emp.departmentId == 4);


//**T-025**: Write a function to filter employees earning more than 6000.

//-----------//let mapemp = employees.map((employee) =>{
  //  return employee.salary > 6000 ? employee.salary : 1
//})           //  غلط طبعا كدة هيرجع اراي سلاريز مش اوبجيكت 


let filteremp = employees.filter((emp => emp.salary > 6000));


//**T-026**: Create an array of employee names only.
let mapper = employees.map((emp) => {
    return emp.name;
})

//**T-027**: Calculate the total salary of all employees using
let reducer = employees.reduce((max, emp) =>{
    return max + emp.salary;
},0)

//  **T-028**: Is there any employee earning less than 5000?
let someemp = employees.some((emp) => emp.salary < 5000)
//**T-029**: Find the first employee who earns exactly 5100.
let findersal = employees.find((emp) => emp.salary == 5100)
//**T-030**: Find the last employee in the "HR" department.
let finderdep = employees.reverse().find((emp) => emp.departmentId == 1)
//**T-031**: Find the first employee in the "Marketing" department.
let finderdepmarket = employees.find((emp) => emp.departmentId == 3)
//**T-032**: Check if all employees earn more than 4000.
let earn = employees.every((emp) => emp.salary > 4000)
//**T-033**: Find the first employee in the "Sales" and "HR" department.
let finderdephrSales = employees.find((emp) => emp.departmentId == 1 || emp.departmentId == 4);
//**T-034**: Verify if all employees belong to a department listed in the departments array.
let ids = departments.map((id) => id.id)
let verify = employees.every((emp) => ids.includes(emp.departmentId))
//**T-035**: Log each employee's name and department name to the console.
for(let emp of employees)
{
    let dep = departments.find(dept => dept.id === emp.departmentId)
    console.log(`${emp.name} ${dep ? dep.name : "Unknown"}`)
}
//*T-036**: Extract all employee names into a single array.
let employeeNames = employees.map(emp => emp.name);
//**T-037**: Increment each employee's salary by 10%
employees.forEach(emp => {
  emp.salary *= 1.10;
});
//**T-038**: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
let flatSkills = employees.flatMap(emp => emp.skills);
//**T-039**: Find the total salary of all employees working in the "Engineering" department.
let filterz = employees
.filter(emp => emp.departmentId == 2)
.reduce((total, emp) => {
    return total + emp.salary;
}, 0)
//**T-040**: Check if there is any department where all employees earn more than 5000.
let dept = employees.map((emp))
//**T-041**: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
//Find the total number of unique projects being handled across all employees.
const allProjects = employees.flatMap(emp => emp.projects);
const uniqueProjects = new Set(allProjects);
const totalUniqueProjects = uniqueProjects.size;
console.log(`${totalUniqueProjects}`)
//**T-042**: For each employee, find their department name and return an array of employee names with their department names.
//**T-043**: Get a list of names of employees earning more than 6000.

//**T-044**: Write a for-of loop to print the names of all employees from the employees array.
for(emp of employees)
{
    let namess = employees.map((emp) => emp.name)
    console.log(namess)
}
// **T-045**: Using a for-of loop, print the names of employees earning more than 5000.
// **T-046**: Moify the for-of loop to destructure each employee object and log their name and salary.
// **T-047**: Write a for-of loop to match employees with their departments and print the results.
// **T-048**: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

// **T-049**: Given the array-like object below, access the second element and log it:
