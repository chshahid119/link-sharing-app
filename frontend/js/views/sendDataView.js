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

  getAllFormValues(handler) {
    this._saveBtn.addEventListener("click", (e) => {
      e.preventDefault();

      this._link1Platform = this._Link1PlatformType.value;
      this._link1Url = this._Link1Url.value;
      this._link2Platform = this._Link2PlatformType.value;
      this._link2Url = this._Link2Url.value;

      let allData = {
        link1Platform: this._link1Platform,
        link1Url: this._link1Url,
        link2Platform: this._link2Platform,
        link2Url: this._link2Url,
      };

      handler(allData);
    });
  }
}
export default new sendDataView();
