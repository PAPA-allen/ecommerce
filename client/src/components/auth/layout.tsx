import { Outlet } from "react-router-dom"


const AuthLayout = () => {
    return (
        <div className="flex min-h-screen w-full">
            <div className="hidden lg:flex justify-center items-center px-12 bg-blue-200 w-1/2">
                <div className="max-w-md space-y-6 text-center text-primary-foreground">
                    <h1 className="text-4xl tracking-tight font-extrabold">Welcome to Ecommerce</h1>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
                <Outlet/>
            </div>
        </div>
    )
}

export default AuthLayout
