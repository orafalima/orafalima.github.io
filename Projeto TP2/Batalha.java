package jogo;

public class Batalha {
    private Jogador jogador;
    private Inimigo inimigo;
    
    Batalha(Jogador jogador, Inimigo inimigo) {
        this.jogador = jogador;
        this.inimigo = inimigo;
    }

    public void iniciaBatalha() {
        
    }
    
    public Jogador getJogador() {
        return jogador;
    }

    public void setJogador(Jogador jogador) {
        this.jogador = jogador;
    }

    public Inimigo getInimigo() {
        return inimigo;
    }

    public void setInimigo(Inimigo inimigo) {
        this.inimigo = inimigo;
    }

    public int valorAleatorio(int n) {
        int valor = (int) ((Math.random() * n) + 1);
        return valor;
    }
    
}
