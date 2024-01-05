import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerdetailPageComponent } from './components/customerdetail-page/customerdetail-page.component';
// import { CustomerdetailProfileComponent } from './components/customerdetail-profile/customerdetail-profile.component';
import { CustomerdetailListComponent } from './components/customerdetail-list/customerdetail-list.component';
import { CustomerdetailProfileComponent } from './components/customerdetail-profile/customerdetail-profile.component';
import { ProfilePageComponent } from './components/customerdetail-profile/profile-page/profile-page.component';


const routes: Routes = [
  {
  path: '', component: CustomerdetailPageComponent, data: { title: '' },
  children: [
    {
      path: '', redirectTo: 'list', pathMatch: 'full'
    },
    {
      path: 'list', component: CustomerdetailListComponent, data: { title: 'List' }
    },
    { path: 'profile', component: ProfilePageComponent,data: { title: 'Profile' }},
    {
      path: 'member', component: CustomerdetailProfileComponent, data: { title: 'Member' },
      children: [
        { path: '', redirectTo: 'profile', pathMatch: 'full' },
        { path: 'profile', component: ProfilePageComponent,data: { title: 'Profile' }},
        // { path: 'notes', component: NotesPageComponent,data: { title: 'Notes' } },
        // { path: 'document', component: DocumentPageComponent,data: { title: 'Document' } },
        // { path: 'video', component: VideoPageComponent,data: { title: 'Video' } },
    // {
    //   path: 'customer', component: CustomerdetailListComponent, data: { title: 'customer' }
    // },
      
  ]
}
  ]
  }
];
// const routes: Routes = [
//   {
//     path: '', component: CustomerdetailListComponent, data: { title: '' },
//     children: [
//       {
//         path: '', redirectTo: 'list', pathMatch: 'full'
//       },
//       {
//         path: 'list', component: CustomerdetailListComponent, data: { title: 'List' }
//       },
//       {
//         path: 'member', component: CustomerdetailProfileComponent, data: { title: 'Member' },
//         children: [
//           { path: '', redirectTo: 'profile', pathMatch: 'full' },
//           { path: 'profile', component: CustomerdetailProfileComponent,data: { title: 'Profile' }},
//           // { path: 'notes', component: NotesPageComponent,data: { title: 'Notes' } },
//           // { path: 'document', component: DocumentPageComponent,data: { title: 'Document' } },
//           // { path: 'video', component: VideoPageComponent,data: { title: 'Video' } },
//           // { path: 'schedule', component: SchedulePageComponent,data: { title: 'Schedule' } },
        
         
//         ]
//       }
//     ]
//   }
// ];

  // {
  //   path: '', component: CustomerdetailPageComponent, data: { title: '' },
  //   children: [
  //     {
  //       path: '', redirectTo: 'list', pathMatch: 'full'
  //     },
  //     {
  //       path: 'list', component: CustomerdetailListComponent, data: { title: 'List' }
  //     },
  //     {
  //       path: 'member', component: CustomerdetailProfileComponent, data: { title: 'Member' },
       
  //         },
         
          
  //       ]
  //     }
  //   ];
//   }
// ];



// const routes: Routes = [
//   {
//     path: 'profile', component: CustomerdetailPageComponent, data: { title: '' },
//     children: [
//       {
//         path: '', redirectTo: 'list', pathMatch: 'full'
//       },
//       {   
//         path: 'list', component: CustomerdetailListComponent, data: { title: 'List' }
//       },
//       {
//         path: 'customerdetail', component: CustomerdetailProfileComponent, data: { title: 'Customerdetail' },
//         children: [
//           { path: '', redirectTo: 'profile', pathMatch: 'full' },
//           { path: 'profile', component: CustomerdetailProfileComponent,data: { title: 'Profile' }},
//           // { path: 'notes', component: NotesPageComponent,data: { title: 'Notes' } },
//           // { path: 'document', component: DocumentPageComponent,data: { title: 'Document' } },
//           // { path: 'video', component: VideoPageComponent,data: { title: 'Video' } },
//           // { path: 'schedule', component: SchedulePageComponent,data: { title: 'Schedule' } },
//         ]
      
//           // {
//           //   path: 'schedule', component: SchedulePageComponent,data: { title: 'Schedule' },
//           //   children: [
//           //     { path: '', redirectTo: 'list', pathMatch: 'full' },
//           //     { path: 'list', component: ScheduleListComponent,data: { title: 'List' } },
//           //     { path: 'add', component: ScheduleAddComponent,data: { title: 'Add' } }
//           //   ]
//         //   },
         
//         //   {
//         //     path: 'workshop', component: WorkshopPageComponent,data: { title: 'Workshop' },
//         //     children: [
//         //       { path: '', redirectTo: 'list', pathMatch: 'full' },
//         //       { path: 'list', component: WorkshopListComponent,data: { title: 'List' } },
//         //       { path: 'add', component: WorkshopAddComponent,data: { title: 'Add' } }
//         //     ]
//         //   }
//         // ]
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerdetailMasterRoutingModule { }
