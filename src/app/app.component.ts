import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'


// export interface PeriodicElement {
//       "enrollmentId":any,
//       "empId":any,
//       "empName": any,
//       "learningPlanId": any,
//       "learningPlan": any,
//       "enrollmentDate": any,
//       "percentageCompletion": any,
//       "dueDate": any,
//       "requestedUser": any,
//       "requestedDate": any,
//       "lmsStatusId":any,
//       "lmsStatus":any,
//       "updatedBy":any,
//       "updatedDate": any,
//       "comment": any,
//       "htdEnrollmentModulesList": any,
//       "mouduleValues": any,
//       "competency": any,
//       "competencyId": any,
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // displayedColumns: string[] = ['select','enrollmentId', 'empName', 'dueDate', 'lmsStatus'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // selection = new SelectionModel<PeriodicElement>(true, []);
  // @ViewChild(MatPaginator) paginator:any= MatPaginator;
  // @ViewChild(MatSort) sort:any= MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  // announceSortChange(sortState: Sort) {
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }
  // updateCheckedList(event:any,index:any)
  // {
  //     if(event.checked)
  //         console.log(ELEMENT_DATA[index]);
  // }
  // changeCheck(e:any){
  //   console.log(e);
  // }
  // /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   console.log(numSelected);
  //   return numSelected === numRows;
    
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(row => this.selection.select(row));
  // }
}
  

// const ELEMENT_DATA: PeriodicElement[] = [
  
//     {
//       "enrollmentId": 106,
//       "empId": 73426,
//       "empName": "SIVAKUMAR  ASADI",
//       "learningPlanId": 1215,
//       "learningPlan": "Application Front End Lead (CH)",
//       "enrollmentDate": "2022-05-23",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-06-22",
//       "requestedUser": "Riddhi Rajendra Khandge",
//       "requestedDate": "2022-05-23",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "Riddhi Rajendra Khandge",
//       "updatedDate": "2022-05-23",
//       "comment": null,
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1223,
//           "module": "HTD_ATM_Azure Fundamentals"
//         },
//         {
//           "modileId": 1222,
//           "module": "HTD_ATM_AWS Fundamentals"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,",
//       "competency": "ATMUICOMP",
//       "competencyId": 972
//     },
//     {
//       "enrollmentId": 117,
//       "empId": 73738,
//       "empName": "PRATHYUSHA  CHANDUPATLA",
//       "learningPlanId": 1212,
//       "learningPlan": "Java Full Stack Engineer Associate (CH)",
//       "enrollmentDate": "2022-05-25",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-06-24",
//       "requestedUser": "R Sudhakar  Raj",
//       "requestedDate": "2022-05-25",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "R Sudhakar  Raj",
//       "updatedDate": "2022-05-25",
//       "comment": null,
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1218,
//           "module": "HTD_ATM_Java_Springboot_Microservices_Cloud"
//         },
//         {
//           "modileId": 1219,
//           "module": "HTD_ATM_DotnetCore_Microservices_Cloud"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,",
//       "competency": "ATMJAVCOMP",
//       "competencyId": 968
//     },
//     {
//       "enrollmentId": 126,
//       "empId": 73703,
//       "empName": "BALAKRISHNA  KAMMARI",
//       "learningPlanId": 1210,
//       "learningPlan": "Microsoft Full Stack Engineer Associate (CH)",
//       "enrollmentDate": "2022-06-09",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-09",
//       "requestedUser": "ATM Admin",
//       "requestedDate": "2022-06-09",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "ATM Admin",
//       "updatedDate": "2022-06-09",
//       "comment": "dasda",
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1219,
//           "module": "HTD_ATM_DotnetCore_Microservices_Cloud"
//         },
//         {
//           "modileId": 1220,
//           "module": "HTD_ATM_Angular"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,",
//       "competency": "ATMSOACOMP",
//       "competencyId": 971
//     },
//     {
//       "enrollmentId": 130,
//       "empId": 72573,
//       "empName": "ARUNRAJ  MURUGAIYAN",
//       "learningPlanId": 1211,
//       "learningPlan": "Microsoft Full Stack Engineer Professional (CH)",
//       "enrollmentDate": "2022-06-09",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-09",
//       "requestedUser": "ATM Admin",
//       "requestedDate": "2022-06-09",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "ATM Admin",
//       "updatedDate": "2022-06-09",
//       "comment": null,
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1218,
//           "module": "HTD_ATM_Java_Springboot_Microservices_Cloud"
//         },
//         {
//           "modileId": 1220,
//           "module": "HTD_ATM_Angular"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,HTD_ATM_Angular,",
//       "competency": "ATMLEGCOMP",
//       "competencyId": 969
//     },
//     {
//       "enrollmentId": 133,
//       "empId": 72034,
//       "empName": "DUVVARI  YUGANDHAR",
//       "learningPlanId": 1213,
//       "learningPlan": "Java Full Stack Engineer Professional (CH)",
//       "enrollmentDate": "2022-06-09",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-09",
//       "requestedUser": "ATM Admin",
//       "requestedDate": "2022-06-09",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "ATM Admin",
//       "updatedDate": "2022-06-09",
//       "comment": "dadasd",
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1220,
//           "module": "HTD_ATM_Angular"
//         },
//         {
//           "modileId": 1222,
//           "module": "HTD_ATM_AWS Fundamentals"
//         },
//         {
//           "modileId": 1221,
//           "module": "HTD_ATM_REACT"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,HTD_ATM_Angular,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,",
//       "competency": "ATMSOACOMP",
//       "competencyId": 971
//     },
//     {
//       "enrollmentId": 134,
//       "empId": 63881,
//       "empName": "TAUSHIF  AHMED",
//       "learningPlanId": 1211,
//       "learningPlan": "Microsoft Full Stack Engineer Professional (CH)",
//       "enrollmentDate": "2022-06-09",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-09",
//       "requestedUser": "ATM Admin",
//       "requestedDate": "2022-06-09",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "ATM Admin",
//       "updatedDate": "2022-06-09",
//       "comment": "vhghghgh",
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1220,
//           "module": "HTD_ATM_Angular"
//         },
//         {
//           "modileId": 1219,
//           "module": "HTD_ATM_DotnetCore_Microservices_Cloud"
//         },
//         {
//           "modileId": 1221,
//           "module": "HTD_ATM_REACT"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,HTD_ATM_Angular,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_REACT,",
//       "competency": "ATMJAVCOMP",
//       "competencyId": 968
//     },
//     {
//       "enrollmentId": 135,
//       "empId": 50819,
//       "empName": "SREEDEVI  GAJJALA",
//       "learningPlanId": 1213,
//       "learningPlan": "Java Full Stack Engineer Professional (CH)",
//       "enrollmentDate": "2022-06-09",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-09",
//       "requestedUser": "ATM Admin",
//       "requestedDate": "2022-06-09",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "ATM Admin",
//       "updatedDate": "2022-06-09",
//       "comment": "hhgh",
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1220,
//           "module": "HTD_ATM_Angular"
//         },
//         {
//           "modileId": 1222,
//           "module": "HTD_ATM_AWS Fundamentals"
//         },
//         {
//           "modileId": 1221,
//           "module": "HTD_ATM_REACT"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,HTD_ATM_Angular,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_REACT,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,",
//       "competency": "ATMJAVCOMP",
//       "competencyId": 968
//     },
//     {
//       "enrollmentId": 136,
//       "empId": 72667,
//       "empName": "KALLURU MAHESWARA REDDY",
//       "learningPlanId": 1214,
//       "learningPlan": "Application Front End Developer (CH)",
//       "enrollmentDate": "2022-06-09",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-09",
//       "requestedUser": "ATM Admin",
//       "requestedDate": "2022-06-09",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "ATM Admin",
//       "updatedDate": "2022-06-09",
//       "comment": "ghggghh",
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1222,
//           "module": "HTD_ATM_AWS Fundamentals"
//         },
//         {
//           "modileId": 1223,
//           "module": "HTD_ATM_Azure Fundamentals"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,HTD_ATM_Angular,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_REACT,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,",
//       "competency": "ATMAMZCOMP",
//       "competencyId": 962
//     },
//     {
//       "enrollmentId": 137,
//       "empId": 73268,
//       "empName": "SHEIK MYDEEN S",
//       "learningPlanId": 1215,
//       "learningPlan": "Application Front End Lead (CH)",
//       "enrollmentDate": "2022-06-09",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-09",
//       "requestedUser": "ATM Admin",
//       "requestedDate": "2022-06-09",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "ATM Admin",
//       "updatedDate": "2022-06-09",
//       "comment": "hghg",
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1220,
//           "module": "HTD_ATM_Angular"
//         },
//         {
//           "modileId": 1221,
//           "module": "HTD_ATM_REACT"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,HTD_ATM_Angular,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_REACT,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_REACT,",
//       "competency": "ATMJAVCOMP",
//       "competencyId": 968
//     },
//     {
//       "enrollmentId": 138,
//       "empId": 73227,
//       "empName": "JAGANMOHAN  M",
//       "learningPlanId": 1211,
//       "learningPlan": "Microsoft Full Stack Engineer Professional (CH)",
//       "enrollmentDate": "2022-06-09",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-09",
//       "requestedUser": "ATM Admin",
//       "requestedDate": "2022-06-09",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "ATM Admin",
//       "updatedDate": "2022-06-09",
//       "comment": "jkjkjk",
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1219,
//           "module": "HTD_ATM_DotnetCore_Microservices_Cloud"
//         },
//         {
//           "modileId": 1223,
//           "module": "HTD_ATM_Azure Fundamentals"
//         },
//         {
//           "modileId": 1220,
//           "module": "HTD_ATM_Angular"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,HTD_ATM_Angular,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_REACT,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_Angular,",
//       "competency": "ATMJAVCOMP",
//       "competencyId": 968
//     },
//     {
//       "enrollmentId": 139,
//       "empId": 73135,
//       "empName": "KUMAR  ABHISHEK",
//       "learningPlanId": 1210,
//       "learningPlan": "Microsoft Full Stack Engineer Associate (CH)",
//       "enrollmentDate": "2022-06-09",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-09",
//       "requestedUser": "ATM Admin",
//       "requestedDate": "2022-06-09",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "ATM Admin",
//       "updatedDate": "2022-06-09",
//       "comment": "fdsfsf",
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1219,
//           "module": "HTD_ATM_DotnetCore_Microservices_Cloud"
//         },
//         {
//           "modileId": 1221,
//           "module": "HTD_ATM_REACT"
//         },
//         {
//           "modileId": 1220,
//           "module": "HTD_ATM_Angular"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,HTD_ATM_Angular,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_REACT,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_Angular,HTD_ATM_REACT,HTD_ATM_Angular,",
//       "competency": "ATMJAVCOMP",
//       "competencyId": 968
//     },
//     {
//       "enrollmentId": 140,
//       "empId": 73038,
//       "empName": "ANANTHI  A",
//       "learningPlanId": 1211,
//       "learningPlan": "Microsoft Full Stack Engineer Professional (CH)",
//       "enrollmentDate": "2022-06-09",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-09",
//       "requestedUser": "ATM Admin",
//       "requestedDate": "2022-06-09",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "ATM Admin",
//       "updatedDate": "2022-06-09",
//       "comment": "dsfdsf",
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1219,
//           "module": "HTD_ATM_DotnetCore_Microservices_Cloud"
//         },
//         {
//           "modileId": 1226,
//           "module": "HTD_ATM_Mulesoft_CrossHire"
//         },
//         {
//           "modileId": 1220,
//           "module": "HTD_ATM_Angular"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,HTD_ATM_Angular,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_REACT,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_Angular,HTD_ATM_REACT,HTD_ATM_Angular,HTD_ATM_Mulesoft_CrossHire,HTD_ATM_Angular,",
//       "competency": "ATMMSCOMP",
//       "competencyId": 970
//     },
//     {
//       "enrollmentId": 141,
//       "empId": 61684,
//       "empName": "KUNAL  SANGLE",
//       "learningPlanId": 1211,
//       "learningPlan": "Microsoft Full Stack Engineer Professional (CH)",
//       "enrollmentDate": "2022-06-10",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-10",
//       "requestedUser": "ATM Admin",
//       "requestedDate": "2022-06-10",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "ATM Admin",
//       "updatedDate": "2022-06-10",
//       "comment": "sasdsa",
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1224,
//           "module": "HTD_ATM_AWS_Advanced"
//         },
//         {
//           "modileId": 1223,
//           "module": "HTD_ATM_Azure Fundamentals"
//         },
//         {
//           "modileId": 1220,
//           "module": "HTD_ATM_Angular"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,HTD_ATM_Angular,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_REACT,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_Angular,HTD_ATM_REACT,HTD_ATM_Angular,HTD_ATM_Mulesoft_CrossHire,HTD_ATM_Angular,HTD_ATM_Azure Fundamentals,HTD_ATM_Angular,",
//       "competency": "ATMJAVCOMP",
//       "competencyId": 968
//     },
//     {
//       "enrollmentId": 143,
//       "empId": 61681,
//       "empName": "KEERTHANA  A",
//       "learningPlanId": 1212,
//       "learningPlan": "Java Full Stack Engineer Associate (CH)",
//       "enrollmentDate": "2022-06-11",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-11",
//       "requestedUser": "ATM Admin",
//       "requestedDate": "2022-06-11",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "ATM Admin",
//       "updatedDate": "2022-06-11",
//       "comment": null,
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1219,
//           "module": "HTD_ATM_DotnetCore_Microservices_Cloud"
//         },
//         {
//           "modileId": 1218,
//           "module": "HTD_ATM_Java_Springboot_Microservices_Cloud"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,HTD_ATM_Angular,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_REACT,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_Angular,HTD_ATM_REACT,HTD_ATM_Angular,HTD_ATM_Mulesoft_CrossHire,HTD_ATM_Angular,HTD_ATM_Azure Fundamentals,HTD_ATM_Angular,HTD_ATM_Java_Springboot_Microservices_Cloud,",
//       "competency": "ATMJAVCOMP",
//       "competencyId": 968
//     },
//     {
//       "enrollmentId": 144,
//       "empId": 55435,
//       "empName": "YUVA PRASANTH  B",
//       "learningPlanId": 1211,
//       "learningPlan": "Microsoft Full Stack Engineer Professional (CH)",
//       "enrollmentDate": "2022-06-14",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-14",
//       "requestedUser": "ATM Admin",
//       "requestedDate": "2022-06-14",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "ATM Admin",
//       "updatedDate": "2022-06-14",
//       "comment": "dfdsfs",
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1219,
//           "module": "HTD_ATM_DotnetCore_Microservices_Cloud"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,HTD_ATM_Angular,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_REACT,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_Angular,HTD_ATM_REACT,HTD_ATM_Angular,HTD_ATM_Mulesoft_CrossHire,HTD_ATM_Angular,HTD_ATM_Azure Fundamentals,HTD_ATM_Angular,HTD_ATM_Java_Springboot_Microservices_Cloud,",
//       "competency": "ATMJAVCOMP",
//       "competencyId": 968
//     },
//     {
//       "enrollmentId": 147,
//       "empId": 41358,
//       "empName": "SUHAS  BHARATI",
//       "learningPlanId": 1212,
//       "learningPlan": "Java Full Stack Engineer Associate (CH)",
//       "enrollmentDate": "2022-06-16",
//       "percentageCompletion": "0.0",
//       "dueDate": "2022-07-16",
//       "requestedUser": "Gnanaguru G",
//       "requestedDate": "2022-06-16",
//       "lmsStatusId": 1227,
//       "lmsStatus": "Requested",
//       "updatedBy": "Gnanaguru G",
//       "updatedDate": "2022-06-16",
//       "comment": "Cloud Excluded",
//       "htdEnrollmentModulesList": [
//         {
//           "modileId": 1220,
//           "module": "HTD_ATM_Angular"
//         },
//         {
//           "modileId": 1218,
//           "module": "HTD_ATM_Java_Springboot_Microservices_Cloud"
//         }
//       ],
//       "mouduleValues": "HTD_ATM_Azure Fundamentals,HTD_ATM_AWS Fundamentals,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_Angular,HTD_ATM_Angular,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_DotnetCore_Microservices_Cloud,HTD_ATM_REACT,HTD_ATM_AWS Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_REACT,HTD_ATM_Azure Fundamentals,HTD_ATM_Angular,HTD_ATM_REACT,HTD_ATM_Angular,HTD_ATM_Mulesoft_CrossHire,HTD_ATM_Angular,HTD_ATM_Azure Fundamentals,HTD_ATM_Angular,HTD_ATM_Java_Springboot_Microservices_Cloud,HTD_ATM_Java_Springboot_Microservices_Cloud,",
//       "competency": "ATMSOACOMP",
//       "competencyId": 971
//     }


 
// ];
