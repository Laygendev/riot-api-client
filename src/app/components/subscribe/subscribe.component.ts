import { Component } from '@angular/core';
import { ValidationErrors, AbstractControl, FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { UserModel } from './../../models/user.model';

import { HttpUserService } from './../../services/httpUser/http-user.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {

	public userForm: FormGroup;
	public errorMessage: string;
	public inscriptionSuccess: boolean = false;

  constructor(
		public httpUserService: HttpUserService,
		private fb: FormBuilder) {
		this.createForm();
	}

	createForm(): void {
		this.userForm = this.fb.group({
			mail: ['', [this.checkMail]],
			pseudo: ['', [Validators.minLength(5)]],
			passwords: this.fb.group({
				password: ['', [Validators.minLength(5)]],
				repeatPassword: [''],
			}, {validator: this.checkRepeatPassword})
		});
	}

	checkMail(c: AbstractControl) {
		return Validators.email(c);
	}

	checkRepeatPassword(c: AbstractControl): { invalid: boolean } {
		if (c.get('password').value !== c.get('repeatPassword').value) {
			return {invalid: true};
		}
	}


	prepareSaveUser(): UserModel {
		const formModel = this.userForm.value;
		var dataModel = {
			mail: formModel.mail,
			pseudo: formModel.pseudo,
			password: formModel.passwords.password
		};

		var userData: UserModel = new UserModel(dataModel);

    return userData;
  }

	onSubmit(): void {
		let userModel: UserModel = this.prepareSaveUser();

		this.httpUserService.post(userModel).subscribe((data) => {
			if ( data.errors ) {
				this.errorMessage = data.message;
			}

			this.inscriptionSuccess = true;
		});
	}

}
