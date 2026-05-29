CREATE TABLE IF NOT EXISTS requerimentos (
    id SERIAL PRIMARY KEY,
    aluno VARCHAR(100) NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    status VARCHAR(50) DEFAULT 'Pendente'
);

INSERT INTO requerimentos (aluno, tipo) VALUES ('José Lucas', 'Revisão de Menção');
INSERT INTO requerimentos (aluno, tipo) VALUES ('Nathalya', 'Trancamento de Matrícula');