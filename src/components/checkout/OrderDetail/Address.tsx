import { useContext } from "react";
import { useForm, type SubmitHandler } from "react-hook-form"
import { CheckoutContext } from "../../../hooks/checkout/createCheckoutContext";

type AddressInputs = {
    name: string;
    email: string;
    phone: string;
    address: string;
    day: string;
    time: string;
}

export default function Address() {
    const [checkoutState, setCheckoutState] = useContext(CheckoutContext);

    const { register, handleSubmit, formState: { errors } } = useForm<AddressInputs>();

    const onSubmit: SubmitHandler<AddressInputs> = data => {
        let allowOrderMenu = 1;
        if(checkoutState.allowOrderMenu >= allowOrderMenu){
            allowOrderMenu = checkoutState.allowOrderMenu;
        }

        const address = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            day: data.day,
            time: data.time
        }
        setCheckoutState({...checkoutState, orderMenu: 1, allowOrderMenu, address: address});
    };


    return (
        <div className="flex flex-col gap-4 p-4">
            <h1 className="text-2xl font-bold">Address</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        {
                            errors.name?.type === "required" && <span className="text-red-500">This field is required</span>
                        }
                        <input 
                        {...register("name", { required: true })}
                        defaultValue={checkoutState?.address?.name}
                        type="text" name="name" id="name" className="border border-gray-400 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        {
                            errors.email?.type === "required" && <span className="text-red-500">This field is required</span>
                        }
                        {
                            errors.email?.type === "pattern" && <span className="text-red-500">Invalid email address</span>
                        }
                        <input
                        {...register("email", { required: true , pattern: /^\S+@\S+$/i })} 
                        defaultValue={checkoutState?.address?.email}
                        type="email" name="email" id="email" className="border border-gray-400 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone">Phone</label>
                        {
                            errors.phone?.type === "required" && <span className="text-red-500">This field is required</span>
                        }
                        {
                            errors.phone?.type === "pattern" && <span className="text-red-500">Invalid phone number</span>
                        }
                        <input 
                        {...register("phone", { required: true , pattern: /^[0-9]+$/i })}
                        defaultValue={checkoutState?.address?.phone}
                        type="text" name="phone" id="phone" className="border border-gray-400 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="address">Address</label>
                        {
                            errors.address?.type === "required" && <span className="text-red-500">This field is required</span>
                        }
                        <input
                        {...register("address", { required: true })}
                        defaultValue={checkoutState?.address?.address}
                        type="text" name="address" id="address" className="border border-gray-400 rounded-md p-2"></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="day">Day</label>
                        {
                            errors.day?.type === "required" && <span className="text-red-500">This field is required</span>
                        }
                        <input
                        {...register("day", { required: true })}
                        defaultValue={checkoutState?.address?.day}
                        type="date" name="day" id="day" className="border border-gray-400 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="time">Time</label>
                        {
                            errors.time?.type === "required" && <span className="text-red-500">This field is required</span>
                        }
                        <input
                        {...register("time", { required: true })}
                        defaultValue={checkoutState?.address?.time}
                        type="time" name="time" id="time" className="border border-gray-400 rounded-md p-2" />
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <input 
                    type="submit"
                    value="Save"
                    className="bg-pink-500 text-white px-4 py-2 rounded-md cursor-pointer" />
                </div>
            </form>
        </div>
    )
}