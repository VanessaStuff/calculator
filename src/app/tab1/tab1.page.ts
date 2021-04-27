import { Component } from '@angular/core';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  value = '0';
  savedValue = '0';
  chosenOperator = '';

  operationChosen = false;
  inputComplete = true;

  onClick(val: any) {
    switch(val) {
      case '1':
        this.addNumber('1');
        break;
      case '2':
        this.addNumber('2');
        break;
      case '3':
        this.addNumber('3');
        break;
      case '4':
        this.addNumber('4');
        break;   
      case '5':
        this.addNumber('5');
        break;
      case '6':
        this.addNumber('6');
        break;
      case '7':
        this.addNumber('7');
        break;
      case '8':
        this.addNumber('8');
        break;
      case '9':
        this.addNumber('9');
        break;
      case '0':
        this.addNumber('0');
        break;
    }
 
  }

  addNumber(num: string) {
    if(!this.operationChosen) {
      if (this.inputComplete) {
        this.value = '' + num;
        this.inputComplete = false;
      }
      else {
        this.value += '' + num;
      }
      console.log(this.value);
    }
    else {
      if (this.inputComplete) {
        this.savedValue = this.value;
        this.value = '' + num;
        this.inputComplete = false;
      }
      else {
        this.value += '' + num;
      }
      console.log(this.savedValue);
      console.log(this.value);
    }
  }

  onOperation(val: any) {
    this.operationChosen = true;
    switch(val) {
      case 'x':
        this.addOperator('x');
        break;
      case '+':
        this.addOperator('+');
        break;
      case '-':
        this.addOperator('-');
        break;
      case '/':
        this.addOperator('/');
        break;
      case 'C':
        this.clearValues();
      case '=':
        this.displayResult();
        break;
    }
  }

  addOperator(op: string) {
    this.inputComplete = true;
    this.chosenOperator = op;
  }

  //
  displayResult() {
    if (this.chosenOperator === 'x') {
      this.value = '' + (parseInt(this.value) * parseInt(this.savedValue));
    }
    else if (this.chosenOperator === '+') {
      this.value = '' + (parseInt(this.value) + parseInt(this.savedValue));
    }
    else if (this.chosenOperator === '-') {
      this.value = '' + (parseInt(this.savedValue) - parseInt(this.value));
    }
    else if (this.chosenOperator === '/') {
        this.value = '' + (parseInt(this.savedValue) / parseInt(this.value));
    }
    this.inputComplete = true;
  }

  // hard reset, all values are cleared!
  clearValues() {
    this.value = '0';
    this.savedValue = '0';
    this.operationChosen = false;
    this.inputComplete = true;

    console.log('value: ' + this.value + ', savedValue: ' + this.savedValue);
  }
}


