using SampleAngularJs.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;


namespace SampleAngularJs.Manager
{
    public class EmployeeManager
    {
        public List<Employee> GetAll()
        {
            using (var db = new EmployeeEntities())
            {
               
                    return db.Employees.ToList();
               
            }
        }
        public bool Save(Employee emp)
        {
            using (EmployeeEntities db = new EmployeeEntities())
            {
                db.Employees.Add(emp);
                db.SaveChanges();
                return true;
            }
        }
        public Employee GetEmp(int id)
        {
            using (EmployeeEntities db = new EmployeeEntities())
            {
                return db.Employees.Single(emp => emp.EmpNo == id);
            }
        }
        public bool Delete(int id)
        {
            using (EmployeeEntities db = new EmployeeEntities())
            {
                var itemToRemove = db.Employees.SingleOrDefault(x => x.EmpNo == id); //returns a single item.

                if (itemToRemove != null)
                {
                    db.Employees.Remove(itemToRemove);
                    db.SaveChanges();
                }

                return true;
            }
        }
        public bool Update(int id, Employee emp)
        {
            using (EmployeeEntities db = new EmployeeEntities())
            {

                if (id != emp.EmpNo)
                {
                    return false;
                }
                 db.Entry(emp).State = EntityState.Modified;
                 try
                    {
                         db.SaveChanges();
                    }
                     catch { return false; }
                return true;
            }
        }
    }
}