import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpService } from './services/http.service';
import { MaterialModule } from '@app/material-module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],

  exports: [
    MaterialModule
  ],
  providers: [HttpService],
  entryComponents: [
  
  ],
})
export class SharedModule {}
