// ---------------------------------------------- Herança --------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------- //

// Exercício 1
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    // Exercício 4 e 5
    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}


const newUser = new User("1", "murilo@labenu.com.br", "Murilo", "123456")
console.log(newUser.getId())
console.log(newUser.getEmail())
console.log(newUser.getName())
//a. Não é possível acessar o atributo password pois ele é privado e não é possível acessá-lo fora da classe.
//b. A mensagem do console aparece porque o construtor da classe User é chamado. E ela aparece apenas uma vez.

// Exercício 2
class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const newCustomer = new Customer("2", "joao@labenu.com.br", "João", "111111", "123456789")
//a. A mensagem "Chamando o construtor da classe Customer" é impressa apenas uma vez.
//b. A mensagem "Chamando o construtor da classe User" é impressa apenas uma vez, pois a classe User é herdada por Customer e o construtor da classe User é chamado primeiro.

// Exercício 3
console.log(newCustomer.getId())
console.log(newCustomer.getEmail())
console.log(newCustomer.getName())
console.log(newCustomer.purchaseTotal)
console.log(newCustomer.getCreditCard())
//a. Não é possível imprimir a propriedade password pois ela é privada e não é possível acessá-la fora da classe.

// Exercício 4
console.log(newCustomer.introduceYourself())

// Desafios
// Exercício 6

class Employee extends User {
    protected admissionDate: string
    protected baseSalary: number
    static BENEFITS_VALUE: number = 400

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: string,
        baseSalary: number
    ) {
        super(id, email, name, password)
        this.admissionDate = admissionDate
        this.baseSalary = baseSalary
    }

    public getAdmissionDate(): string {
        return this.admissionDate
    }

    public getBaseSalary(): number {
        return this.baseSalary
    }

    // Exercício 7 e 11
    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE
    }

}

const newEmployee = new Employee("3", "gabriela@labenu.com.br", "Gabriela", "123456", "01/01/2020", 5000)
console.log(newEmployee.getAdmissionDate())
console.log(newEmployee.getBaseSalary())
console.log(newEmployee.introduceYourself())
console.log(newEmployee.getId())
console.log(newEmployee.getEmail())
console.log(newEmployee.getName())
// Exercício 7
console.log(newEmployee.calculateTotalSalary())

// Exercício 8
class Seller extends Employee {
    private salesQuantity: number = 0
    static SELLING_COMMISSION: number = 5

    // Exercício 9
    public setSalesQuantity(quantity: number): void {
        this.salesQuantity = quantity
    }

    public getSalesQuantity(): number {
        return this.salesQuantity
    }

    // Exercício 10 e 11

    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE + (this.salesQuantity * Seller.SELLING_COMMISSION)
    }
}

const newSeller = new Seller("4", "marcos@labenu.com.br", "Marcos", "123456", "01/01/2020", 4000)
// Exercício 8 letra a. Para esssa instância de seller, os parâmetros necessários para o construtor são: id, email, name, password, admissionDate, baseSalary.
console.log(newSeller.getId())
console.log(newSeller.getEmail())
console.log(newSeller.getName())
console.log(newSeller.getBaseSalary())
console.log(newSeller.getAdmissionDate())
console.log(newSeller.calculateTotalSalary())
console.log(newSeller.introduceYourself())
// Exercício 8 letra b. Para esssa instância de seller, foi possível acessar todos os atributos e métodos da classe Employee, pois ela é herdada por Seller. Apenas não foi possível acessar a proriedade password, pois ela é privada e não é possível acessá-la fora da classe.

// Exercício 9
//a. Não é possível acessar o atributo salesQuantity pois ele é privado, apenas o método setSalesQuantity e o método getSalesQuantity são acessíveis.

console.log(newSeller.getSalesQuantity())
newSeller.setSalesQuantity(10)
console.log(newSeller.getSalesQuantity())


// Exercício 10
const newSeller2 = new Seller("5", "gabriela@labenu.com.br", "Gabriela", "123456", "01/01/2020", 4000)
newSeller2.setSalesQuantity(50)
console.log(newSeller2.calculateTotalSalary())

// Foi impreso o valor de baseSalary + 400 + (salesQuantity * 5), pois o método calculateTotalSalary foi sobrescrito na classe Seller.



// ---------------------------------------------- Polimorfismo ---------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------- //

// Exercício 1
export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const client: Client = {
    name: "Murilo",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2
    }
}

// Exercício 2
export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

//a. A classe Place é abstrata, pois não pode ser instanciada.
//b. para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

// Exercício 3
export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity;
    }

}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity;
    }

}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity;
    }

}

const residence = new Residence(2, "98765-432")
const commerce = new Commerce(3, "12345-678")
const industry = new Industry(6, "91011-123")
console.log(residence.getCep())
console.log(commerce.getCep())
console.log(industry.getCep())

// Exercício 4
class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        public cep: string,
        public residentsQuantity: number
    ) {
        super(residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }

}

//a. A classe ResidentialClient é filha de Residence, pois ela herda todos os atributos e métodos da classe Residence.

// Exercício 5
class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        public cep: string,
        public floorsQuantity: number
    ) {
        super(floorsQuantity, cep)
    }

    public getCnpj(): string {
        return this.cnpj;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.55;
    }

}

//a. As semelhanças entre a classe CommercialClient e a classe residentialClient são que a classe CommercialClient herda todos os atributos e métodos da classe Commerce, e a classe ResidentialClient herda todos os atributos e métodos da classe Residence. E ambas as classes são implementadas por uma interface Client.
//b. A diferença entre a classe CommercialClient e a classe ResidentialClient é que a classe CommercialClient herda o atributo floorsQuantity, pois é um comércio.

// Exercício 6
class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: string,
        public cep: string,
        public machinesQuantity: number
    ) {
        super(machinesQuantity, cep)
    }

    public getIndustryNumber(): string {
        return this.industryNumber;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }

}

//a. A classe IndustrialClient é filha de Industry, pois ela herda todos os atributos e métodos da classe Industry. E a classe IndustrialClient herda o atributo machinesQuantity, pois é uma indústria.
//b. A classe IndustrialClient implementa a interface Client, porque ela herda todos os atributos e métodos da interface Client para que possa ser usada como um cliente.
//c. Porque só queremos consumir os dados e informações de um cliente, não queremos setar nenhuma valor.

// Desafios
// Exercício 7
class ClientManager {
    private clients: Client[] = []

    public getClientsQuantity(): number {
        return this.clients.length
    }

    // Exercício 8
    public registerClient(client: Client): void {
        this.clients.push(client)
    }

    public calculateBillOfClient(registrationNumber: number): number {
        const client = this.clients.find(client => client.registrationNumber === registrationNumber)
        
        if (client) {
            return client.calculateBill()
        }

        return 0
    }

    public calculateTotalIncome(): number {
        let total = 0;

        this.clients.forEach(client => {
            total += client.calculateBill()
        })

        return total
    }

    public deleteClient(registrationNumber: number): Client[] {
        const clientIndex = this.clients.findIndex(client => client.registrationNumber === registrationNumber)

        if (clientIndex !== -1) {
            this.clients.splice(clientIndex, 1)
        }

        return this.clients
    }

}

// Exercício 8
const clientManager = new ClientManager();
const residentialClient = new ResidentialClient("Murilo", 1, 100, "123.456.789-00", "98765-432", 2)
const commercialClient = new CommercialClient("Gabriela", 2, 200, "987.654.321-00", "12345-678", 3)
const industrialClient = new IndustrialClient("João", 3, 300, "91.011.123-00", "91011-123", 6)
clientManager.registerClient(residentialClient)
clientManager.registerClient(commercialClient)
clientManager.registerClient(industrialClient)
console.log(clientManager.getClientsQuantity())


console.log(clientManager.calculateBillOfClient(1))
console.log(clientManager.calculateBillOfClient(2))
console.log(clientManager.calculateBillOfClient(3))
console.log(clientManager.calculateTotalIncome())

console.log(clientManager.deleteClient(2))