class FormProfile {

  openFormProfile = () => {//коллбэк для открытия формы профиля
    document.forms.profile.elements.name.value = userInfoName.textContent;
    document.forms.profile.elements.job.value = userInfoJob.textContent;
    formPopupProfile.classList.toggle("popup_is-opened");
    this.validateProfileForm();
  }

  closeFormProfile = () => {//коллбэк для закрытия формы профиля
    formPopupProfile.classList.toggle("popup_is-opened");
  }

  submitFormProfile = (event) => {//коллбэк для сабмита формы профиля
    event.preventDefault();
    if (!document.querySelector("#profile .popup__button").classList.contains("popup__button_enable")) {//кнопка "выключена", т.е. данные в форме невалидные
      return;
    }

    userInfoName.textContent = document.forms.profile.elements.name.value;
    userInfoJob.textContent = document.forms.profile.elements.job.value;
    formPopupProfile.classList.toggle("popup_is-opened");
  }

  validateProfileForm = () => {
      /** REVIEW: Можно лучше: Этот метод можно разбить на 2: проверка валидности, который возвращает true\false и переключение активности кнопок
       * это поможет упростить код т.к. из свитча можно сразу возвращать false при нахождении первого признака невалидной формы
       * и поможет разбить ответсвенность функций, что улучшит читаемость и отладку
       * **/
    let isOk = true;

    const formProfileName = document.forms.profile.elements.name;
    const formErrorProfileName = document.querySelector("#error-profile-name");
    switch (validateLenghtStr(formProfileName.value, 2, 30)) {
        /** REVIEW: Можно лучше: в case можно вставить блок кода {} для читаемости и обьявления переменных  **/
      case 0: formErrorProfileName.textContent = "Это обязательное поле"; isOk = false; break;
      case 1: formErrorProfileName.textContent = ""; break;
      case 2: formErrorProfileName.textContent = "Должно быть от 2 до 30 символов"; isOk = false; break;
    }

    const formProfileJob = document.forms.profile.elements.job;
    const formErrorProfileJob = document.querySelector("#error-profile-job");
    switch (validateLenghtStr(formProfileJob.value, 2, 30)) {
      case 0: formErrorProfileJob.textContent = "Это обязательное поле"; isOk = false; break;
      case 1: formErrorProfileJob.textContent = ""; break;
      case 2: formErrorProfileJob.textContent = "Должно быть от 2 до 30 символов"; isOk = false; break;
    }

    if (isOk) {
      document.querySelector("#profile .popup__button").classList.add("popup__button_enable");
    } else {
      document.querySelector("#profile .popup__button").classList.remove("popup__button_enable");
    }

  }

}





