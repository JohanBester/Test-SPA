import html from "html-literal";

export default (st) => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${st
        .map((el) => `<li><a href="${el.title}">${el.text}</a></li>`)
        .join("")}
    </ul>
  </nav>
`;

/* <li><a href="#bio">Bio</a></li>
<li><a href="#gallery">Gallery</a></li>
<li><a href="#register">Register</a></li> */

// ${st.reduce((template, link) => {
//   template +
// `<li><a href="/${link.title !== "Home" ? link.title : ""} "title ="${
//   link.title
// }" >${link.text}</a></li>`,
//     ``;
// })};
