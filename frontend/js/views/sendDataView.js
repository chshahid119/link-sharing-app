class sendDataView {
  _data;
  _link1Platform;
  _link1Url;
  _link2Platform;
  _link2Url;

  _AddNewLink = document.querySelector(".hero__right-side-addLink-button");
  _LinkSection = document.querySelector(".Link-Section");
  _SaveBtnSection = document.querySelector(".hero__right-side-submit");

  //All Form Elements
  _Link1PlatformType = document.querySelector(".selectLinkPlatform1");
  _Link2PlatformType = document.querySelector(".selectLinkPlatform2");
  _Link1Url = document.querySelector(".link1url");
  _Link2Url = document.querySelector(".link2url");
  _saveBtn = document.querySelector(".hero__right-side-submit-btn");

  showLinksForm() {
    this._AddNewLink.addEventListener("click", () => {
      this._LinkSection.classList.toggle("display-none");
      this._SaveBtnSection.classList.toggle("display-none");
    });
  }

  createFormObjData() {
    this._Link1PlatformType.addEventListener("change", function (e) {
      this._link1Platform = e.target.value;
    });
    this._Link1Url.addEventListener("change", function (e) {
      this._link1Url = e.target.value;
    });
    this._Link2PlatformType.addEventListener("change", function (e) {
      this._link2PlatForm = e.target.value;
    });
    this._Link2Url.addEventListener("change", function (e) {
      this._link2Url = e.target.value;
    });
  }

  getDataIntoController() {
    this._saveBtn.addEventListener("click", function () {
      this.createFormObjData();
      console.log(
        this._link1Platform,
        this._link1Url,
        this._link2Platform,
        this._link2Url
      );
    });
  }
}
export default new sendDataView();
