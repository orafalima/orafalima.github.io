package jogo;

public enum Sexo {
    FEMININO("Feminino", "a"), MASCULINO("Masculino", "o"), INDEFINIDO("Indefinido", "o");

    private String sexo;
    private String pronome;

    Sexo(String sexo, String pronome) {
        setSexo(sexo);
        setPronome(pronome);
    }

    public String getNome() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
    
    public String getPronome() {
        return pronome;
    }

    public void setPronome(String pronome) {
        this.pronome = pronome;
    }
    
}