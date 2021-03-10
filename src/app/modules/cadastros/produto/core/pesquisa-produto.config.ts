import { PesquisaConfig } from 'src/app/modules/pesquisa/models/pesquisa-config';

export const PESQUISA_PRODUTO_CONFIG: PesquisaConfig = {
    colunas: [
        {
            label: 'Código',
            nome: 'id'
        },
        {
            label: 'Descrição',
            nome: 'nome'
        },
        {
            label: 'Marca',
            nome: 'marca'
        },
        {
            label: 'Preço R$',
            nome: 'preco'
        },
    ],
    pathApi: 'produto'
};
