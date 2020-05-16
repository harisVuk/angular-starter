import { Component, OnInit, ViewChildren, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { GenericValidator } from '../../helpers/validators/genericValidator';
import { Observable , fromEvent, merge } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/index';
import { IUserLogin } from '../../models/user/IUserLogin';
import * as userActions from '../../store/user/user.actions';
import { ValidatorsPatern } from '../../helpers/validators/validator';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit, AfterViewInit  {


    displayMessage: { [key: string]: string } = {};
    errorMessage$: Observable<string>;
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
    signinForm: FormGroup;
    user: IUserLogin;

    constructor(private store: Store<IAppState>,
                private fb: FormBuilder) {

        this.validationMessages = {
            email: {
                required: 'Email is required.',
                emailValid: 'Please enter a valid email address.'
            },
            password: {
                required: 'Password is required.',
                minlength: 'Password must be at least three characters.',
                maxlength: 'Password cannot exceed 20 characters.'
            },

        };

        this.genericValidator = new GenericValidator(this.validationMessages);
     }
    private genericValidator: GenericValidator;
    private validationMessages: { [key: string]: { [key: string]: string } };



    login(): void {
        const credentials: IUserLogin = Object.assign({}, this.signinForm.value);
        if (credentials) {
            this.store.dispatch(new userActions.Login(credentials));
        }
    }

    ngAfterViewInit(): void {
        const controlBlurs: Observable<any>[] = this.formInputElements
        .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

            merge(this.signinForm.valueChanges, ...controlBlurs).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.signinForm);
        });
    }


    ngOnInit(): void {
        this.store.dispatch(new userActions.Clear());
        this.signinForm = this.fb.group({
            email: ['', [Validators.required, ValidatorsPatern.vaildEmail()]],
            password: ['', [Validators.required, Validators.minLength(3),
                Validators.maxLength(20) ]],
        });
        this.errorMessage$ = this.store.pipe(select(state => state.user.error));
    }

}
