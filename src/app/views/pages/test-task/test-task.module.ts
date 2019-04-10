// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Material Modules
import {
	MatStepperModule,
	MatRadioModule,
	MatButtonModule,
	MatInputModule,
	MatFormFieldModule,
	MatSelectModule,
	MatIconModule,
	MatTooltipModule,
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
		MatSelectModule,
		MatIconModule,
		MatTooltipModule,
		ReactiveFormsModule,
		FormsModule
	],
	declarations: [
		TestTaskComponent
	]
})
export class TestTaskModule { }
