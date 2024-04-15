class sendDataView {
  _data;
  _AddNewLink = document.querySelector(".hero__right-side-addLink-button");

  send(data) {
    this._data = data;
  }
}
export default new sendDataView();
