// Exercício 1
// Letra A
/*  Resposta: 'Construtor' é método obrigatório no paradigma POO que define as regras de inicialização
de uma classe, ou seja, é onde definimos os parâmetros de criação de um dado componente da classe. */


/* Letra B
type Transaction = {
    description: string,
    value: number,
    date: string
};

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    };

    public getName(): string {
        return this.name;
    };

    public getCpf(): string {
        return this.cpf;
    };

    public getAge(): number {
        return this.age;
    };

    public getBalance(): number {
        return this.balance;
    };

    public getTransactions(): Transaction[] {
        return this.transactions;
    };
};

const firstUser: UserAccount = new UserAccount("111.111.111-11", "Gabriel", 25);

console.log(firstUser);

    Resposta: Ao executar a chamada, foi impresso uma única vez a mensagem no console.log. */

/* Letra C
    Resposta: Para acessar informações privadas é necessário que se crie métodos de classe
    do tipo públicos que chamem as informações necessárias. */


// <----------------------------------//-------------------------------->


// Exercício 2

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date
    };

    public getDescription(): string {
        return this.description;
    };

    public getValue(): number {
        return this.value;
    };

    public getDate(): string {
        return this.date;
    };
};

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number
    ) {
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    };

    public getCpf(): string {
        return this.cpf;
    };

    public getName(): string {
        return this.name;
    };

    public getAge(): number {
        return this.age;
    }

    public getBalance(): number {
        return this.balance;
    };

    public getTransactions(): Transaction[] {
        return this.transactions;
    };

    public setBalance(newValue: number): void {
        this.balance += newValue;
    }

    public setTransactions(newTransaction: Transaction): void {
        this.transactions = [...this.transactions, newTransaction]

        this.balance -= newTransaction.getValue()
    }
};

const myAccount = new UserAccount("111.111.111-11","Gabriel", 25)
const firstTransaction = new Transaction("Pagamento conta de luz", 200, "10/02/2023")
const secondTransaction = new Transaction("Pagamento conta de água", 100, "15/03/2023")

myAccount.setTransactions(firstTransaction)
myAccount.setTransactions(secondTransaction)
console.log(myAccount)


// <----------------------------------//-------------------------------->


// Exercício 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    };

    public getAccounts(): UserAccount[] {
        return this.accounts;
    };

    public setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount);
    };
};