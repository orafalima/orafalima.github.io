package jogo;

import java.util.ArrayList;

public enum Classe {
    GUERREIRO("Guerreiro", 300, 150, 30, 15,
              Habilidade.GUERREIRO_0, Habilidade.GUERREIRO_1,
              Habilidade.GUERREIRO_2, Habilidade.GUERREIRO_3),
    GUARDIAO("Guardião", 400, 100, 10, 20),
    SACERDOTE("Sacerdote", 200, 200, 15, 5),
    MAGO("Mago", 150, 250, 20, 5),
    ATIRADOR("Atirador", 200, 150, 20, 10);
    
    private String nome;
    private int vida;
    private int mana;
    private int dano;
    private int defesa;
    private ArrayList<Habilidade> habilidades;
    
    private Classe(String nome, int vida, int mana, int dano, int defesa, Habilidade...habilidades) {
        setNome(nome);
        setVida(vida);
        setMana(mana);
        setDano(dano);
        setDefesa(defesa);
        setHabilidades();
        for (Habilidade habilidade : habilidades) {
            this.habilidades.add(habilidade);
        }
    }
    
    public void setHabilidades() {
        this.habilidades = new ArrayList<>();
    }
    
    public ArrayList<Habilidade> getHabilidades() {
        return habilidades;
    }
    
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public int getVida() {
        return vida;
    }

    public void setVida(int vida) {
        this.vida = vida;
    }
    
    public int getMana() {
        return mana;
    }

    public void setMana(int mana) {
        this.mana = mana;
    }
    
    public int getDano() {
        return dano;
    }

    public void setDano(int dano) {
        this.dano = dano;
    }

    public int getDefesa() {
        return defesa;
    }

    public void setDefesa(int defesa) {
        this.defesa = defesa;
    }

}
