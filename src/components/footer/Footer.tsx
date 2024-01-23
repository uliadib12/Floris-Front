export default function Footer() {
    return (
        <div className="bg-pink-500 text-white drop-shadow-lg">
            <div className="container mx-auto py-10 px-5">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl font-bold" id="contact">Contact Us</div>
                        <div className="text-sm">
                            <div>Phone: 081234567890</div>
                            <div>Email: kombet@gmail.com</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="text-2xl font-bold">Social Media</div>
                        <div className="text-sm flex gap-2">
                            <img className="cursor-pointer" src="/icons/facebook.svg" width={20} height={20} alt="facebook" style={{filter: 'invert(1)'}}/>
                            <img className="cursor-pointer" src="/icons/instagram.svg" width={20} height={20} alt="instagram" style={{filter: 'invert(1)'}}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between mt-5">
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl font-bold">Address</div>
                        <div className="text-sm">JL.Raden Imba Kesuma Ratu, Gang.Sukajadi, Nomor 3, Bandar Lampung</div>
                    </div>
                </div>
            </div>
        </div>
    )
}