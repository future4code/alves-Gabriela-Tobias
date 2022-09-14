export enum ROLE_TYPE {
    ADMIN = 'admin',
    NORMAL = 'normal'
}

// Exercício 3 b) - criação de um novo tipo de dados, incluindo role para armazenar os dados de autenticação
export interface authenticationData {
    id: string
    role: string
} 