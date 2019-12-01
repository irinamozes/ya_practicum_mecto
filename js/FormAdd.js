class FormAdd extends CardSettings {

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
    addOneCard(form.elements.name.value, form.elements.link.value);
    toggleFormAdd();
    form.reset();
  }

  validateAddCardForm = (event) => {
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


  validateLenghtStr = (str, min, max) => {
    if (str.length === 0)
      return 0;
    if (str.length >= min && str.length <= max)
      return 1;
    return 2;
  }

  validURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  }

}