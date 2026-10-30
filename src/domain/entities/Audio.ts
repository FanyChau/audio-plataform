/**
 * Contrato (Interface) que define a estrutura de um Audio na nossa plataforma.
 * Aplica o conceito de Tipagem Forte do TypeScript.
 */

export interface Audio {
    id: string;
    titulo: string;
    artista: string;
    duracaoEmSegundos: number;
    urlFicheiro: string;
    capaUrl: string;
    categoria: 'musica' | 'podcast' | 'estudo'; // Unio type: aceita apenas estas opcoes
}