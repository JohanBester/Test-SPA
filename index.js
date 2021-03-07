import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

// import {
//   AddPicturesToGallery,
//   GalleryPictures,
//   PrintFormOnSubmit
// } from "./lib";

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
}

render(state.Home);

// add menu toggle to bars icon in nav bar
document
  .querySelector(".fa-bars")
  .addEventListener("click", () =>
    document.querySelector("nav > ul").classList.toggle("hidden--mobile")
  );

// populating gallery with pictures
// const gallerySection = document.querySelector("#gallery");
// using modules to populate gallery with pictures
// AddPicturesToGallery(GalleryPictures, gallerySection);

// handle form submission with PrintFormOnSubmit module
const form = document.querySelector("form");
PrintFormOnSubmit(form);
