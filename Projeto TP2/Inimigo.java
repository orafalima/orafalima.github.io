package jogo;

public class Inimigo extends Personagem {
    private String nome;
    private Classe classe;
    private Sexo sexo;
    private int nivel;
    private int vida;
    private int mana;
    private int dano;
    private int defesa;
    
    Inimigo(String nome, Sexo sexo, Classe classe) {
        super(nome, sexo, classe);
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