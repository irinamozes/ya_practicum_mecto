class Card {
  constructor() {
    this.nodes = [];     //массив элементов, для которых будут назначены обработчики событий.
    this.handlers = [];  //массив обработчиков событий.
  }

  appendCard(name, url) {
    this.oneCard = document.createElement("div");
    this.oneCard.classList.add("place-card");

    this.imgCard = document.createElement("div");
    this.imgCard.classList.add("place-card__image");
    this.imgCard.style.backgroundImage = `url(${url})`;

    this.btnImgCard = document.createElement("button");
    this.btnImgCard.classList.add("place-card__delete-icon");

    this.descCard = document.createElement("div");
    this.descCard.classList.add("place-card__description");

    this.h3Card = document.createElement("h3");
    this.h3Card.classList.add("place-card__name");
    this.h3Card.textContent = name;

    this.btnLike = document.createElement("button");
    this.btnLike.classList.add("place-card__like-icon");

    this.oneCard.appendChild(this.imgCard);
    this.imgCard.appendChild(this.btnImgCard);
    this.oneCard.appendChild(this.descCard);
    this.descCard.appendChild(this.h3Card);
    this.descCard.appendChild(this.btnLike);
  /** REVIEW: Можно лучше: Можно передать cards через конструктор и сохранить ссылку на него в this.cards. В таком случае не придется брать эту переменную из глобальной области видимости - вдруг её там может не быть? И класс станет более независимым - все данные для его работы будут переданы в конструктор  **/
  //Улучшение не сработало при передаче функции card.appendCard в FormAdd. (?)
    cards.appendChild(this.oneCard);
  }

  toggleBigSizeImage = (event) => {
    const popupImage = document.querySelector('.popup__image');
    popupImage.src = event.target.style.backgroundImage.slice(5, -2);
    bigSizeImage.classList.toggle("popup_is-opened");
  }


  trash = (event) => {
    event.preventDefault();
    let trashElement = event.target;
    let parentImgElement = trashElement.parentNode;
    let parentCardElement = parentImgElement.parentNode;
    parentCardElement.remove();
  }


  like = (event) => {
    event.preventDefault();
    event.target.classList.toggle('place-card__like-icon_liked');
  }


  createNodesArr () {
    let imgCardClass = this.imgCard.className;
    this.nodes.push(imgCardClass);
    this.handlers.push(this.toggleBigSizeImage);
    let btnImgCardClass = this.btnImgCard.className;
    this.nodes.push(btnImgCardClass);
    this.handlers.push(this.trash);
    let btnLikeClass = this.btnLike.className;
    this.nodes.push(btnLikeClass);
    this.handlers.push(this.like);
    let btnLikeClassTog = 'place-card__like-icon place-card__like-icon_liked';
    this.nodes.push(btnLikeClassTog);
    this.handlers.push(this.like);
  }

  // в index.js callback будет переопределена для экземпляра card.
  callback = () => {
  }

}
