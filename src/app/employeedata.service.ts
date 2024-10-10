import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {designationList} from './project';
import { roleList } from './role-list';
import { Data } from '@angular/router';
import { employeeObj } from './employeedata';

@Injectable(
  // {providedIn: 'root'}
)
export class EmployeedataService {
  constructor(private httpClient:HttpClient)
  {

  }
  loadDesignation()
  {
    return this.httpClient.get<{message: string; result: boolean; data: designationList[]}>('https://freeapi.gerasim.in/api/EmployeeApp/GetAllDesignation');
  
  }


  loadRoles()
  {
    return this.httpClient.get<{ message: string; result: boolean; data: roleList[] }>('https://freeapi.gerasim.in/api/EmployeeApp/GetAllRoles');
  }
  
  // SaveEmployee(employeeData: any) 
  // {
  //   this.httpClient.post("https://freeapi.gerasim.in/api/EmployeeApp/CreateNewEmployee", employeeData)
  //     .subscribe(
  //       (res: any) => {
  //         if (res.result) {
  //           alert('Employee created successfully');
  //         } else {
  //           alert(res.message);
  //         }
  //       },
  //       (error) => {
  //         console.error('Error creating employee:', error);
  //         alert('An error occurred while creating the employee.');
  //       }
  //     );
  // }

  SaveEmployee(newemployeeObj:employeeObj): Observable<employeeObj>
  {
    return this.httpClient.post<employeeObj>("https://freeapi.gerasim.in/api/EmployeeApp/CreateNewEmployee", newemployeeObj);
  }


}
  
  // loadDesignation():any[]
  // {
  // var designationList=[
  // {"designationId":1,"designation":"UI/UX Designer"},
  // {"designationId":2,"designation":"Front enddeveloper"},
  // {"designationId":3,"designation":"back end developer"}];
  // return designationList
  // }
  // loadRoles():any[]
  // {
  //   var roleList=[{"roleId":1,"role":"Super Admin"},
  //     {"roleId":2,"role":"Admin"},{"roleId":3,"role":"TL"},
  //     {"roleId":4,"role":"Juniora Developer"},
  //     {"roleId":5,"role":"Senior Developer"}];;
  //   return roleList
