
app.controller('crudController', function ($scope, crudService) {
   
    $scope.IsNewRecord = 1;

    loadRecords(); 

    function loadRecords() {
        var promiseGet = crudService.getEmployees(); 

        promiseGet.then(function (pl) { $scope.Employees = pl.data },
              function (errorPl) {
                  $log.error('failure loading Employee', errorPl);
              });
    }
    //method for save
    $scope.save = function () {
        var addEmployee = {
            EmpName: $scope.EmpName,
            Salary: $scope.Salary,
            DeptName: $scope.DeptName,
            Designation: $scope.Designation
        };
        var updateEmployee = {
            EmpNo: $scope.EmpNo,
            EmpName: $scope.EmpName,
            Salary: $scope.Salary,
            DeptName: $scope.DeptName,
            Designation: $scope.Designation
        };

        if ($scope.IsNewRecord === 1) {
            var promisePost = crudService.post(addEmployee);
            promisePost.then(function (pl) {
                $scope.EmpNo = pl.data.EmpNo;
                loadRecords();
                $scope.Message = "Added Successfuly";
            }, function (err) {
                $scope.Message = "Added Error !!!";
            });
        } else { 
            var promisePut = crudService.put($scope.EmpNo,updateEmployee);
            promisePut.then(function (pl) {
                loadRecords();
                $scope.Message = "Updated Successfuly";
            }, function (err) {
                $scope.Message = "Update Error !!!";
            });
        }

        
            
    };

    //Method to Delete
    $scope.delete = function () {
        var promiseDelete = crudService.delete($scope.EmpNo);
        promiseDelete.then(function (pl) {
            $scope.Message = "Deleted Successfuly";
            $scope.EmpNo =0;
            $scope.EmpName = "";
            $scope.Salary = 0;
            $scope.DeptName = "";
            $scope.Designation = "";
            loadRecords();
        }, function (err) {
            $scope.Message = "Delete Error !!!";
        });
    }

    //Get
    $scope.get = function (Emp) {
        var promiseGetSingle = crudService.get(Emp.EmpNo);

        promiseGetSingle.then(function (pl) {
            var res = pl.data;
            $scope.EmpNo = res.EmpNo;
            $scope.EmpName = res.EmpName;
            $scope.Salary = res.Salary;
            $scope.DeptName = res.DeptName;
            $scope.Designation = res.Designation;

            $scope.IsNewRecord = 0;
        },
                  function (errorPl) {
                       console.log('failure loading Employee', errorPl);
                  });
    }
    //Clear all
    $scope.clear = function () {
        $scope.IsNewRecord = 1;
        $scope.EmpName = "";
        $scope.Salary = 0;
        $scope.DeptName = "";
        $scope.Designation = "";
    }
});