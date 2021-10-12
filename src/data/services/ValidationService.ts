export const ValidationService = {
    cep(cep = ''): boolean {
        /* Remove tudo que não for número */
        return cep.replace(/\D/g, '').length === 8;
    }
}