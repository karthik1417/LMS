import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {
  @ViewChild('heroForm') heroForm:any= NgForm;
    firstname:any
    lastname:any
    address:any
    city:any
    state:any
    postalcode:any
    selected:any
    htdEnrollmentModulesList:any=[
      1220,
      1221
    ]
    project_type:any= [
      {
        "name": "SERVICE OFFERING",
        "id": 1001
      },
      {
        "name": "RESOURCE POOL",
        "id": 1002
      },
      {
        "name": "VERTICAL POOL",
        "id": 1003
      },
      {
        "name": "#N/A",
        "id": 1004
      },
      {
        "name": "LAB",
        "id": 1005
      },
      {
        "name": "CLIENT",
        "id": 1006
      },
      {
        "name": "CLIENT MANAGEMENT",
        "id": 1007
      },
      {
        "name": "SUPPORT",
        "id": 1008
      },
      {
        "name": "CLIENT POOL",
        "id": 1009
      },
      {
        "name": "COMPETENCY SOLUTION",
        "id": 1010
      },
      {
        "name": "COMPETENCY MAINTENANCE",
        "id": 1011
      },
      {
        "name": "NON DEPLOYABLE POOL",
        "id": 1012
      },
      {
        "name": "EARMARKED POOL",
        "id": 1013
      }
    ]
    active_inactive:any= [
      {
        "name": "ACTIVE",
        "id": 998
      },
      {
        "name": "INACTIVE",
        "id": 999
      },
      {
        "name": "RESIGNED",
        "id": 1000
      }
    ]
    assigned_grade:any= [
      {
        "name": "UE",
        "id": 1197
      },
      {
        "name": "G2",
        "id": 1198
      },
      {
        "name": "G3",
        "id": 1199
      },
      {
        "name": "#N/A",
        "id": 1200
      },
      {
        "name": "G4",
        "id": 1201
      },
      {
        "name": "G5",
        "id": 1202
      },
      {
        "name": "G6",
        "id": 1203
      }
    ]
    final_classification:any= [
      {
        "name": "ENROLLED-COMPLETED",
        "id": 992
      },
      {
        "name": "ENROLLED-NOT STARTED",
        "id": 993
      },
      {
        "name": "INACTIVE",
        "id": 994
      },
      {
        "name": "EXEMPTED",
        "id": 995
      },
      {
        "name": "NOT ENROLLED",
        "id": 996
      },
      {
        "name": "ENROLLED-WIP",
        "id": 997
      }
    ]
    modules:any= [
      {
        "name": "HTD_ATM_Java_Springboot_Microservices_Cloud",
        "id": 1218
      },
      {
        "name": "HTD_ATM_DotnetCore_Microservices_Cloud",
        "id": 1219
      },
      {
        "name": "HTD_ATM_Angular",
        "id": 1220
      },
      {
        "name": "HTD_ATM_REACT",
        "id": 1221
      },
      {
        "name": "HTD_ATM_AWS Fundamentals",
        "id": 1222
      },
      {
        "name": "HTD_ATM_Azure Fundamentals",
        "id": 1223
      },
      {
        "name": "HTD_ATM_AWS_Advanced",
        "id": 1224
      },
      {
        "name": "HTD_ATM_Azure_Advanced",
        "id": 1225
      },
      {
        "name": "HTD_ATM_Mulesoft_CrossHire",
        "id": 1226
      }
    ]
    project_exec_bu:any= [
      {
        "name": "GLOBALATM",
        "id": 1174
      },
      {
        "name": "CEXT",
        "id": 1175
      },
      {
        "name": "BPS",
        "id": 1176
      },
      {
        "name": "GTT",
        "id": 1177
      },
      {
        "name": "GLOBALBIBA",
        "id": 1178
      },
      {
        "name": "QMG",
        "id": 1179
      },
      {
        "name": "GLOBALCXT",
        "id": 1180
      },
      {
        "name": "#N/A",
        "id": 1181
      },
      {
        "name": "CTO OFF",
        "id": 1182
      },
      {
        "name": "NTS",
        "id": 1183
      },
      {
        "name": "HTPS",
        "id": 1184
      },
      {
        "name": "GLOBALES",
        "id": 1185
      },
      {
        "name": "BFS",
        "id": 1186
      },
      {
        "name": "IMS",
        "id": 1187
      },
      {
        "name": "ES",
        "id": 1188
      },
      {
        "name": "HCI",
        "id": 1189
      },
      {
        "name": "BANKING",
        "id": 1190
      },
      {
        "name": "GLOBALCOMP",
        "id": 1191
      },
      {
        "name": "CORP FUN",
        "id": 1192
      },
      {
        "name": "MFGCONSU",
        "id": 1193
      },
      {
        "name": "GLOBALIMS",
        "id": 1194
      },
      {
        "name": "GLOBALDA",
        "id": 1195
      },
      {
        "name": "DA",
        "id": 1196
      }
    ];
    lms_status:any= [
      {
        "name": "Not Applicable",
        "id": 1206
      },
      {
        "name": "Not Enrolled",
        "id": 1207
      },
      {
        "name": "Completed",
        "id": 1208
      },
      {
        "name": "Enrolled",
        "id": 1209
      },
      {
        "name": "Requested",
        "id": 1227
      }
    ]
  constructor( public service: CommonserviceService,private router: Router) {
     
   
   }

  ngOnInit(): void {
    if(localStorage.getItem('username')=='user'){
      this.service.addEditFlag=false
      this.service.BulkArray=[{
        "enrollmentId": '',
        "empId": '',
        "empName": "",
        "learningPlanId": '',
        "learningPlan": "",
        "enrollmentDate": "",
        "percentageCompletion": "",
        "dueDate": "",
        "requestedUser": "",
        "requestedDate": "",
        "lmsStatusId": '',
        "lmsStatus": "",
        "updatedBy": "",
        "updatedDate": "",
        "comment": null,
        "htdEnrollmentModulesList": [
          {
            "modileId": 1218345345345,
            "module": "HTD_ATM_Java_Springboot_Microservices_Cloud"
          },
          {
            "modileId": 1219345345,
            "module": "HTD_ATM_DotnetCore_Microservices_Cloud"
          }
        ],
        "mouduleValues": "",
        "competency": "",
        "competencyId": ''
      }]
    }
    if(this.service.BulkArray.length==0 && localStorage.getItem('username')=='admin'){
      this.service.BulkArray=[{
        "enrollmentId": '',
        "empId": '',
        "empName": "",
        "learningPlanId": '',
        "learningPlan": "",
        "enrollmentDate": "",
        "percentageCompletion": "",
        "dueDate": "",
        "requestedUser": "",
        "requestedDate": "",
        "lmsStatusId": '',
        "lmsStatus": "",
        "updatedBy": "",
        "updatedDate": "",
        "comment": null,
        "htdEnrollmentModulesList": [
        ],
        "mouduleValues": "",
        "competency": "",
        "competencyId": ''
      }]
    }
    if(this.service.addEditFlag){
      this.service.BulkArray.map((res:any)=>{
        var modulearray:any=[]
        res.htdEnrollmentModulesList.map((res2:any)=>{
          modulearray.push(res2?.modileId)
          res.modulearray = modulearray
          console.log(modulearray);
          
        })
      })
    }
    console.log(this.service.BulkArray);
    this.service.BulkArray=this.service.BulkArray
    
  }
  onSubmit(heroform:any){
    console.log(this.service.BulkArray);
    this.service.addAPI(this.service.BulkArray).subscribe((res:any)=>{
      if(res?.succes){
        if(localStorage.getItem('username')!='user'){
  
        }else{
          this.router.navigate(['table-view'])
          this.service.listMaterialTable() 
        }
      }
    })
  }
  fnlogout(){
    localStorage.setItem('username','')
    localStorage.setItem('pass','')
    this.router.navigate(["login"])
  }
  fngoto(){
    this.router.navigate(["table-view"]);
  }
}
