export default class AddressModel {
    name: string;
    email: string;
    phone: string;
    address: string;
    day: string;
    time: string;

    constructor(name: string, email: string, phone: string, address: string, day: string, time: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.day = day;
        this.time = time;
    }

    static Empty(): AddressModel {
        return new AddressModel("", "", "", "", "", "");
    }
}