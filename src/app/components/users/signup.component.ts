import { Component, OnInit, ViewChildren, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { GenericValidator } from '../../helpers/validators/genericValidator';
import { ValidatorsPatern } from '../../helpers/validators/validator';
import { Observable , fromEvent, merge } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/index';
import { IUserRegistration } from '../../models/user/IUserRegistration';
import * as userActions from '../../store/user/user.actions';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit, AfterViewInit {

    displayMessage: { [key: string]: string } = {};
    errorMessage$: Observable<string>;
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
    registerForm: FormGroup;
    user: IUserRegistration;

    constructor(private store: Store<IAppState>,
                private fb: FormBuilder) {

        this.validationMessages = {
            firstname: {
                required: 'FirstName is required.',
                minlength: 'FirstName must be at least three characters.',
                maxlength: 'FirstName cannot exceed 20 characters.'
            },
            lastname: {
                required: 'LastName is required.',
                minlength: 'LastName must be at least three characters.',
                maxlength: 'LastName cannot exceed 20 characters.'
            },
            email: {
                required: 'Email is required.',
                emailValid: 'Please enter a valid email address.'
            },
            password: {
                required: 'Password is required.',
                minlength: 'Password must be at least three characters.',
                maxlength: 'Password cannot exceed 20 characters.'
            }
        };

        this.genericValidator = new GenericValidator(this.validationMessages);
     }
    private genericValidator: GenericValidator;
    private validationMessages: { [key: string]: { [key: string]: string } };


   ngAfterViewInit(): void {
        const controlBlurs: Observable<any>[] = this.formInputElements
        .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

            merge(this.registerForm.valueChanges, ...controlBlurs).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.registerForm);
        });
    }


    ngOnInit(): void {
        this.store.dispatch(new userActions.Clear());
        this.registerForm = this.fb.group({
            firstname: ['', [Validators.required, Validators.minLength(3),
                        Validators.maxLength(20)]],
            lastname: ['', [Validators.required, Validators.minLength(3),
                        Validators.maxLength(20)]],
            email: ['', [Validators.required, ValidatorsPatern.vaildEmail()]],
            password: ['', [ Validators.required, Validators.minLength(3),
                        Validators.maxLength(20)]]
        });
        this.errorMessage$ = this.store.pipe(select(state => state.user.error));
    }


    register(): void {
        const user = Object.assign({}, this.user, this.registerForm.value);
        if (user) {
            this.store.dispatch(new userActions.Register(user));
        }
    }

}
