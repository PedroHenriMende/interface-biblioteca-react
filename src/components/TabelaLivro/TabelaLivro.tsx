import { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import LivroRequests from '../../fetch/LivroRequest';
import { Button } from "primereact/button";

function TabelaLivro() {

    const [livros, setlivros] = useState([]);

    const paginatorLeft = <Button type="button" icon="pipi refresh" text />
    const paginatorRight = <Button type="button" icon="pipi refresh" text />

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const ListaDeAlunos = await LivroRequests.listarLivro();
                setlivros(ListaDeAlunos);
            } catch (error) {
                console.error(`Erro ao buscar alunos: ${error}`);
            }
        };
        fetchLivros();
    }, [livros]);

    return (
        <>
            <DataTable value={livros} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth:'50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="titulo" header="Titulo" style={{ width: '20%' }}></Column>
                <Column field="autor" header="Autor" style={{ width: '20%' }}></Column>
                <Column field="editora" header="Editora" style={{ width: '20%' }}></Column>
                <Column field="isbn" header="ISBN" style={{ width: '20%' }}></Column>
                <Column field="valorAquisicao" header="Valor" style={{ width: '20%' }} body={(rowData) => {return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', }).format(rowData.valorAquisicao);}}></Column>
            </DataTable>
        </>
    );
}

export default TabelaLivro;