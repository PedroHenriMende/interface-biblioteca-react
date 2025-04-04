import { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import EmprestimoRequest from "../../fetch/EmprestimoRequest";

function TabelaEmprestimo() {

    const [emprestimos, setEmprestimos] = useState([]);

    const paginatorLeft = <Button type="button" icon="pipi refresh" text />
    const paginatorRight = <Button type="button" icon="pipi refresh" text />

    useEffect(() => {
        const fetchEmprestimos = async () => {
            try {
                const ListaDeEmprestimos = await EmprestimoRequest.listarEmprestimo();
                setEmprestimos(ListaDeEmprestimos);
            } catch (error) {
                console.error(`Erro ao buscar alunos: ${error}`);
            }
        };
        fetchEmprestimos();
    }, [emprestimos]);

    return (
        <>
            <DataTable value={emprestimos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth:'50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="aluno.nome" header="Nome Aluno" style={{ width: '20%' }}></Column>
                <Column field="livro.titulo" header="Nome Livro" style={{ width: '20%' }}></Column>
                <Column field="dataEmprestimo" header="Data Emprestimos" style={{ width: '20%' }}></Column>
                <Column field="dataDevolucao" header="Data de Devolução" style={{ width: '20%' }}></Column>
                <Column field="statusEmprestimo" header="Status" style={{ width: '20%' }}></Column>
            </DataTable>
        </>
    );
}

export default TabelaEmprestimo;