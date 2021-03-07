import html from "html-literal";

import * as views from "./views";

export default (st) => html`
  ${views["Home"](st)} ${views["Bio"](st)} ${views["Gallery"](st)}
  ${views["Form"](st)}
`;
