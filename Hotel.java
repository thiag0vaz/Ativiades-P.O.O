public class Hotel {
    private int quantReservas;

    public Hotel(int quantReservasInicial) {
        this.quantReservas = quantReservasInicial;
    }

    public void adicionarReserva() {
        quantReservas++;
    }

    public int getQuantReservas() {
        return quantReservas;
    }
}
