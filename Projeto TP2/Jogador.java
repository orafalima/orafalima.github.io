package jogo;

import java.util.ArrayList;

public class Jogador extends Personagem {
    private String nome;
    private Classe classe;
    private Sexo sexo;
    private int nivel;
    private int vida;
    private int mana;
    private int dano;
    private int defesa;
    private ArrayList<Habilidade> habilidades;
    
    Jogador(String nome, Sexo sexo, Classe classe) {
        super(nome, sexo, classe);
        habilidades = new ArrayList<>();
        this.habilidades.add(classe.getHabilidades().get(0));
    }
    
    public void addHabilidade() {
        int n = habilidades.size();
        habilidades.add(classe.getHabilidades().get(n));
    }
    
    public Habilidade getHabilidade(int n) {
        return habilidades.get(n);
    }

    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public Classe getClasse() {
        return classe;
    }
    
    public void setClasse(Classe classe) {
        this.classe = classe;
    }
    
    public Sexo getSexo() {
        return sexo;
    }
    
    public void setSexo(Sexo sexo) {
        this.sexo = sexo;
    }
    
    public int getNivel() {
        return nivel;
    }
    
    public void setNivel(int nivel) {
        this.nivel = nivel;
    }
    
    public int getVida() {
        return (int)Math.round(100.0 / this.getClasse().getVida() * this.vida);
    }
    
    public void setVida(int vida) {
        this.vida = vida;
    }
    
    public int getMana() {
        return (int)Math.round(100.0 / this.getClasse().getMana() * this.mana);
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

