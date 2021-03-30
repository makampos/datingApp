import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // Receive a data from other component
  @Input() usersFromHomeComponent: any;

  // Push data for others components
  @Output() cancelRegister = new EventEmitter();
  Model: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.Model);
  }

  cancel(){    
    this.cancelRegister.emit(false);
  }
}
