import El from "../../library/El";

const AsideDesktop = () => {
  return El({
    element: "div",
    style: "direction: rtl",
    className:
      "w-72 h-[calc(100vh-64px)] fixed top-16 pt-8 px-4 pb-0 overflow-auto scrollbar-hide hidden lg:block",
    child: [
      El({
        element: "aside",
        child: El({
          element: "div",
          className: "",
          child: [
            El({
              element: "section",
              child: [
                El({
                  element: "h2",
                  child: "دسته‌ها",
                  className:
                    "text-xs font-normal leading-loose py-2 text-slate-900",
                }),
                El({
                  element: "ul",
                  className: "flex flex-col",
                  child: [
                    El({
                      element: "li",
                      style: "direction: ltr",
                      className:
                        "cursor-pointer leading-loose py-1.5 transition text-gray-500 hover:text-black",
                      child: [
                        El({
                          element: "span",
                          className: "pr-1.5 text-sm",
                          child: "املاک",
                        }),
                        El({
                          element: "ion-icon",
                          name: "home-outline",
                          className: "text-lg text-gray-800",
                        }),
                      ],
                    }),
                    El({
                      element: "li",
                      style: "direction: ltr",
                      className:
                        "cursor-pointer leading-loose py-1.5 transition text-gray-500 hover:text-black",
                      child: [
                        El({
                          element: "span",
                          className: "pr-1.5 text-sm",
                          child: "وسایل نقلیه",
                        }),
                        El({
                          element: "ion-icon",
                          name: "car-sport-outline",
                          className: "text-lg text-gray-800",
                        }),
                      ],
                    }),
                    El({
                      element: "li",
                      style: "direction: ltr",
                      className:
                        "cursor-pointer leading-loose py-1.5 transition text-gray-500 hover:text-black",
                      child: [
                        El({
                          element: "span",
                          className: "pr-1.5 text-sm",
                          child: "کالای دیجیتال",
                        }),
                        El({
                          element: "ion-icon",
                          name: "phone-portrait-outline",
                          className: "text-lg text-gray-800",
                        }),
                      ],
                    }),
                    El({
                      element: "li",
                      style: "direction: ltr",
                      className:
                        "cursor-pointer leading-loose py-1.5 transition text-gray-500 hover:text-black",
                      child: [
                        El({
                          element: "span",
                          className: "pr-1.5 text-sm",
                          child: "خانه و آشپزخانه",
                        }),
                        El({
                          element: "ion-icon",
                          name: "bed-outline",
                          className: "text-lg text-gray-800",
                        }),
                      ],
                    }),
                    El({
                      element: "li",
                      style: "direction: ltr",
                      className:
                        "cursor-pointer leading-loose py-1.5 transition text-gray-500 hover:text-black",
                      child: [
                        El({
                          element: "span",
                          className: "pr-1.5 text-sm",
                          child: "خدمات",
                        }),
                        El({
                          element: "ion-icon",
                          name: "brush-outline",
                          className: "text-lg text-gray-800",
                        }),
                      ],
                    }),
                    El({
                      element: "li",
                      style: "direction: ltr",
                      className:
                        "cursor-pointer leading-loose py-1.5 transition text-gray-500 hover:text-black",
                      child: [
                        El({
                          element: "span",
                          className: "pr-1.5 text-sm",
                          child: "وسایل شخصی",
                        }),
                        El({
                          element: "ion-icon",
                          name: "watch-outline",
                          className: "text-lg text-gray-800",
                        }),
                      ],
                    }),
                    El({
                      element: "li",
                      style: "direction: ltr",
                      className:
                        "cursor-pointer leading-loose py-1.5 transition text-gray-500 hover:text-black",
                      child: [
                        El({
                          element: "span",
                          className: "pr-1.5 text-sm",
                          child: "سرگرمی و فراغت",
                        }),
                        El({
                          element: "ion-icon",
                          name: "dice-outline",
                          className: "text-lg text-gray-800",
                        }),
                      ],
                    }),
                    El({
                      element: "li",
                      style: "direction: ltr",
                      className:
                        "cursor-pointer leading-loose py-1.5 transition text-gray-500 hover:text-black",
                      child: [
                        El({
                          element: "span",
                          className: "pr-1.5 text-sm",
                          child: "اجتماعی",
                        }),
                        El({
                          element: "ion-icon",
                          name: "people-outline",
                          className: "text-lg text-gray-800",
                        }),
                      ],
                    }),
                    El({
                      element: "li",
                      style: "direction: ltr",
                      className:
                        "cursor-pointer leading-loose py-1.5 transition text-gray-500 hover:text-black",
                      child: [
                        El({
                          element: "span",
                          className: "pr-1.5 text-sm",
                          child: "تجهیزات و صنعتی",
                        }),
                        El({
                          element: "ion-icon",
                          name: "build-outline",
                          className: "text-lg text-gray-800",
                        }),
                      ],
                    }),
                    El({
                      element: "li",
                      style: "direction: ltr",
                      className:
                        "cursor-pointer leading-loose py-1.5 transition text-gray-500 hover:text-black",
                      child: [
                        El({
                          element: "span",
                          className: "pr-1.5 text-sm",
                          child: "استخدام و کاریابی",
                        }),
                        El({
                          element: "ion-icon",
                          name: "bag-outline",
                          className: "text-lg text-gray-800",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            El({
              element: "section",
              className: "mt-4",
              child: [
                El({
                  element: "div",
                  className:
                    "flex items-center h-14 border-t border-solid border-slate-200 cursor-pointer py-2 outline-none",
                  child: [
                    El({
                      element: "ion-icon",
                      name: "chevron-down-outline",
                      className:
                        "flex justify-center items-center text-gray-400",
                    }),
                    El({
                      element: "span",
                      child: "محل",
                      className: "text-slate-900 mr-1 text-xs font-semibold",
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className:
                    "flex items-center h-14 border-t border-solid border-slate-200 cursor-pointer py-2 outline-none",
                  child: [
                    El({
                      element: "ion-icon",
                      name: "chevron-down-outline",
                      className:
                        "flex justify-center items-center text-gray-400",
                    }),
                    El({
                      element: "span",
                      child: "قیمت",
                      className: "text-slate-900 mr-1 text-xs font-semibold",
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className:
                    "flex items-center h-14 border-t border-b border-solid border-slate-200 cursor-pointer py-2 outline-none",
                  child: [
                    El({
                      element: "ion-icon",
                      name: "chevron-down-outline",
                      className:
                        "flex justify-center items-center text-gray-400",
                    }),
                    El({
                      element: "span",
                      child: "وضعیت آگهی",
                      className: "text-slate-900 mr-1 text-xs font-semibold",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      El({
        element: "footer",
        child: [
          El({
            element: "div",
            className: "pt-2",
            child: [
              El({
                element: "section",
                className: "flex flex-wrap",
                child: [
                  El({
                    element: "a",
                    child: "درباره دیوار",
                    className:
                      "inline-block transition text-gray-500 cursor-pointer leading-6 p-2 text-xs hover:text-black",
                  }),
                  El({
                    element: "a",
                    child: "دریافت برنامه",
                    className:
                      "inline-block transition text-gray-500 cursor-pointer leading-6 p-2 text-xs hover:text-black",
                  }),
                  El({
                    element: "a",
                    child: "بلاگ دیوار",
                    className:
                      "inline-block transition text-gray-500 cursor-pointer leading-6 p-2 text-xs hover:text-black",
                  }),
                  El({
                    element: "a",
                    child: "کسب و کارها",
                    className:
                      "inline-block transition text-gray-500 cursor-pointer leading-6 p-2 text-xs hover:text-black",
                  }),
                  El({
                    element: "a",
                    child: "پشتیبانی و قوانین",
                    className:
                      "inline-block transition text-gray-500 cursor-pointer leading-6 p-2 text-xs hover:text-black",
                  }),
                ],
              }),
              El({
                element: "section",
                className: "flex flex-wrap justify-center gap-7 pt-4",
                child: [
                  El({
                    element: "ion-icon",
                    name: "logo-twitter",
                    className: "text-gray-500 text-lg cursor-pointer",
                  }),
                  El({
                    element: "ion-icon",
                    name: "logo-instagram",
                    className: "text-gray-500 text-lg cursor-pointer",
                  }),
                  El({
                    element: "ion-icon",
                    name: "logo-linkedin",
                    className: "text-gray-500 text-lg cursor-pointer",
                  }),
                  El({
                    element: "ion-icon",
                    name: "logo-youtube",
                    className: "text-gray-500 text-lg cursor-pointer",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex justify-between items-start m-3.5 py-6",
            child: [
              El({
                element: "img",
                src: "src/images/enamad.png",
                className: "w-[84px] h-[91px]",
              }),
              El({
                element: "img",
                src: "src/images/etehadie.png",
                className: "w-[84px] h-[91px]",
              }),
              El({
                element: "img",
                src: "src/images/samandehi.png",
                className: "w-[84px] h-[84px]",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default AsideDesktop;
