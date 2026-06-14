'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import FooterLink from '@/components/form/FooterLink'
import InputField from '@/components/form/InputField'
import { Button } from '@/components/ui/button'
import CountrySelectField from '@/components/form/CountrySelectField';
import SelectField from '@/components/form/SelectField';
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/contants';

function SignUp() {
    const router = useRouter()
    const { 
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting }
     } = useForm<SignUpFormData>({
        defaultValues: {
            email: '',
            password: '',
            fullName: '',
            country: 'IN',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology'
        },
        mode: 'onBlur'
    })

    const onSubmit = async (data: SignInFormData) => {
        try {
            
        } catch (error) {
            console.error(error)
            toast.error('Sign up failed', {
                description: error instanceof Error ? error.message : 'Failed to create an account.'
            })
        }
    }

    return (
        <>
            <h1 className='form-title'>Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <InputField
                    name='fullName'
                    label='Full Name'
                    placeholder='Vincent Morgan'
                    register={register}
                    error={errors.fullName}
                    validation={{ required: 'Full name is required', minLength: 2 }}
                />
                <InputField
                    name='email'
                    label='Email'
                    placeholder='mohitkumarraj00@gmail.com'
                    register={register}
                    error={errors.email}
                    validation={{ required: 'Email is required', pattern: /^\w+@\w+\.\w+$/ }}
                />
                <InputField
                    name='password'
                    label='Password'
                    placeholder='Enter your password'
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required', minLength: 8 }}
                />
                <CountrySelectField
                    name='country'
                    label='Country'
                    control={control}
                    error={errors.country}
                    required
                />
                <SelectField
                    name='investmentGoals'
                    label='Investment Goals'
                    placeholder='Select your investment goal'
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                    />
                <SelectField
                    name='riskTolerance'
                    label='Risk Tolerance'
                    placeholder='Select your risk level'
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                    
                    />
                <SelectField
                    name='preferredIndustry'
                    label='Preferred Industry'
                    placeholder='Select your preferred industry'
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                
                />
                <Button type='button' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                    {isSubmitting ? 'Creating Account...' : 'Start Your Investing Journey'}
                </Button>
                <FooterLink 
                    text="Already have an account?"
                    linkText='Sign In'
                    href='/sign-in'
                />
            </form>
        </>
    )
}

export default SignUp