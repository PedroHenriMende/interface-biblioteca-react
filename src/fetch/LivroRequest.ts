import { SERVER_CFG } from '../appConfig'

class LivroRequest {

    private serverURL;
    private routeListaLivro;
    private routeCadastroLivro;
    private routeAtualizarLivro;
    private routeRemoverLivro;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL; // Rota configurada no servidor
        this.routeListaLivro = '/lista/livros'; // Rota configurada no servidor
        this.routeCadastroLivro = '/novo/livro'; // Rota configurada no servidor
        this.routeAtualizarLivro = '/atualiza/livro'; // Rota configurada no servidor
        this.routeRemoverLivro = '/remover/livro'; // Rota configurada no servidor

    }

    // Função que busca a lista de alunos de API
    public async listarLivro() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`);

            if (respostaAPI.ok) {
                const listaDeLivro = await respostaAPI.json();
                return listaDeLivro;
                }
        } catch (error) {
            console.error(`Error ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new LivroRequest;
