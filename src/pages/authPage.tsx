import { SigninForm } from "@/components/auth"
import { AuthLayout } from "@/components/layouts"

function AuthPage () {
    return(
        <AuthLayout home={true} >
            <SigninForm />
        </AuthLayout>
    )
}

export default AuthPage