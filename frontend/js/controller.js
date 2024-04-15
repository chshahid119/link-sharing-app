import * as model from "./model.js";
import sendDataView from "./views/sendDataView.js";

function DisplayName() {
  sendDataView.send("shahid");
}

DisplayName();

model.fetchData();
