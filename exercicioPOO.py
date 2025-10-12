class Estudante:
    def __init__(self, matricula, nome, curso, periodo):
        self.matricula = matricula
        self.nome = nome
        self.curso = curso
        self.periodo = periodo

    def __str__(self):
        return f"[{self.matricula}] {self.nome} - {self.curso} (Período {self.periodo})"


class Turma:
    def __init__(self, codigo):
        self.codigo = codigo
        self.estudantes = {}

    def adicionar_estudante(self, estudante):
        if estudante.matricula in self.estudantes:
            print(f"Estudante {estudante.nome} já está matriculado.\n")
        else:
            self.estudantes[estudante.matricula] = estudante
            print(f"{estudante.nome} matriculado na turma {self.codigo}.\n")

    def listar_estudantes(self):
        if not self.estudantes:
            print("Nenhum estudante matriculado.\n")
        else:
            print("\n--- Lista de Estudantes ---")
            for est in self.estudantes.values():
                print(est)
            print()

    def obter_estudante(self, matricula):
        return self.estudantes.get(matricula, None)


def menu():
    turma = Turma("INF-101")

    while True:
        print("Menu:")
        print("1. Inserir aluno")
        print("2. Listar alunos matriculados")
        print("3. Buscar aluno por matrícula")
        print("4. Exit")
        choice = input("Digite sua opção: ")

        if choice == "1":
            matricula = input("Matrícula: ")
            nome = input("Nome: ")
            curso = input("Curso: ")
            periodo = input("Período: ")
            estudante = Estudante(matricula, nome, curso, periodo)
            turma.adicionar_estudante(estudante)

        elif choice == "2":
            turma.listar_estudantes()

        elif choice == "3":
            matricula = input("Digite a matrícula para buscar: ")
            est = turma.obter_estudante(matricula)
            if est:
                print(est, "\n")
            else:
                print("Estudante não encontrado.\n")

        elif choice == "4":
            print("Saindo...")
            break
        else:
            print("Opção inválida.\n")


# Executar o menu
menu()
