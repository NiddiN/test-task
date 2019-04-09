import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'kt-test-task',
  templateUrl: './test-task.component.html',
  styleUrls: ['./test-task.component.scss']
})
export class TestTaskComponent implements OnInit {

	public isSeller = null;
	public things = [
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
	private value: number;

  constructor() { }

  ngOnInit() {
	}

	public setSeller(value) {
		this.isSeller = value;
	}

	public setValue(value) {
		this.value = value;
	}

	public isActive(value): boolean {
		console.log(this.value === value);
		return this.value === value;
	}
}
