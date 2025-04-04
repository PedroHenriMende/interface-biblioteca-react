import estilo from './Welcome.module.css';
import { useEffect, useState } from 'react';
import AlunoRequest from '../../fetch/AlunoRequest';
import TabelaAluno from '../TabelaAluno/TabelaAluno';
import TabelaLivro from '../TabelaLivro/TabelaLivro';
import TabelaEmprestimo from '../TabelaEmprestimo/TabelaEmprestimo';

function Welcome() {
    const [alunos, setAlunos] = useState('');

    useEffect(() => {
        try {
            const aluno = AlunoRequest.listarAlunos();
            setAlunos(JSON.stringify(aluno))
            console.table(alunos);
        } catch {
            console.error('Erro ao chamar API')
        }
    }, [alunos]);
    return (
        <main className={estilo.principal}>
            <h1>Bem-Vindo</h1>
        </main>
    );
}

export default Welcome;