import { Component } from '@angular/core';
import { ValidationErrors, AbstractControl, FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { DataService } from './../../services/data/data.service';
import { UserModel } from './../../models/user.model';

import { HttpUserService } from './../../services/httpUser/http-user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

	public userForm: FormGroup;
	public errorMessage: string;

  constructor(
		public httpUserService: HttpUserService,
		private fb: FormBuilder,
		private dataService: DataService,) {
		this.createForm();
	}

	createForm(): void {
		this.userForm = this.fb.group({
			mail: ['latour.jimmy@gmail.com'],
			password: ['mxlaser9'],
		});
	}

	onSubmit(): void {
		let userModel: UserModel = new UserModel(this.userForm.value);

		this.httpUserService.auth(userModel).subscribe((data) => {
			if ( data.errors ) {
				this.errorMessage = data.message;
			} else {
				this.dataService.user = new UserModel(data);
				window.localStorage.setItem("user", JSON.stringify(this.dataService.user));
			}
		});
	}

}
