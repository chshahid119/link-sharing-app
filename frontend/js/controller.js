import * as model from "./model.js";
import sendDataView from "./views/sendDataView.js";

function DisplayName() {
  sendDataView.showLinksForm();
}

DisplayName();

model.fetchData();
sendDataView.getDataIntoController();
