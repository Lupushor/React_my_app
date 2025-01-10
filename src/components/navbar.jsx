import React, { useState } from "react";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  console.log(open);

  const [menuItems, setMenuItems] = useState(["Главная", "Блог", "Контакты"]);

  // Переключаем на противоположное значение true -> false, false -> true
  const handleMenuClick = () => {
    setOpen((prevState) => !prevState);
  };

  // Обработчик нажатия
  const handleItemClick = (id) => {
    console.log(id);
  };

  // Создание пунктов меню
  const renderMenu = () => {
    return (
      // Если переменная open равна true то мы выводим пункты меню, иначе мы не выводим ничего.
      open && (
        <ul className="list-group m-2">
          {menuItems.map((item) => (
            <li
              className="list-group-item"
              key={item}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )
    );
  };

  // Стрелочка вверх
  const arrowTop = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-arrow-up"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
      />
    </svg>
  );

  // Стрелочка вниз
  const arrowDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-arrow-down"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
      />
    </svg>
  );

  // Функция для отображения стрелочек
  const renderArrow = () => {
    return open ? arrowDown : arrowTop;
  };

  // Проверяем количество пунктов меню, и если равно 0, то выводим текст
  if (menuItems.length === 0) {
    return "Not menu items";
  }

  // В остальных случаях выводим основное содержимое

  return (
    <div>
      <button className="btn btn-sm btm-primary" onClick={handleMenuClick}>
        {/*вызываем renderArrow() внутри кнопки*/}
        меню {renderArrow()}
      </button>
      {renderMenu()}
    </div>
  );
};

export default Navbar;
