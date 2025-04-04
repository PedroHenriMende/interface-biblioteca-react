import { SERVER_CFG } from '../appConfig'

class EmprestimoRequest {

    private serverURL;
    private routeListaEmprestimo;
    private routeCadastroEmprestimo;
    private routeAtualizarEmprestimo;
    private routeRemoverEmprestimo;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL; // Rota configurada no servidor
        this.routeListaEmprestimo = '/lista/emprestimos'; // Rota configurada no servidor
        this.routeCadastroEmprestimo = '/novo/emprestimo'; // Rota configurada no servidor
        this.routeAtualizarEmprestimo = '/atualiza/emprestimo'; // Rota configurada no servidor
        this.routeRemoverEmprestimo = '/remover/emprestimo'; // Rota configurada no servidor

    }

    // Função que busca a lista de alunos de API
    public async listarEmprestimo() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaEmprestimo}`);

            if (respostaAPI.ok) {
                const listaDeEmprestimo = await respostaAPI.json();
                return listaDeEmprestimo;
                }
        } catch (error) {
            console.error(`Error ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new EmprestimoRequest;
