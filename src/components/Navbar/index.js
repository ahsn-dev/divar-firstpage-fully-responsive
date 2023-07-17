import El from "../../library/El";

const Navbar = () => {
  return El({
    element: "nav",
    style: "direction: ltr",
    className: "p-4 sticky top-0 z-10 bg-white lg:hidden",
    child: El({
      element: "div",
      className:
        "flex justify-around items-center p-2 rounded bg-gray-100 sm:justify-between",
      child: [
        El({
          element: "div",
          className: "flex order-1 relative items-center",
          child: [
            El({
              element: "input",
              type: "text",
              className:
                "text-gray-400 bg-gray-100 text-base pr-8 text-right outline-none",
              placeholder: "جستجو در همه‌ آگهی‌ها",
            }),
            El({
              element: "ion-icon",
              name: "search-outline",
              className: "text-2xl absolute right-1 text-gray-300",
            }),
          ],
        }),
        El({
          element: "button",
          className: "flex items-center",
          child: [
            El({
              element: "ion-icon",
              name: "location-outline",
              className: "text-xl text-gray-500",
            }),
            El({
              element: "span",
              child: "تهران",
              className: "text-gray-500 text-base",
            }),
          ],
        }),
        El({
          element: "div",
          className:
            "border border-solid text-gray-300 h-6 sm:mr-auto sm:ml-2.5",
          child: "",
        }),
      ],
    }),
  });
};

export default Navbar;
