import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],

})
export class QuestionComponent implements OnInit {

  calNumber: any[];

  selectedOption = 'IsPrime';

  textNumber: number = 0;

  isPrimeOrFibanacci: string = '';

  constructor() {
    this.calNumber = [
      { value: 'IsPrime' },
      { value: 'IsFibanacci' }
    ];
  }

  ngOnInit(): void {
  }

  checkNumber() {
    if (this.textNumber < 0) {
      this.textNumber = 1;
    } else {
      this.textNumber = Math.round(this.textNumber);
    }

    this.IsPrimeOrFibanacci();
  }

  IsPrimeOrFibanacci() {
    let i, flag = 0;

    console.log(this.selectedOption);

    if (this.selectedOption === 'IsPrime') {
      for (i = 2; i <= this.textNumber / 2; ++i) {
        if (this.textNumber % i === 0) {
          flag = 1;
          break;
        }
      }

      if (this.textNumber === 1) {
        this.isPrimeOrFibanacci = 'True';
      }
      else {
        if (flag === 0)
          this.isPrimeOrFibanacci = 'True';
        else
          this.isPrimeOrFibanacci = 'False';
      }
    } else {
      var j;
      var fib = [];

      fib[0] = 0;
      fib[1] = 1;

      for (j = 2; j <= 10; j++) {
        fib[j] = fib[j - 2] + fib[j - 1];
      }

      if (fib.find(item => item === this.textNumber) !== undefined) {
        this.isPrimeOrFibanacci = 'True';
      } else {
        this.isPrimeOrFibanacci = 'False';
      } 
    }

  }

}
