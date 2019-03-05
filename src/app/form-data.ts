export class FormData {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    university: string = '';
    degree: string = '';
    graduated: string = '';
    capability: string = '';
 
    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.university = '';
        this.degree = '';
        this.graduated = '';
        this.capability = '';
    }
}
 
export class Personal {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
}
 
export class Degree {
    university: string = '';
    degree: string = '';
    graduated: string = '';
}
export class Capability {
    capability: string = '';
}