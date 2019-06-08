package jogo;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Escreva seu nome: ");
        String nome = sc.next();
        System.out.println("Selecione o seu sexo: ");
        System.out.println("[1] Masculino");
        System.out.println("[2] Feminino");
        System.out.println("[3] Indefinido");
        int sexoOpcao = sc.nextInt();
        Sexo sexo = null;
        switch (sexoOpcao) {
            case 1: sexo = Sexo.MASCULINO;
                    break;
            case 2: sexo = Sexo.FEMININO;
                    break;
            case 3: sexo = Sexo.INDEFINIDO;
                    break;
        }
        System.out.println("Selecione uma classe: ");
        System.out.println("[1] Guerreiro");
        System.out.println("[2] Guardião");
        System.out.println("[3] Sacerdote");
        System.out.println("[4] Mago");
        System.out.println("[5] Atirador");
        int classeOpcao = sc.nextInt();
        Classe classe = null;
        switch (classeOpcao) {
            case 1: classe = Classe.GUERREIRO;
                    break;
            case 2: classe = Classe.GUARDIAO;
                    break;
            case 3: classe = Classe.SACERDOTE;
                    break;
            case 4: classe = Classe.MAGO;
                    break;
            case 5: classe = Classe.ATIRADOR;
                    break;
        }
        Jogador jogador = new Jogador(nome, sexo, classe);
        System.out.println("==========");
        System.out.println("");
        System.out.println("Nome: " + jogador.getNome());
        System.out.println("Sexo: " + jogador.getSexo().getNome());
        System.out.println("Classe: " + jogador.getClasse().getNome());
        System.out.println("Nível: " + jogador.getNivel());
        System.out.println("Vida: " + jogador.getVida() + "%");
        System.out.println("Mana: " + jogador.getMana() + "%");
        System.out.println("Dano: " + jogador.getDano());
        System.out.println("Defesa: " + jogador.getDefesa());
        System.out.println("Habilidades: " + jogador.getHabilidade(0).getNome());
        sc.close();
    }
    

}
