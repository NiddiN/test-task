// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Material Modules
import {
	MatStepperModule,
	MatRadioModule,
	MatButtonModule,
	MatInputModule,
	MatFormFieldModule,
	MatSelectModule,
} from '@angular/material';
// Core Module
import { CoreModule } from '../../../core/core.module';
// Test Task Component
import { TestTaskComponent } from './test-task.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
		CommonModule,
		NgbModule,
		RouterModule.forChild([
			{
				path: '',
				component: TestTaskComponent
			}
		]),
		CoreModule,
		MatStepperModule,
		MatRadioModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule
	],
	declarations: [
		TestTaskComponent
	]
})
export class TestTaskModule { }
