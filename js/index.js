let newList = new CardList(initialCards);
newList.render();

let card = new Card;

function loadCards() {
  cards.removeEventListener('click', card.callback);
  newList.data.forEach(function (item) {
    card.appendCard(item.name, item.link);
  });

  card.createNodesArr();

  document.addEventListener('click', card.collback = (event) => {
    let etargetClass = event.target.className;
    let funcIndex = card.nodes.indexOf(String(etargetClass));
    if (funcIndex >= 0 && newList.data.length !== 0) {
      if (card.handlers[funcIndex] !== 'none') {
        card.handlers[funcIndex](event);
        //Если происходит событие удаления карточки, вызывается метод classList remove для преобразования массива карточек,
        //и, возможно, отправка его на сервер.
        if (card.handlers[funcIndex].name === 'trash') {
          newList.removeFromList();
        }

      } else {
        return
      }
    } else {
      return
    }
  });

}


let formProfile = new FormProfile();

let formAdd = new FormAdd();

// нажатие на кнопку Edit
const buttonEdit = document.querySelector(".button.user-info__edit");
buttonEdit.addEventListener("click", formProfile.openFormProfile);

// закрытие формы редактирования профиля
const crossButtonEdit = document.querySelector("#profile .popup__close");
crossButtonEdit.addEventListener("click", formProfile.closeFormProfile);

// сабмит формы редактирования профиля
document.forms.profile.addEventListener("submit", formProfile.submitFormProfile);


// нажатие на кнопку +
const button = document.querySelector(".user-info__button");
button.addEventListener("click", formAdd.toggleFormAdd);

// закрытие формы добавления нового элемента
const crossButton = document.querySelector("#add-card .popup__close");
crossButton.addEventListener("click", formAdd.toggleFormAdd);

// сабмит формы добавления карточки.
document.forms.new.addEventListener("submit", formAdd.submitFormAdd);

//}


//Рендер карточек на странице при каких-то условиях.
loadCards();

//initCallbackPopup()