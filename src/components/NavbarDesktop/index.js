import El from "../../library/El";

const NavbarDesktop = () => {
  return El({
    element: "header",
    style: "direction: rtl",
    className: "shadow h-16  hidden lg:block",
    child: El({
      element: "nav",
      className: "flex gap-4 items-center p-4",
      child: [
        El({
          element: "a",
          child: El({
            element: "img",
            src: "src/images/divar-logo.png",
            className: "",
            child: "",
          }),
        }),
        El({
          element: "div",
          className: "border border-solid text-gray-100 h-6",
          child: "",
        }),
        El({
          element: "button",
          className:
            "flex items-center gap-1 hover:rounded hover:bg-gray-100 hover:text-black px-3 py-2 transition",
          child: [
            El({
              element: "ion-icon",
              name: "location-outline",
              className: "text-gray-600 text-lg hover:text-black",
            }),
            El({
              element: "span",
              child: "تهران",
              className: "text-gray-600 text-base",
            }),
          ],
        }),
        El({
          element: "div",
          className: "flex w-full justify-between",
          child: [
            El({
              element: "div",
              className: "flex",
              child: El({
                element: "button",
                className:
                  "flex items-center gap-3 hover:rounded hover:bg-gray-100 hover:text-black px-3 py-2 transition",
                child: [
                  El({
                    element: "span",
                    child: "دسته‌ها",
                    className: "text-gray-600",
                  }),
                  El({
                    element: "ion-icon",
                    name: "chevron-down-outline",
                    className: "text-gray-500",
                  }),
                ],
              }),
            }),
            El({
              element: "div",
              className: "flex items-center ml-auto mr-2",
              child: [
                El({
                  element: "input",
                  type: "text",
                  className:
                    "text-gray-400 bg-gray-100 relative pr-8 text-base text-right rounded outline-none p-2 pl-64",
                  placeholder: "جستجو در همه‌ آگهی‌ها",
                }),
                El({
                  element: "ion-icon",
                  name: "search-outline",
                  className: "text-gray-300 pr-2 absolute hover:text-gray-800",
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex gap-5",
              child: [
                El({
                  element: "button",
                  className:
                    "flex items-center gap-2 text-[#707070] hover:rounded hover:bg-gray-100 hover:text-black px-3 py-2 transition",
                  child: [
                    El({
                      element: "ion-icon",
                      className: "text-bold",
                      name: "person-outline",
                    }),
                    El({
                      element: "span",
                      className: "text-sm",
                      child: "دیوار من",
                    }),
                  ],
                }),
                El({
                  element: "button",
                  className:
                    "flex items-center gap-2 text-[#707070] hover:rounded hover:bg-gray-100 hover:text-black px-3 py-2 transition",
                  child: [
                    El({
                      element: "ion-icon",
                      className: "text-xl text-bold",
                      name: "chatbubble-outline",
                    }),
                    El({
                      element: "span",
                      className: "text-sm",
                      child: "چت",
                    }),
                  ],
                }),
                El({
                  element: "button",
                  className:
                    "flex items-center text-[#707070] hover:rounded hover:bg-gray-100 hover:text-black px-3 py-2 transition",
                  child: El({
                    element: "span",
                    className: "text-sm",
                    child: "پشتیبانی",
                  }),
                }),
                El({
                  element: "button",
                  className:
                    "flex items-center text-white bg-red-700 px-4 py-2 rounded hover:bg-red-600 transition",
                  child: El({
                    element: "span",
                    className: "",
                    child: "ثبت آگهی",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};

export default NavbarDesktop;
