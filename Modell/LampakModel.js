class LampakModel {
#allapotLista = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  constructor() {
    this.setAllapotLista();
  }
  setAllapotLista() {
    for (let i = 0; i < this.#allapotLista.length; i++) {
      this.#allapotLista[i] = Math.floor(Math.random() * 5 + 1);
      if (this.#allapotLista[i] > 1) {
        this.#allapotLista[i] = 0;
      }
    }
  }
}
export default LampakModel
