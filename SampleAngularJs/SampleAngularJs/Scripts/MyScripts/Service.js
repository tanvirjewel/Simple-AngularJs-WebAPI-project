
app.service('crudService', function ($http) {

    
    //new
    this.post = function (Employee) {
        var request = $http({
            method: "post",
            url: "/api/EmployeesAPI",
            data:  Employee
        });
        return request;
    }
    //Get one
    this.get = function (EmpNo) {
       return $http.get("/api/EmployeesAPI/" + EmpNo);
    }

    //Get All
    this.getEmployees = function () {
        return $http.get("/api/EmployeesAPI"); 
    }


    //Update
    this.put = function (EmpNo, Employee) {
        var request = $http({
            method: "put",
            url: "/api/EmployeesAPI/" + EmpNo,
            data: Employee
        });
        return request;
    }
    //Delete
    this.delete = function (EmpNo) {
        var request = $http({
            method: "delete",
            url: "/api/EmployeesAPI/" + EmpNo
        });
        return request;
    }

});
