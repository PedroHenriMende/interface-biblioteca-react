import { SERVER_CFG } from '../appConfig'

class AlunoRequest {

    private serverURL;
    private routeListaAluno;
    private routeCadastroAluno;
    private routeAtualizarAluno;
    private routeRemoverAluno;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL; // Rota configurada no servidor
        this.routeListaAluno = '/lista/alunos'; // Rota configurada no servidor
        this.routeCadastroAluno = '/novo/aluno'; // Rota configurada no servidor
        this.routeAtualizarAluno = '/atualiza/aluno'; // Rota configurada no servidor
        this.routeRemoverAluno = '/remover/aluno'; // Rota configurada no servidor

    }

    // Função que busca a lista de alunos de API
    public async listarAlunos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaAluno}`);

            if (respostaAPI.ok) {
                const listaDeAlunos = await respostaAPI.json();
                return listaDeAlunos;
                }
        } catch (error) {
            console.error(`Error ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new AlunoRequest;
