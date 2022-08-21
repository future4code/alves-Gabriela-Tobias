# SISTEMA BANCÁRIO

## Estrutura de Dados

### Contas:

* `nome`
* `CPF` (único)
* `data` de nascimento (idade > 18)
* `saldo` (começa zerado)
* `extrato` (array de transações)      
   * `valor`
   * `data` 
   * `descrição`

## Funcionalidades

### Criar Conta

* Informar `nome`, `CPF` e `data` de nascimento

### Pegar Saldo

* Passando `nome` e `CPF`. 

### Adicionar saldo

* Passando `nome`, `CPF` e `valor` 

### Pagar Conta

* Passando `valor`, `descrição` e `data` de pagamento. 
* Caso ele não informe a `data`, considerar pagamento no mesmo dia. 
* Não pode haver agendamento para `data` passada
* Não pode haver pagamento sem que haja `saldo` suficiente.

### Transferência Interna

* Informar `nome`, `CPF`, `nome` do destinatário, `CPF` do destinatário e `valor`. 
* Não podem ser agendadas 
* Devem respeitar o `saldo` do usuário remetente.

## Requisitos Mínimos

* Criar conta, 
* Pegar contas e 
* Adicionar validação de idade. 
 
### Etapas de Desenvolvimento

1. Crie um **tipo** para representar uma `conta` para o usuário

2. Crie um array que armazene usuários na aplicação. Caso queira, pode iniciar este array com valores pré-definidos.

3. Crie mais um **tipo**: para representar as transações que serão salvas no extrato

4. Dentro da definição do usuário, crie um array que armazene as transações de um cliente.

5. Crie um endpoint  que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um array de usuários. Neste momento, não se preocupe, com as validações descritas nas funcionalidades.

6. Crie um método `GET` na entidade `users` que será responsável por pegar todos os usuários existentes no array de usuários.

7. Adicione, uma validação no item 1 (Criar conta): o usuário deve possuir mais do que 18 anos para conseguir se cadastrar. Caso não possua, exiba uma mensagem de erro.

## Desafios



1. Adicione mais uma validação na função do item 1 (Criar conta): verifiquem se o CPF passado já não está atrelado a alguma conta existente.

2. Crie um endpoint `get` que receba um CPF como parâmetro e retorne o saldo da conta do usuário dono daquele CPF. A informação deve ser igual ao que estiver salvo no sistema. Se for diferente, exiba uma mensagem de erro.

3. Crie um endpoint `put` que receba um nome, um CPF e um valor. Ele deve adicionar o valor ao saldo do usuário. O nome e o CPF devem ser iguais ao que estiver salvo no sistema Se algum dos dados for diferente, exiba uma mensagem de erro.

4. Altere o endpoint de adicionar saldo para que ela adicione um item ao extrato da conta do usuário: indicando o **valor** e a **data** da transação. A descrição para este tipo de item deve ser sempre a mesma ("Depósito de dinheiro"). A data pode ser salva como timestamp ou string.

5. Crie um endpoint `post` que permita ao cliente pagar uma conta. Ela deve receber uma **data** de vencimento da conta, uma **descrição**, um **valor** e o **CPF** do titular; e salvar uma transação no extrato da conta correspondente. O saldo do usuário **não** deve ser atualizado neste momento. Caso nenhuma **data** seja passada, considere que o pagamento deve ser feito **hoje**.

6. Crie um novo endpoint `put` responsável por atualizar o saldo de um cliente. Para isto, percorra os itens do extrato e atualize o saldo somente para as contas cujas datas são anteriores a hoje. 

7. Adicione uma validação ao endpoint de pagar conta: o usuário não pode colocar uma data que já passou.

8. Adicione mais uma validação ao endpoint de pagar conta: o usuário não pode tentar fazer um pagamento cujo valor seja maior do que seu saldo atual.

9. Crie um endpoint `post` para permitir a transferência entre contas internas do banco. O usuário deve informar o seu **nome**, o seu **CPF**, o **nome** do destinatário, o **CPF** do destinatário e o **valor**. Para cada transferência, criem um item do extrato para as duas contas envolvidas. Os saldos de ambas não devem ser atualizadas neste momento. (O endpoint de atualizar saldo, que vocês implementaram, já deve fazer isso).

10. Adicione uma validação para o endpoint de transferência entre contas: verificar se o **saldo** do usuário é **suficiente** para a transferência. Se não for, exiba uma mensagem de erro.

11. Adicione mais uma validação para a função de transferência entre contas: verificar se ambas as contas (do **remetente** e **destinatário**) existem. Exibam uma mensagem de erro, se não existir.