import * as model from "./model.js";
import sendDataView from "./views/sendDataView.js";

function DisplayName() {
  sendDataView.showLinksForm();
}

DisplayName();
model.fetchData();

const sendData = (data) => {
  model.sendDataToBackend(data);
};

const init = () => {
  sendDataView.getAllFormValues(sendData);
};

init();
