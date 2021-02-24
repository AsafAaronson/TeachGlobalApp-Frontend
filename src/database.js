export const activities = [
    /*
        id: str,
        date: date.
        creator: "str",
        title: "str",
        tags: ["str","str"]
        description: "str", // (up to 100)
        content: {
            goals: ["str", "str", "str"],
            accesories: ["str", "str", "str"],
            todolist: ["str", "str", "str"],
            dothis: ["str"],
            adapt: "str",
            additionalPages : []
        }
    */
    {
        id: 1,
        type: 'activity',
        title: "Activity 1",
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        content: {
            goals: [
                "The students will learn the ABC",
                "The Children will have fun"
            ],
            accesories: ["Bla", "aasper", "Paint Brushes", "Floaties"],
            todolist: [
                "Do step ksdjf1",
                "Take the kids downstairs",
                "Show the, the pool"
            ],
            dothis: [
                "Born and raised in the Austrian Empire, Tesla received an advanced education in engineering and physics in the 1870s and gained practical experience in the early"
            ],
            adapt: "if the kids are old ekfekrjnfkerjnf",
            additionalPages : []
        }
    },
    {
        id: 2,
        type: 'activity',
        title: "Kings and Queens of the ABC",
        description:
            "A simple activity to teach or practice the ABC letters in a visual way",
        content: {
            goals: [
                "Teach the students how to write the big and small letters",
                "The students will practices identifying the letters on the page",
                "Cooperation between the students"
            ],
            accesories: [
                "A big blank bristol sheet",
                "A bristol with the ABC letters (if you have one)",
                "Stickers of the letters (Optional)",
                "Pencils",
                "Of course you can "
            ],
            todolist: [
                "If you don't have one, make a big bristol with all the ABC letters (capital and small)"
            ],
            dothis: [
                "At the beginning of the lesson, show all the students a bristol with all the letters and of the ABC (capital and small).",
                "Then, ask each student to copy one large letter and one small letter that he chooses (each student should choose a different letter).",
                "Then put a large bristol in the middle of the table / circle and ask each child to write his letter in a different place on the board. Hang the Bristol on the wall and ask each child to come and get a sticker (if you have some) of one of the letters and put them in the right place. If there are no stickers, you can simply ask the child to Identify a particular letter."
            ],
            adapt:
                "This is the basic idea of ​​activity but you can adjust the activity to the children's age and the level of the children. for example if its to easy for the group, instead letters you can use groups of words like colors.",
            additionalPages : ["https://picsum.photos/595/842", "https://picsum.photos/595/841"]

        }
    },
    {
        id: 3,
        type: 'activity',
        title: "Memory Game",
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        content: {
            goals: ["str", "str", "str"],
            accesories: ["str", "str", "str"],
            todolist: ["str", "str", "str"],
            dothis: ["str"],
            adapt: "str",
            additionalPages : []
        }
    },
    {
        id: 4,
        type: 'activity',
        title: "Puzzle",
        description:
            "Some quick example text to build on the card title andI love my Liorita",
        content: {
            goals: ["str", "str", "str"],
            accesories: ["str", "str", "str"],
            todolist: ["str", "str", "str"],
            dothis: ["str"],
            adapt: "str",
            additionalPages : []
        }
    },
    {
        id: 5,
        type: 'activity',
        title: "Activity 5",
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        content: {
            goals: ["str", "str", "str"],
            accesories: ["str", "str", "str"],
            todolist: ["str", "str", "str"],
            dothis: ["str"],
            adapt: "str",
            additionalPages : []
        }
    }
];

export const workpages = [
    {
        id: "generator",
        type: 'workpage',
        title: "Workpage Generator",
        description: "Decide your prefrences and build your own math workpage",
        imgUrl: "https://picsum.photos/200/125",
        content: ""
    },
    {
        id: 6,
        type: 'workpage',
        title: "Multipication Table",
        description: "Workpage demonstartion that has a purpose of demo ",
        imgUrl: "https://picsum.photos/200/125",
        content: { imgUrl: "https://picsum.photos/595/842" }
    },
    {
        id: 7,
        type: 'workpage',
        title: "Math Workpage 1",
        description: "Workpage demonstartion that has a purpose of bla",
        imgUrl: "https://picsum.photos/200/125",
        content: { imgUrl: "https://picsum.photos/595/842" }
    },
    {
        id: 8,
        type: 'workpage',
        title: "Math Workpage 2",
        description:
            "Workpage demonstartion that has a purpose of  coserntent.",
        imgUrl: "https://picsum.photos/200/125",
        content: { imgUrl: "https://picsum.photos/595/842" }
    }
];

export let users = [
    {
        id: 1,
        profilePicUrl: "https://picsum.photos/50/50",
        firstName: "Lior",
        lastName: "Parnes",
        userLikes: [1, 2, 4, 8, 7]
    },
    {
        id: 2,
        profilePicUrl: "https://picsum.photos/50/50",
        firstName: "Asaf",
        lastName: "Aaronson",
        userLikes: [1, 3, 6]
    },
];
