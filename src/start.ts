import _ from "lodash";

const el = document.createElement("div");

el.innerHTML = _.join(["Hello", "lodash"], " ");

document.body.appendChild(el);
