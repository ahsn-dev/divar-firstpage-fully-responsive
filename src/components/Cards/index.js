import El from "../../library/El";

const Cards = () => {
  const cardsData = [
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
    {
      imageSrc: "src/images/house.jpg",
      title: "۲۵۰ متر فرمانیه بوستان لوکیشن دیپلمات",
      price: "۱۹٫۸۰۰٫۰۰۰٫۰۰۰",
      agency: "آژانس املاک نگین اقدسیه در اقدسیه",
    },
  ];

  return El({
    element: "div",
    style: "direction: ltr",
    className:
      "flex flex-col justify-center items-center pt-1 sm:flex-row sm:flex-wrap lg:hidden",
    child: cardsData.map((card) =>
      El({
        element: "div",
        className: "p-4 sm:pt-2 sm:w-1/2",
        child: El({
          element: "div",
          className:
            "h-[168px] flex gap-1 border border-solid border-gray-300 rounded p-4",
          child: [
            El({
              element: "div",
              className: "w-8/12",
              child: El({
                element: "img",
                src: card.imageSrc,
                className: "w-full h-full rounded",
              }),
            }),
            El({
              element: "div",
              className: "self-end",
              child: El({
                element: "ion-icon",
                name: "chatbubble-outline",
              }),
            }),
            El({
              element: "div",
              style: "direction: rtl",
              className: "flex flex-col justify-between",
              child: [
                El({
                  element: "div",
                  child: El({
                    element: "span",
                    child: card.title,
                    className: "font-bold",
                  }),
                }),
                El({
                  element: "div",
                  className: "flex flex-col gap-0.5",
                  child: [
                    El({
                      element: "span",
                      child: [
                        card.price,

                        El({
                          element: "span",
                          child: " تومان",
                        }),
                      ],
                      className: "text-gray-500",
                    }),
                    El({
                      element: "span",
                      child: card.agency,
                      className: "text-gray-500",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    ),
  });
};

export default Cards;
