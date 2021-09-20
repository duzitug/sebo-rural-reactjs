export interface Book {
    titulo: string;
    autor: string;
    descricao: string;
    periodo?: string;
    data_criacao_acuncio?: string;
    preco: number;
    url_foto: string;
    disciplina?: string;
    id_antigo?: number;
    course_id?: number;
    genre_id?: number;
    student_id: number;
    course?: {};
    genero?: {};
    student?: {};
}