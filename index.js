const employee = {name:"Will",streetAddress:"Baringo"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee, [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    newEmployee[key];
    delete newEmployee[key];
    
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    employee[key];
    delete employee[key];

    return employee;
};