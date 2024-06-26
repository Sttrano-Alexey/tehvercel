import "./CartForm.css";
import React, { useRef, useState, useEffect  } from "react";
import doneImg from '../Images/Icons/formDone.png'

export default function CartForm({ currentFormIndex, setFormIndex, totalForms }) {
  // проверка чекбоксов для юр физ лица
  const [isPhysicalLegal, setIsPhysicalLegal] = useState(true);

  const handlePhizCheckboxChange = () => {
    setIsPhysicalLegal(true);

  };


  const handleLegalCheckboxChange = () => {
    setIsPhysicalLegal(false);
  };

  // проверка чекбоксов для пунктов заказа

  const [isDevileryPlace, setDevileryPlace] = useState(true);
  const handleDeliveryCheckboxChange = () => {
    setDevileryPlace(false);
  };
  const handlePlaceCheckboxChange = () => {
    setDevileryPlace(true);
  };

  // проверка чекбоксов для выбора способа оплаты

  const [isSpbCheck, setSpbCheck] = useState(true);
  const handleSpbCheckboxChange = () => {
    setSpbCheck(true);
  };
  const handleCheckCheckboxChange = () => {
    setSpbCheck(false);
  };


  // ВАЛИДАЦИЯ
  // Добавляем состояния для хранения данных формы
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationName: "",
    ipName: "",
    legalEmail: "",
    address: "",
    home: "",
    entrance: "",
    apartment: "",
  });

    // Функция для обновления значений ввода
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

      // Валидация формы
  const validateForm = () => {
    // Пример простой валидации
    if (isPhysicalLegal) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert("Пожалуйста, заполните все поля для физического лица.");
        return false;
      }
    } else {
      if (!formData.organizationName || !formData.email || !formData.phone) {
        alert("Пожалуйста, заполните все поля для юридического лица.");
        return false;
      }
    }
    // Добавлю дополнительные проверки по необходимости хз
    return true;
  };

  
  const forms = [
    <div key="phiz-form">
      <h3 className="form-title">Оформление заказа</h3>
      <div  className="form-row">
      <form className="form-form phiz-form-column">
      <span className="form-subtitle">
        Физическое лицо{" "}
        <input
          type="checkbox"
          className="form-checkbox"
          onChange={handlePhizCheckboxChange}
          checked={isPhysicalLegal}
        />
      </span>
      <label className="form-label" htmlFor="phiz-form-checkbox">
        ФИО
      </label>
      <input
        type="text"
        className="form-input"
        placeholder="Введите имя"
        disabled={!isPhysicalLegal}
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
      />
      <label className="form-label" htmlFor="phiz-form-checkbox">
        Почта
      </label>
      <input
        type="email"
        className="form-input"
        placeholder="name@example.com"
        disabled={!isPhysicalLegal}
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <label className="form-label" htmlFor="phiz-form-checkbox">
        Телефон
      </label>
      <input
        type="tel"
        className="form-input"
        placeholder="+7 123 456 78 90"
        disabled={!isPhysicalLegal}
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
      />
    </form>
    <form className="form-form legal-form-column">
    <span className="form-subtitle">
      Юридическое лицо{" "}
      <input
        type="checkbox"
        className="form-checkbox"
        onChange={handleLegalCheckboxChange}
        checked={!isPhysicalLegal}
      />
    </span>
    <label className="form-label" htmlFor="legal-form-checkbox">
      Название организации
    </label>
    <input
      type="text"
      className="form-input"
      placeholder="Введите название организации"
      disabled={isPhysicalLegal}
    />
    <label className="form-label" htmlFor="legal-form-checkbox">
      Название ИП
    </label>
    <input
      type="text"
      className="form-input"
      placeholder="Введите ваше имя"
      disabled={isPhysicalLegal}
    />
    <label className="form-label" htmlFor="legal-form-checkbox">
      Почта
    </label>
    <input
      type="email"
      className="form-input"
      placeholder="name@example.com"
      disabled={isPhysicalLegal}
    />
    <label className="form-label" htmlFor="legal-form-checkbox">
      Телефон
    </label>
    <input
      type="tel"
      className="form-input"
      placeholder="+7 123 456 78 90"
      disabled={isPhysicalLegal}
    />
  </form>
      </div>
  </div>,
  <div key="delivery-form">
    <h3 className="form-title delivery-title">Доставка</h3>
          <div className="form-row delivery-row">
            <div className="form-row-row">
              <div className="form-column form-form city-input">
                <label className="form-label">Город</label>
                <input type="text" className="form-input" placeholder="Москва" />
              </div>
            </div>
            <div className="form-row-row">
              <span className="form-subtitle">Способ получения</span>
              <div className="form-row delivery-main-row">
                <div className="form-column phiz-form-column">
                  <form action="" className="phiz-form form-form">
                    <span className="form-subtitle">
                      Пункт выдачи{" "}
                      <input
                      type="checkbox"
                      className="form-checkbox" 
                      onChange={handlePlaceCheckboxChange}
                      checked={isDevileryPlace}
                      />
                    </span>
                    <div className={isDevileryPlace ? "delivery-map" : "delivery-map hidden"}>
                      <button type="button" className="map-btn" onClick={() => {
                        const mapBlock = document.querySelector('.map');
                        mapBlock.classList.toggle('hidden');
                      }}>Карта</button>
                      <div className="map hidden"></div>
                      <span className="delivery-sub-title">Выбранный пункт выдачи</span>
                      <span className="delivery-text-place">улица Березовская, 101</span>
                      <span className="delivery-text-price">450 руб</span>
                      <button className="change-place-btn">Выбрать другой пункт выдачи</button>
                    </div>
                  </form>
                </div>
                <div className="form-column legal-form-column">
                  <form action="" className="phiz-form form-form">
                    <span className="form-subtitle">
                      Курьером
                      <input
                      type="checkbox"
                      className="form-checkbox"
                      onChange={handleDeliveryCheckboxChange}
                      checked={!isDevileryPlace}
                      />
                    </span>
                    <label className="form-label">Мой адрес</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Введите значение"
                      disabled={isDevileryPlace}
                    />
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Дом"
                      disabled={isDevileryPlace}
                    />
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="Подъезд"
                      disabled={isDevileryPlace}
                    />
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="Квартира"
                      disabled={isDevileryPlace}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
  </div>,
  <div key="payment-form">
    <h3 className="form-title end">Оплата</h3>
          <div className="form-row pay-row">
            <div className="form-column ">
              <form action="" className="form-form">
                <span className="form-subtitle ">
                  СПБ
                  <input
                  type="checkbox"
                  className="form-checkbox" 
                  onChange={handleSpbCheckboxChange}
                  checked={isSpbCheck}
                  />
                </span>
                <p className={isSpbCheck ? "" : "hidden"}>Поясняющий текст как в подробностях происходит оплата</p>
              </form>
            </div>
            <div className="form-column legal-form-column">
              <form action="" className="form-form">
                <span className="form-subtitle">
                  Выслать счёт
                  <input
                  type="checkbox" 
                  className="form-checkbox" 
                  onChange={handleCheckCheckboxChange}
                  checked={!isSpbCheck}
                  />
                </span>
                <p className={!isSpbCheck ? "" : "hidden"}>Поясняющий текст как в подробностях происходит оплата</p>
              </form>
            </div>
          </div>
  </div>,
    <div key="done-form">
      <div className="form-done">
            <h3 className="form-title end">К оформлению заказа все готово</h3>
            <img src={doneImg} alt="" />
      </div>
  </div> 
  ];

  const totalFormsCount = forms.length;

  const handleNextBtnClick = () => {
    if (validateForm() && currentFormIndex < totalForms - 1) {
      setFormIndex(currentFormIndex + 1);
      console.log(formData);
    }
  };

  const handlePrevBtnClick = () => {
    if (currentFormIndex > 0) {
      setFormIndex(currentFormIndex - 1);
    }
  };

  return (
    <div className="CartForm__container">
      {forms[currentFormIndex]}
      <nav className="CartForm__navigation">
        <button
          className="CartForm__navigation-btn"
          onClick={handlePrevBtnClick}
          disabled={currentFormIndex === 0}
        >
          Назад
        </button>
        {currentFormIndex === totalFormsCount - 1 ? (
          <></>
        ) : (
          <>
            <span className="CartForm__navigation-counter">
              {currentFormIndex + 1} из {totalFormsCount}
            </span>
            <button
              className="CartForm__navigation-btn"
              onClick={handleNextBtnClick}
              disabled={currentFormIndex === totalFormsCount - 1}
            >
              Далее
            </button>
          </>
        )}
      </nav>
    </div>

  );

}
