﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using SampleAngularJs.Models;
using SampleAngularJs.Manager;

namespace SampleAngularJs.Controllers
{
    public class EmployeesAPIController : ApiController
    {
        private EmployeeManager em = new EmployeeManager();

        // GET: api/EmployeesAPI

        /*******************My code here*********************/

        public List<Employee> GetEmployees()
        {
            return em.GetAll();
        }

        // GET: api/EmployeesAPI/5
        [ResponseType(typeof(Employee))]
  
        /******************My Code *********************/

        public Employee GetEmployee(int id)
        {
            return em.GetEmp(id);

        }
        // PUT: api/EmployeesAPI/5
        [ResponseType(typeof(void))]

        /******************My Code *********************/
        public bool PutEmployee(int id, Employee employee)
        {
            try
            {
                em.Update(id,employee);
                return true;
            }
            catch { return false; }
        }

        // POST: api/EmployeesAPI
        [ResponseType(typeof(Employee))]
       
        /************************My Code*************/
        public IHttpActionResult PostEmployee(Employee employee)
        {
            em.Save(employee);
            return CreatedAtRoute("DefaultApi", new { id = employee.EmpNo }, employee);
        }

        // DELETE: api/EmployeesAPI/5

        /*************************My Code *************************/
        public bool DeleteEmployee(int id)
        {
            try
            {
                em.Delete(id);
                return true;
            }
            catch { return false; }

        }

    }
}