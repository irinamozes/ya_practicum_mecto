class FormAdd {
  constructor(appendCardFunc, addToListFunc) {
    this.appendCardFunc = appendCardFunc;
    this.addToListFunc = addToListFunc;
  }

  toggleFormAdd = () => {//коллбэк для открытия и закрытия формы добавления карточки
    this.validateAddCardForm();
    formPopupAddCard.classList.toggle("popup_is-opened");
  }

  submitFormAdd = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (!document.querySelector("#add-card .popup__button").classList.contains("popup__button_enable")) {//кнопка "выключена", т.е. данные в форме невалидные
      return;
    }
    this.appendCardFunc(form.elements.name.value, form.elements.link.value);
    this.toggleFormAdd();

    //Преобразование списка карточек после добавления новой карточки, возможно, отправка на сервер.
    this.addToListFunc();

    form.reset();
  }

    validateAddCardForm = () => {
    let isOk = true;

    const formNewName = document.forms.new.elements.name;
    const formErrorCardName = document.querySelector("#error-card-name");
    switch (validateLenghtStr(formNewName.value, 2, 30)) {
      case 0: formErrorCardName.textContent = "Это обязательное поле"; isOk = false; break;
      case 1: formErrorCardName.textContent = ""; break;
      case 2: formErrorCardName.textContent = "Должно быть от 2 до 30 символов"; isOk = false; break;
    }

    const formNewLink = document.forms.new.elements.link;
    const formErrorCardLink = document.querySelector("#error-card-link");
    if (validURL(formNewLink.value)) {
      formErrorCardLink.textContent = "";
    } else {
      formErrorCardLink.textContent = "Здесь должна быть ссылка";
      isOk = false;
    }

    if (isOk) {
      document.querySelector("#add-card .popup__button").classList.add("popup__button_enable");
    } else {
      document.querySelector("#add-card .popup__button").classList.remove("popup__button_enable");
    }
  }

}
