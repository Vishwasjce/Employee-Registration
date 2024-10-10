import { Component } from '@angular/core';
import { EmployeedataService } from '../employeedata.service';
import { designationList } from '../project';
import { roleList} from '../role-list';
import { FormsModule } from '@angular/forms';
import { employeeObj } from '../employeedata';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
 
  designationList:designationList[]=[];
  roleList:roleList[] = [];
  newemployeeObj:employeeObj=new employeeObj();

  
  

 stepsList: any[]=[{stepName:'Basic Details', isComplete:false},
  {stepName:'Skills', isComplete:false},
  {stepName:'Experience', isComplete:false},
 
   ];

activeStep: any = this.stepsList[0];
stepperCompletionValue:number=8;

employeeObj: any = {
 "roleId": 0,
  "userName": "string",
  "empCode": "string",
  "empId": 0,
  "empName": "string",
  "empEmailId": "string",
  "empDesignationId": 0,
  "empContactNo": "string",
  "empAltContactNo": "string",
  "empPersonalEmailId": "string",
  "empExpTotalYear": 0,
  "empExpTotalMonth": 0,
  "empCity": "string",
  "empState": "string",
  "empPinCode": "string",
  "empAddress": "string",
  "empPerCity": "string",
  "empPerState": "string",
  "empPerPinCode": "string",
  "empPerAddress": "string",
  "password": "string",
  ErpEmployeeSkills:[],
  ErmEmpExperiences:[]

};



setActiveStep(activeStep: any) 
{
  this.activeStep=activeStep;
  }

  addSkills(){
    const skillObj ={
      "empSkillId": 0,
      "empId": 0,
      "skill": "",
      "totalYearExp": 0,
      "lastVersionUsed": ""

    }
  this.employeeObj.ErpEmployeeSkills.unshift(skillObj)
}

    addExp()
    {
      const expObj={
        "empExpId": 0,
      "empId": 0,
      "companyName": "",
      "startDate": "2024-09-04T02:33:27.567Z",
      "endDate": "2024-09-04T02:33:27.567Z",
      "designation": "",
      "projectsWorkedOn": ""
      }
this.employeeObj.ErmEmpExperiences.unshift(expObj)
    }
 
   
      
      constructor(private employeeData:EmployeedataService)
      {

      }
    
ngOnInit() 
{  
  
this.employeeData.loadDesignation().subscribe(
  (res) => {
    console.log('Designation Response:', res);
    this.designationList = res.data; // Assuming res is an array of objects
  },
  (error) => {
    console.error('Error loading designations', error);
  }
);

this.employeeData.loadRoles().subscribe(
  (res) => {
    console.log('Role Response:', res);
    this.roleList = res.data; // Assuming res is an array of objects
  });


};

gotoStep2(){
  const currentStep = this.stepsList.find(m=>m.stepName==this.activeStep.stepName);
  currentStep.isComplete=true;
  this.activeStep=this.stepsList[1];
  this.stepperCompletionValue=50;
}
gotoStep3(){
  const currentStep = this.stepsList.find(m=>m.stepName==this.activeStep.stepName);
  currentStep.isComplete=true;
  this.activeStep=this.stepsList[2];
  this.stepperCompletionValue=100;
}

onSaveClick()
{
  this.employeeData.SaveEmployee(this.newemployeeObj).subscribe((response) => {
    console.log()
  
  
    // //Add Project to Grid
    // var p: Project = new Project();
    // p.projectID = response.projectID;
    // p.projectName = response.projectName;
    // p.dateOfStart = response.dateOfStart;
    // p.teamSize = response.teamSize;
    // this.projects.push(p);

    // //Clear New Project Dialog - TextBoxes
    // this.newProject.projectID = null;
    // this.newProject.projectName = null;
    // this.newProject.dateOfStart = null;
    // this.newProject.teamSize = null;
  }, (error) => {
    console.log(error);
  });


}
}








// loadDesignation()
// {
//   this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetAllDesignation").subscribe((res:any)=>{
    
// console.log(res);
// this.designationList=res;
//   })
   
//   }
//   loadRoles()
//   {
//     this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetAllRoles").subscribe((res:any)=>{
//       console.log(res);
//     this.roleList=res;})
// }

// saveEmployee(){

//   this.http.post("https://freeapi.gerasim.in/api/EmployeeApp/CreateNewEmployee", this.employeeObj).subscribe((res:any)=>{debugger;if(res.result){alert('employee created success')} 
// else{alert(res.message)}})
