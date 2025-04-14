let box = document.querySelector(".box");

for (let i = 0; i < 7; i++) {
  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.classList.add("card-image");
  img.src = "./img/1.png";

  let content = document.createElement("div");
  content.classList.add("card-content");

  let header = document.createElement("div");
  header.classList.add("card-header");

  let h3 = document.createElement("h3");
  h3.textContent = "Main Heading";

  let badge = document.createElement("span");
  badge.classList.add("badge");
  badge.textContent = "3 months";

  header.append(h3, badge);

  let subheading = document.createElement("p");
  subheading.classList.add("subheading");
  subheading.textContent = "Sub Heading";

  let desc = document.createElement("p");
  desc.classList.add("description");
  desc.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  let socials = document.createElement("div");
  socials.classList.add("socials");
  socials.innerHTML = `
    <img src="./img/youtube.png"/>
    <img src="./img/facebook.png"/>
    <img src="./img/insta.webp"/>
    <img src="./img/tiktok.png"/>
  `;

  content.append(header, subheading, desc, socials);

  let footer = document.createElement("div");
  footer.classList.add("card-footer");

  let price = document.createElement("span");
  price.textContent = "USD 3";

  let btn = document.createElement("button");
  btn.textContent = "Activate";

  footer.append(price, btn);

  card.append(img, content, footer);

  if (i === 4) {
    let secondRow = document.createElement("div");
    secondRow.classList.add("box", "second-row");
    box.append(secondRow);
  }

  box.append(card);
}
