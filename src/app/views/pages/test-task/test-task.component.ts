import { Component } from '@angular/core';

import {
	SERVICES,
	CUSTOMER_CHARACTERICTISC,
	SALES_MODELS,
	DELIVERY_METHODS,
	PRODUCT_RANGES,
	MONTHLY_REVENUE
} from './fixture';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kt-test-task',
  templateUrl: './test-task.component.html',
  styleUrls: ['./test-task.component.scss']
})
export class TestTaskComponent {
	public services = SERVICES;
	public customerCharacteristics = CUSTOMER_CHARACTERICTISC;
	public salesModels = SALES_MODELS;
	public deliveryMethods = DELIVERY_METHODS;
	public productRanges = PRODUCT_RANGES;
	public monthlyRevenue = MONTHLY_REVENUE;

	public serviceControl = new FormControl('');
	public sellerControl = new FormControl('');
	public characteristicControl = new FormControl('');
	public businessForm: FormGroup;
	public linkingForm: FormGroup;

	constructor() {
		this._initBusinessForm();
		this._initLinkingForm();
	}

	private _initBusinessForm(): void {
		this.businessForm = new FormGroup({
			sellerNumber: new FormControl('', [Validators.required]),
			salesModel: new FormControl('', [Validators.required]),
			deliveryMethod: new FormControl('', [Validators.required]),
			productRange: new FormControl('', [Validators.required]),
			monthlyRevenue: new FormControl('', [Validators.required])
		});
	}

	private _initLinkingForm(): void {
		this.linkingForm = new FormGroup({
			sellerNumber: new FormControl('', [Validators.required]),
			publicKey: new FormControl('', [Validators.required]),
			privateKey: new FormControl('', [Validators.required]),
			agree: new FormControl('', [Validators.required])
		});
	}

	public isDisabled(value: string): boolean {
		return !value;
	}

	public isSeller(): boolean {
		if (this.sellerControl.value === '') {
			return null;
		}
		return this.sellerControl.value === '1';
	}
}
