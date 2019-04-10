import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'kt-test-task',
  templateUrl: './test-task.component.html',
  styleUrls: ['./test-task.component.scss']
})
export class TestTaskComponent implements OnInit {

	public isSeller = null;
	public services = [
		{
			title: 'Nieuwe producten en/of niches ontdekken',
			value: 1
		},
		{
			title: 'Huidig assortiment verbeteren',
			value: 2
		},
		{
			title: 'Productiedee valideren',
			value: 3
		},
		{
			title: 'Concurrentie monitoren / voorblijven',
			value: 4
		},
		{
			title: 'trends ontdekken',
			value: 5
		},
		{
			title: 'Winstmarge product(en) voorspellen',
			value: 6
		}
	];

	public somethingAboutCustomer = [
		{
			title: 'Groothandel',
			value: 1
		},
		{
			title: 'Private label',
			value: 2
		},
		{
			title: 'Retailer',
			value: 3
		},
		{
			title: 'E-tailer',
			value: 4
		},
		{
			title: 'Merkeigenaar / fabrikant',
			value: 5
		},
		{
			title: 'Dropshipping',
			value: 6
		},
		{
			title: 'Startend ondernemer',
			value: 7
		},
		{
			title: 'Student',
			value: 8
		},
		{
			title: 'Orienterend',
			value: 9
		}
	];

	public salesModels = [
		{
			title: 'Groothandel',
			value: 1
		},
		{
			title: 'Private label',
			value: 2
		},
		{
			title: 'Retailer',
			value: 3
		},
		{
			title: 'E-tailer',
			value: 4
		},
		{
			title: 'Merkeigenaar / fabrikant',
			value: 5
		},
		{
			title: 'Dropshipping',
			value: 6
		}
	];

	public deliveryMethods = [
		{
			title: 'Logistiek via bol.com LVB',
			value: 0
		},
		{
			title: 'Eigen logistiek LVM',
			value: 1
		}
	];

	public productRanges = [
		{
			title: '1 to 25 producten',
			value: 1
		},
		{
			title: '25 to 100 producten',
			value: 2
		},
		{
			title: '100 to 500 producten',
			value: 3
		},
		{
			title: '500 to 1,000 producten',
			value: 4
		},
		{
			title: 'more than 1,000 producten',
			value: 5
		}
	];

	public monthlyRevenue = [
		{
			title: 'Up to 500 euros',
			value: 1
		},
		{
			title: '500 to 2,500 euros',
			value: 2
		},
		{
			title: '2,500 to 10,000 euros',
			value: 3
		},
		{
			title: '10,000 to 50,000 euros',
			value: 4
		},
		{
			title: 'more than 50,000 euros',
			value: 5
		},
	];
	private value: number;

  constructor() { }

  ngOnInit() {
	}
}
