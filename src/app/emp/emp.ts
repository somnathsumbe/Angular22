import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-emp',
  imports: [],
  templateUrl: './emp.html',
  styleUrls: ['./emp.css'],
})
export class Emp {
  myName:string = 'Somnath Sumbe';
constructor() { 
console.log('Emp component constructor called');
}
}
