
import { useMutation } from "@tanstack/react-query";
import * as Yup from 'yup';
import { useFormik } from 'formik'; 
import toast from "react-hot-toast";
import Cookies from "js-cookie" 
import { useState } from "react";
import { unsecureHttpService } from "@/helper/services/httpService";
import type { ILogin } from "@/helper/models/auth";

const useAuth = () => {
 
    const [initialTime, setInitialTime] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const [code, setCode] = useState("");  


    const { mutate: signIn, isPending: signInPending } = useMutation({
        mutationFn: (data: ILogin) => unsecureHttpService.post(`/auth/login`, data),
        onError: (error: any) => {   
            toast.error(error?.message ?? 'Error Occurred')
        },
        onSuccess: (data: any) => { 
            toast.success('Login Successful') 
            Cookies.set("access_token", data?.data?.access_token); 

        },
    });


    // const { mutate: signUp, isPending: signupPending, isSuccess: signupSuccess } = useMutation({
    //     mutationFn: (data: any) => unsecureHttpService.post(`${URLS.SIGNUP}`, data),
    //     onError: (error: any) => {
    //         toaster.create({
    //             description: error.response.data ?? "Error Occurred",
    //             type: "error",
    //             closable: true
    //         })
    //     },
    //     onSuccess: (data) => {
    //         toaster.create({
    //             title: "SignUp Successful'",
    //             type: "success",
    //             closable: true
    //         })
    //         router.push(`/auth/signup?email=${formikSignUp.values.email}`)
    //     },
    // });


    // const { mutate: verifyToken, isPending: loadingVerify, } = useMutation({
    //     mutationFn: (data: { token: string }) => unsecureHttpService.post(`${URLS.VERIFY_TOKEN}`, data),
    //     onError: (error: any) => {
    //         toaster.create({
    //             title: error.response.data.statusDescription ?? "Error Occurred",
    //             type: "error",
    //             closable: true
    //         })
    //     },
    //     onSuccess: (data) => {
    //         toaster.create({
    //             title: "Verification successful'",
    //             type: "success",
    //             closable: true
    //         })

    //         if (pathname?.includes("forgot")) {
    //             router.replace(`/auth/forgot?code=${code}`)
    //         } else {
    //             router.replace(`/auth`)
    //         }
    //     }
    // });

    // const { isPending: sendingVerify, mutate: sendVerify, isSuccess: sendSuccess } = useMutation({
    //     mutationFn: (data: string) => unsecureHttpService.post(`${URLS.SEND_VERIFICATION_EMAIL}`, {
    //         userEmail: data,
    //         emailType: pathname?.includes("forgot") ? 2 : 1,
    //     }),
    //     onError: (error: any) => {
    //         toaster.create({
    //             title: error.response.data.error ?? "Error Occurred",
    //             type: "error",
    //             closable: true
    //         })
    //     },
    //     onSuccess: () => {
    //         toaster.create({
    //             title: "A verification code has been sent to your email'",
    //             type: "success",
    //             closable: true
    //         })
    //         if (pathname?.includes("forgot")) {
    //             router.push(`/auth/forgot?email=${formikEmail?.values?.email}}`)
    //         }
    //         setStartTimer(true)
    //         setInitialTime(59)
    //     }
    // });


    // const { mutate: changePassword, isPending: loadingPassword } = useMutation({
    //     mutationFn: (data: any) => unsecureHttpService.put(`${URLS.RESET_PASSWORD}`, data),
    //     onError: (error: any) => {
    //         toaster.create({
    //             title: error.response.data.error ?? "Error Occurred",
    //             type: "error",
    //             closable: true
    //         })
    //     },
    //     onSuccess: (data) => {
    //         toaster.create({
    //             title: "Password Reset Successful",
    //             type: "success",
    //             closable: true
    //         })
    //         router.push('/auth');
    //     }
    // });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (data: ILogin) => {
            signIn(data)
        },
    });

    // const formikSignUp = useFormik({
    //     initialValues: {
    //         username: "",
    //         password: "",
    //         firstName: "",
    //         lastName: "",
    //         dob: '',
    //         email: "",
    //         confirmPassword: "",
    //         phone: ""
    //     },
    //     validationSchema: Yup.object({
    //         username: Yup.string().required('Required'),
    //         password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    //         confirmPassword: Yup.string()
    //             .oneOf([Yup.ref('password')], 'Passwords must match')
    //             .required('Required'),
    //         firstName: Yup.string().required('Required'),
    //         lastName: Yup.string().required('Required'),
    //         dob: Yup.string().required('Required'),
    //         email: Yup.string().email('Invalid email').required('Required'),
    //     }),
    //     onSubmit: (data: IRegister) => {
    //         signUp({
    //             username: data?.username,
    //             password: data?.password,
    //             firstName: data?.firstName,
    //             lastName: data?.lastName,
    //             dob: data?.dob,
    //             email: data?.email,
    //             confirmPassword: data?.confirmPassword,
    //             "data": {
    //                 "mobilePhone": {
    //                     "objectPublic": true,
    //                     "value": data?.phone
    //                 }
    //             }  
    //         })
    //     },
    // }); 

    // const formikEmail = useFormik({
    //     initialValues: {
    //         email: "",
    //     },
    //     validationSchema: Yup.object({
    //         email: Yup.string().email('Invalid email').required('Required'),
    //     }),
    //     onSubmit: (data: any) => {
    //         sendVerify(data?.email)
    //     },
    // });

    // const formikPassword = useFormik({
    //     initialValues: {
    //         password: "",
    //         confirmPassword: "",
    //     },
    //     validationSchema: Yup.object({
    //         password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    //         confirmPassword: Yup.string()
    //             .oneOf([Yup.ref('password')], 'Passwords must match')
    //             .required('Required'),
    //     }),
    //     onSubmit: (data: {
    //         password: string,
    //         confirmPassword: string,
    //     }) => {
    //         changePassword({
    //             password: data?.password,
    //             confirmPassword: data?.confirmPassword,
    //             token: codequery
    //         })
    //     },
    // });


    return {
        signInPending,
        formik,
        // formikSignUp,
        // verifyToken,
        // loadingVerify,
        // signupPending,
        // signupSuccess,
        startTimer,
        initialTime,
        // formikEmail,
        setInitialTime,
        setStartTimer,
        // sendingVerify,
        // sendVerify,
        // sendSuccess,
        // formikPassword,
        setCode,
        code,
        // loadingPassword
    }

}

export default useAuth