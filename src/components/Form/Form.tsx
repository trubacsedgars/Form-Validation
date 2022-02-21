import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import './Form.css'
import {useState} from "react";

type InputFields = {
	 firstName: string
	 lastName: string
	 email: string
	 password: string
	 confirmPassword: string
	 age: number
}

const schema = yup.object({
	 firstName: yup.string().notRequired(),
	 lastName: yup.string().required('Last Name is required field'),
	 email: yup.string().required('Email is required field').email('Email is not valid'),
	 password: yup.string().required('Password is required field').min(3, 'Min value 3.').max(15, 'Max value 15.'),
	 confirmPassword: yup.string().required('Confirm password is required field')
			 .oneOf([yup.ref('password'), null], 'Passwords must match'),
	 // .test('Passwords-match', 'Passwords must match', function (value) {
	 //     return this.parent.password === value
	 // }),
	 age: yup.number().positive('Age must be a positive number').integer().typeError('This field should be numeric').notRequired(),
}).required()

export const Form = () => {

	 // const isHidden = false
	 const [isHidden, setIsHidden] = useState(false)

	 const {register, handleSubmit, formState: {errors}} = useForm<InputFields>({
			resolver: yupResolver(schema)
	 });

	 const onFormSubmit = (data: InputFields) => {
			console.log(data, 'Form is submitted')
	 }

	 return (
			 <div className="container">
					<form className="form"
								onSubmit={handleSubmit(onFormSubmit)}>
						 {/*{isHidden && (*/}
						 {isHidden && (
								 <div className="form__wrapper">
										<label className="form__label"
													 htmlFor="firstName">First Name:
										</label>
										<input
												hidden={isHidden}
												type="text"
												id="firstName"
												className="form__input"
												placeholder="Your First Name"
												{...register('firstName')}
										/>
										<span
												className="error_msg">{errors.firstName?.message}
                    </span>
								 </div>
						 )}
						 <div className="form__wrapper">
								<label className="form__label"
											 htmlFor="lastName">Last Name:
								</label>
								<input
										type="text"
										id="lastName"
										className="form__input"
										placeholder="Your Last Name"
										{...register('lastName')}
								/>
								<span
										className="error_msg">{errors.lastName?.message}
                    </span>
						 </div>
						 <div className="form__wrapper">
								<label className="form__label"
											 htmlFor="email">Email:
								</label>
								<input
										type="email"
										id="email"
										className="form__input"
										placeholder="Your Email"
										{...register('email')}
								/>
								<span
										className="error_msg">{errors.email?.message}
                    </span>
						 </div>
						 <div className="form__wrapper">
								<label className="form__label"
											 htmlFor="password">Password:
								</label>
								<input
										type="password"
										id="password"
										className="form__input"
										placeholder="Your Password"
										{...register('password')}
								/>
								<span
										className="error_msg">{errors.password?.message}
                    </span>
						 </div>
						 <div className="form__wrapper">
								<label className="form__label"
											 htmlFor="confirmPassword">Confirm Password:
								</label>
								<input
										type="password"
										id="confirmPassword"
										className="form__input"
										placeholder="Confirm your Password"
										{...register('confirmPassword')}
								/>
								<span
										className="error_msg">{errors.confirmPassword?.message}
                    </span>
						 </div>
						 <div className="form__wrapper">
								<label className="form__label"
											 htmlFor="age">Confirm Password:
								</label>
								<input
										type="number"
										id="age"
										className="form__input"
										placeholder="Your age"
										{...register('age')}
								/>
								<span
										className="error_msg">{errors.age?.message}
                    </span>
						 </div>
						 <div className="form__button-wrapper">
								<button className="form__button">
									 Submit
								</button>
						 </div>
					</form>
			 </div>
	 )
}
