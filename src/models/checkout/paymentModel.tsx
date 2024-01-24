export default class PaymentModel {
    id: string;
    method: string;
    description: string;
    icon: string;

    constructor(id: string, method: string, description: string, icon: string) {
        this.id = id;
        this.method = method;
        this.description = description;
        this.icon = icon;
    }
}