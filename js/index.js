window.onload = () => {
  const newList = new CardList(initialCards); //возможно в будущем const придётся заменить на let.
  newList.loadInfo();  //возможно поступление какой-либо информации с сервера.

  let card = new Card();

  function loadCards() {
    document.removeEventListener('click', card.callback);
    newList.data.forEach(function (item) {
      card.appendCard(item.name, item.link);
    });
    card.createNodesArr(); // функция, формирующая массивы card.nodes и card.handlers.
  }

  document.addEventListener('click', card.collback = (event) => { //навешивание обработчиков кликов по элементам карточки.
    let etargetClass = event.target.className;
    let funcIndex = card.nodes.indexOf((etargetClass));
    if (funcIndex >= 0 && newList.data.length !== 0) {
      card.handlers[funcIndex](event);
      //Если происходит событие удаления карточки, вызывается метод classList remove для преобразования массива карточек.
      //и, возможно, отправка его на сервер.
      if (card.handlers[funcIndex].name === 'trash') {
        newList.removeFromList();
      }
    }
  });



let formProfile = new FormProfile();
  /** REVIEW: Можно лучше: Мне кажется было бы лучше назвать и переменную и класс вроде cardForm или FormForCard, т.к. formAdd можно перевести и истолковать как действие (добавь форму) и будет не очень понятно - это экземпляр класса или функция?   **/
  let formAdd = new FormAdd(card.appendCard, newList.addToList); // formAdd - это существительное "форма добавления".

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

  // закрытие закрытия попапа с большой картинкой
  const crossButtonBigImage = document.querySelector("#big-size-image .popup__close");
  crossButtonBigImage.addEventListener("click", card.toggleBigSizeImage);

  //валидация редактирования профиля
  document.forms.profile.elements.name.addEventListener("input", formProfile.validateProfileForm);
  document.forms.profile.elements.job.addEventListener("input", formProfile.validateProfileForm);

  //валидация добавления новой карточки
  document.forms.new.elements.name.addEventListener("input", formAdd.validateAddCardForm);
  document.forms.new.elements.link.addEventListener("input", formAdd.validateAddCardForm);


  //Рендер карточек на странице при каких-то условиях.
  loadCards();

}
