import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DataService } from '@app/services/data/data.service';
import { HttpUserService } from '@app/modules/user/services/http-user/http-user.service';

import { UserModel } from '@app/modules/user/models/user.model';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	public userForm: FormGroup;
	public errorMessage: string;

  constructor(
		public router: Router,
		public httpUserService: HttpUserService,
		private fb: FormBuilder,
		private dataService: DataService) {
		this.createForm();
	}

	createForm(): void {
		this.userForm = this.fb.group({
			mail: [],
			password: [],
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

				if ( this.dataService.user.roles.indexOf( 'administrator') != -1 ) {
					this.dataService.isAdmin = true;
				}

				this.router.navigate(['/']);
			}
		});
	}

}
