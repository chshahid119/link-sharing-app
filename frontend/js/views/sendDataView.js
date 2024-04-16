class sendDataView {
  _data;
  _AddNewLink = document.querySelector(".hero__right-side-addLink-button");
  _LinkSection = document.querySelector(".Link-Section");
  _SaveBtnSection = document.querySelector(".hero__right-side-submit");

  showLinksForm() {
    this._AddNewLink.addEventListener("click", () => {
      this._LinkSection.classList.toggle("display-none");
      this._SaveBtnSection.classList.toggle("display-none");
    });
  }
}
export default new sendDataView();
