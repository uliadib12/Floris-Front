import { useForm, type SubmitHandler } from "react-hook-form";

type RegisterInputs = {
    email: string;
    password: string;
    password_confirmation: string;
}

export default function RegisterComponent() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterInputs>()

    const onSubmit : SubmitHandler<RegisterInputs> = 
    (data: RegisterInputs) => {
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
            
            <h1 className="text-3xl text-center font-bold">Register</h1>
            <h2 className="text-center">Register to create new account</h2>
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
                    <input
                    {...register("password", { required: true , minLength: 8})}
                    type="password" name="password" id="password" placeholder="Password" className="border border-gray-400 rounded-md p-2"/>
                    {
                        errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>
                    }
                    {
                        errors.password?.type === 'minLength' && <span className="text-red-500">Password must be at least 8 characters</span>
                    }
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Confirm Password</label>
                    <input
                    {...register("password_confirmation", { required: true , minLength: 8, validate: (value) => value === watch('password')})}
                    type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" className="border border-gray-400 rounded-md p-2"/>
                    {
                        errors.password_confirmation?.type === 'required' && <span className="text-red-500">Password confirmation is required</span>
                    }
                    {
                        errors.password_confirmation?.type === 'minLength' && <span className="text-red-500">Password confirmation must be at least 8 characters</span>
                    }
                    {
                        errors.password_confirmation?.type === 'validate' && <span className="text-red-500">Password confirmation must match</span>
                    }
                </div>
                <div className="flex flex-col mt-2">
                    <input type="submit" value="Register" className="bg-pink-500 hover:bg-pink-600 cursor-pointer text-white rounded-md p-2"/>
                </div>
                <div className="flex flex-col mt-2">
                    <a href="/auth/login" className="text-center text-blue-500 hover:text-blue-600">Already have an account? Login</a>
                </div>
            </form>
        </div>
    );
}