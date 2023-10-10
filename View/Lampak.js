import LampaElem from "./LampaElem.js";
import LampakModel from "../Modell/LampakModel.js";

class Lampak {
  #db = 0;
  #allapotLista = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  #meret = 9;
  #lepes = 0;
  constructor() {
    console.log("Lampak");
    const ARTICLE = $("article");
    this.setSzin();
    for (let i = 0; i < this.#meret; i++) {
      const lampa = new LampaElem(ARTICLE, this.#allapotLista[i], i);
    }

    $(window).on("kapcsolas", (event) => {});
  }

  setSzin() {
    for (let i = 0; i < this.#allapotLista.length; i++) {
      this.#allapotLista[i] = Math.floor(Math.random() * 5 + 1);
      if (this.#allapotLista[i] > 1) {
        this.#allapotLista[i] = 0;
      }
    }
  }
}
export default Lampak;
