const {} = require("../js/pure.js");

describe("eCommerce tests", () => {
  test("should remove item 2", () => {
    const arr = [
      {
        id: 1,
        title: "title g g g g",
        price: 49.5,
        image: "https://image",
        description: "lorem",
        category: "cat1",
      },
      {
        id: 2,
        title: "title h h h h",
        price: 74.9,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem2",
        category: "cat1",
      },
      {
        id: 3,
        title: "title j j j ",
        price: 13.5,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem3",
        category: "cat2",
      },
    ];
    const expected = removeItem(arr, 2);
    const actual = [
      {
        id: 1,
        title: "title g g g g",
        price: 49.5,
        image: "https://image",
        description: "lorem",
        category: "cat1",
      },
      {
        id: 3,
        title: "title j j j ",
        price: 13.5,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem3",
        category: "cat2",
      },
    ];

    expect(expected).toEqual(actual);
  });

  test("should add item 4", () => {
    const arr = [
      {
        id: 1,
        title: "title g g g g",
        price: 49.5,
        image: "https://image",
        description: "lorem",
        category: "cat1",
      },
      {
        id: 2,
        title: "title h h h h",
        price: 74.9,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem2",
        category: "cat1",
      },
      {
        id: 3,
        title: "title j j j ",
        price: 13.5,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem3",
        category: "cat2",
      },
    ];
    const expected = addProduct(arr, {
      id: 4,
      title: "title f f f ",
      price: 13.5,
      image: "http://dummyimage.com/714x600.png",
      description: "lorem4",
      category: "cat3",
    });
    const actual = [
      {
        id: 1,
        title: "title g g g g",
        price: 49.5,
        image: "https://image",
        description: "lorem",
        category: "cat1",
      },
      {
        id: 2,
        title: "title h h h h",
        price: 74.9,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem2",
        category: "cat1",
      },
      {
        id: 3,
        title: "title j j j ",
        price: 13.5,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem3",
        category: "cat2",
      },
      {
        id: 4,
        title: "title f f f ",
        price: 13.5,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem4",
        category: "cat3",
      },
    ];

    expect(expected).toEqual(actual);
  });

    test("should edit item 4", () => {
    const arr = [
      {
        id: 1,
        title: "title g g g g",
        price: 49.5,
        image: "https://image",
        description: "lorem",
        category: "cat1",
      },
      {
        id: 2,
        title: "title h h h h",
        price: 74.9,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem2",
        category: "cat1",
      },
      {
        id: 3,
        title: "title j j j ",
        price: 13.5,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem3",
        category: "cat2",
      },
    ];
    const expected = editProduct(arr, {
        id: 3,
        title: "title f f f ",
        price: 13.5,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem4",
        category: "cat3",
    });
    const actual = [
        {
            id: 1,
            title: "title g g g g",
            price: 49.5,
            image: "https://image",
            description: "lorem",
            category: "cat1",
            },
            {
            id: 2,
            title: "title h h h h",
            price: 74.9,
            image: "http://dummyimage.com/714x600.png",
            description: "lorem2",
            category: "cat1",
            },
            {
            id: 3,
            title: "title f f f ",
            price: 13.5,
            image: "http://dummyimage.com/714x600.png",
            description: "lorem4",
            category: "cat3",
            },
    ];
});

test("should filter by category", () => {
    const arr = [
      {
        id: 1,
        title: "title g g g g",
        price: 49.5,
        image: "https://image",
        description: "lorem",
        category: "cat1",
      },
      {
        id: 2,
        title: "title h h h h",
        price: 74.9,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem2",
        category: "cat1",
      },
      {
        id: 3,
        title: "title j j j ",
        price: 13.5,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem3",
        category: "cat2",
      },
    ];
    const expected = filterByCategory(arr, "cat1");
    const actual = [
      {
        id: 1,
        title: "title g g g g",
        price: 49.5,
        image: "https://image",
        description: "lorem",
        category: "cat1",
      },
      {
        id: 2,
        title: "title h h h h",
        price: 74.9,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem2",
        category: "cat1",
      },
    ];

    expect(expected).toEqual(actual);
  });

    test("should filter by price", () => {
    const arr = [
      {
        id: 1,
        title: "title g g g g",
        price: 49.5,
        image: "https://image",
        description: "lorem",
        category: "cat1",
      },
      {
        id: 2,
        title: "title h h h h",
        price: 74.9,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem2",
        category: "cat1",
      },
      {
        id: 3,
        title: "title j j j ",
        price: 13.5,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem3",
        category: "cat2",
      },
    ];
    const expected = filterByPrice(arr, 50);
    const actual = [
        {
            id: 1,
            title: "title g g g g",
            price: 49.5,
            image: "https://image",
            description: "lorem",
            category: "cat1",
            },
            {
            id: 2,
            title: "title h h h h",
            price: 74.9,
            image: "http://dummyimage.com/714x600.png",
            description: "lorem2",
            category: "cat1",
            },
    ];

    expect(expected).toEqual(actual);
});

test("should filter by title", () => {
    const arr = [
      {
        id: 1,
        title: "title g g g g",
        price: 49.5,
        image: "https://image",
        description: "lorem",
        category: "cat1",
      },
      {
        id: 2,
        title: "title h h h h",
        price: 74.9,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem2",
        category: "cat1",
      },
      {
        id: 3,
        title: "title j j j ",
        price: 13.5,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem3",
        category: "cat2",
      },
    ];
    const expected = filterByTitle(arr, "title g");
    const actual = [
      {
        id: 1,
        title: "title g g g g",
        price: 49.5,
        image: "https://image",
        description: "lorem",
        category: "cat1",
      },
    ];

    expect(expected).toEqual(actual);
  });

test("should add product", () => {
    const arr = [
      {
        id: 1,
        title: "title g g g g",
        price: 49.5,
        image: "https://image",
        description: "lorem",
        category: "cat1",
      },
      {
        id: 2,
        title: "title h h h h",
        price: 74.9,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem2",
        category: "cat1",
      },
      {
        id: 3,
        title: "title j j j ",
        price: 13.5,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem3",
        category: "cat2",
      },
    ];
    const expected = addProduct(arr, {
        id: 4,
        title: "title f f f ",
        price: 13.5,
        image: "http://dummyimage.com/714x600.png",
        description: "lorem4",
        category: "cat3",
    });
    const actual = [
        {
            id: 1,
            title: "title g g g g",
            price: 49.5,
            image: "https://image",
            description: "lorem",
            category: "cat1",
            },
            {
            id: 2,
            title: "title h h h h",
            price: 74.9,
            image: "http://dummyimage.com/714x600.png",
            description: "lorem2",
            category: "cat1",
            },
            {
            id: 3,
            title: "title j j j ",
            price: 13.5,
            image: "http://dummyimage.com/714x600.png",
            description: "lorem3",
            category: "cat2",
            },
            {
            id: 4,
            title: "title f f f ",
            price: 13.5,
            image: "http://dummyimage.com/714x600.png",
            description: "lorem4",
            category: "cat3",
            },
    ];

    expect(expected).toEqual(actual);

});
});
