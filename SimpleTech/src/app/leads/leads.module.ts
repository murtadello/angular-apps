import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingsComponent } from './leads-listings/leads-listings.component';
import { LeadsGridComponent } from './leads-listings/leads-grid/leads-grid.component';
import { LeadsToolsComponent } from './leads-listings/leads-tools/leads-tools.component';
import { DownloadPdfComponent } from './leads-listings/leads-tools/download-pdf/download-pdf.component';
import { DownloadExcelComponent } from './leads-listings/leads-tools/download-excel/download-excel.component';



@NgModule({
  declarations: [
    LeadsListingsComponent,
    LeadsGridComponent,
    LeadsToolsComponent,
    DownloadPdfComponent,
    DownloadExcelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
