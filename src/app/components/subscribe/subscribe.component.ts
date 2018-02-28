import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserModel } from './../../models/user.model';

import { HttpUserService } from './../../services/httpUser/http-user.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

	public userForm: FormGroup;
	public mail: FormControl;
	public pseudo: FormControl;
	public password: FormControl;
	public repeatPassword: FormControl;

  constructor(
		public httpUserService: HttpUserService) {
		this.createFormControls();
		this.createForm();
	}

	ngOnInit() {}

	createFormControls(): void {
		this.mail  = new FormControl('', [this.checkMail]);
		this.pseudo = new FormControl('', Validators.required);
		this.password = new FormControl('', [Validators.required, this.checkPassword]);
		this.repeatPassword = new FormControl('', [Validators.required, this.checkPassword]);
	}

	createForm(): void {
		this.userForm = new FormGroup({
			mail: this.mail,
			pseudo: this.pseudo,
			password: this.password,
			repeatPassword: this.repeatPassword
		});
	}

	checkMail(c: AbstractControl) {
		return Validators.email(c);
	}

	checkPassword(control: FormControl): any {
		if ( ! control.parent ) {
			return {
				passwordEquals: true
			};
		}

		// if ( control.parent.controls.password.value == control.parent.controls.repeatPassword.value ) {
		// 	return {
		// 		passwordEquals: true
		// 	};
		// }

		return {
			passwordEquals: false
		};
	}

	registerUser(): void {
		let userModel: UserModel = new UserModel(this.userForm.value);

		this.httpUserService.post(userModel).subscribe((data) => {});
	}

}
