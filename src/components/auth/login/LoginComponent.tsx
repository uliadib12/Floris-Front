import { useForm, type SubmitHandler } from "react-hook-form";

type LoginInputs = {
    email: string;
    password: string;
}

export default function LoginComponent() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputs>()

    const onSubmit
    : SubmitHandler<LoginInputs> = 
    (data: LoginInputs) => {
        console.log(data);
    }

    return (
    <div className="p-4 w-96">
        <img
        style={
            {
                filter: "brightness(0) saturate(100%) invert(54%) sepia(78%) saturate(4692%) hue-rotate(305deg) brightness(97%) contrast(90%)"
            }
        }
        src="/icon.png" alt="Logo" 
        className="w-20 mx-auto"/>
        
        <h1 className="text-3xl text-center font-bold">Login</h1>
        <h2 className="text-center">Welcome back!</h2>
        <br/>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input 
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                type="email" name="email" id="email" placeholder="Email" className="border border-gray-400 rounded-md p-2"/>
                {
                    errors.email?.type === 'required' && <span className="text-red-500">Email is required</span>
                }
                {
                    errors.email?.type === 'pattern' && <span className="text-red-500">Email is not valid</span>
                }
            </div>
            <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input {...register("password", { required: true , minLength: 8})}
                type="password" name="password" id="password" placeholder="Password" className="border border-gray-400 rounded-md p-2"/>
                {
                    errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>
                }
                {
                    errors.password?.type === 'minLength' && <span className="text-red-500">Password must be at least 8 characters</span>
                }
            </div>
            <div className="flex flex-col mt-2">
                <input type="submit" value="Login" className="bg-pink-500 hover:bg-pink-600 cursor-pointer text-white rounded-md p-2"/>
            </div>
            <div className="flex flex-col mt-2">
                <a href="/auth/register" className="text-center text-blue-500 hover:text-blue-600">Don't have an account? Register here!</a>
            </div>
        </form>
    </div>
    );
}