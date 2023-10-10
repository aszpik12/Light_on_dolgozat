class LampaElem {
  #allapot;
  #id;
  #divElem;
  constructor(szuloElem, villagit, i) {
    this.#allapot = villagit == 1;
    this.#id = i;
    if (this.#allapot) {
      szuloElem.append(`
            <div id="id${this.#id}" class="on">
                
            </div>
        `);
    } else {
      szuloElem.append(`
        <div id="id${this.#id}" class="off">
            
        </div>
    `);
    }

    this.#divElem = $("div");
    this.#divElem.on("click", () => {
      this.setAllapot();
      this.trigger();
    });
  }

  setAllapot() {
    this.#szinBeallit();
  }

  #szinBeallit() {
    const VILAGOS = document.querySelector(".on");
    const SOTET = document.querySelector(".off");

    if (this.#allapot) {
      VILAGOS.classList.replace("on", "off");
      this.#allapot = false;
    } else {
      SOTET.classList.replace("off", "on");
      this.#allapot = true;
    }
  }

  trigger() {
    const ev = new CustomEvent("kapcsolas", { detail: this.#allapot });
    window.dispatchEvent(ev);
  }
}
export default LampaElem;
