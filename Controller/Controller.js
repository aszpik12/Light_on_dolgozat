class Controller {
  constructor(szuloELEM) {
    const MODEL = new Modell();
    const ujadatElem = $(".ujadat");
    const AUTOURLAP = new Urlap(ujadatElem, { Rendszam: "", tipus: "" });

    $(window).on("ujAdat", (event) => {
      MODEL.ujadatHozzaadas(event.detail);
    });
  }
}
export default Controller;
