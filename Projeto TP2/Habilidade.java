package jogo;

public enum Habilidade {
    GUERREIRO_0("Arremesso de Lâmina", 10, 25),
    GUERREIRO_1("Corte Duplo", 20, 35),
    GUERREIRO_2("Golpe Sangrento", 30, 50),
    GUERREIRO_3("Tornado de Lâminas", 40, 65);
   
    private String nome;
    private int custo;
    private int dano;
    
    Habilidade(String nome, int custo, int dano) {
        this.nome = nome;
        this.custo = custo;
        this.dano = dano;
    }
    
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getCusto() {
        return custo;
    }

    public void setCusto(int custo) {
        this.custo = custo;
    }

    public int getDano() {
        return dano;
    }

    public void setDano(int dano) {
        this.dano = dano;
    }
    
}
