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
  ];
  return El({
    element: "div",
    style: "direction: ltr",
    className:
      "flex flex-row flex-wrap justify-center items-center overflow-auto h-[calc(100vh-120px)] pl-4 mr-[300px] w-auto min-h-[100px] top-0 mt-4 bg-white hidden lg:block",
    child: [
      El({
        element: "h1",
        child: "دیوار تهران: انواع آگهی‌ها و خدمات در تهران",
        className: "text-sm text-gray-500 pl-4 pt-4 w-full",
      }),
      El({
        element: "div",
        className: "w-full flex flex-wrap",
        child: cardsData.map((card) =>
          El({
            element: "div",
            className: "p-4 w-1/3",
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
      }),
    ],
  });
};

export default Cards;
