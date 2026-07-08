const quizzes = {
    html: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language",
                "Hyper Text Main Language"
            ],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which tag is used to create a hyperlink?",
            options: [
                "<a>",
                "<link>",
                "<href>",
                "<url>"
            ],
            answer: "<a>"
        },
        {
            question: "Which HTML tag is used for the largest heading?",
            options: [
                "<h6>",
                "<heading>",
                "<h1>",
                "<head>"
            ],
            answer: "<h1>"
        },
        {
            question: "Which tag is used to insert an image?",
            options: [
                "<picture>",
                "<img>",
                "<image>",
                "<src>"
            ],
            answer: "<img>"
        },
        {
            question: "Which attribute is used to uniquely identify an element?",
            options: [
                "class",
                "name",
                "id",
                "style"
            ],
            answer: "id"
        }
    ],

    css: [
        {
            question: "What does CSS stand for?",
            options: [
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Colorful Style Sheets"
            ],
            answer: "Cascading Style Sheets"
        },
        {
            question: "Which property changes the text color?",
            options: [
                "font-color",
                "text-color",
                "color",
                "background"
            ],
            answer: "color"
        },
        {
            question: "Which property changes the background color?",
            options: [
                "bg-color",
                "background-color",
                "background",
                "color"
            ],
            answer: "background-color"
        },
        {
            question: "Which CSS property makes corners rounded?",
            options: [
                "border-style",
                "border-radius",
                "radius",
                "round"
            ],
            answer: "border-radius"
        },
        {
            question: "Which property is used to add space inside an element?",
            options: [
                "margin",
                "padding",
                "spacing",
                "border"
            ],
            answer: "padding"
        }
    ],

    javascript: [
        {
            question: "Which keyword declares a constant variable?",
            options: [
                "let",
                "var",
                "const",
                "constant"
            ],
            answer: "const"
        },
        {
            question: "Which method selects an element by ID?",
            options: [
                "querySelectorAll()",
                "getElementById()",
                "getElementsByClassName()",
                "createElement()"
            ],
            answer: "getElementById()"
        },
        {
            question: "Which array method returns a new array with matching elements?",
            options: [
                "map()",
                "filter()",
                "find()",
                "forEach()"
            ],
            answer: "filter()"
        },
        {
            question: "Which event is triggered when a button is clicked?",
            options: [
                "mouseover",
                "click",
                "change",
                "submit"
            ],
            answer: "click"
        },
        {
            question: "Which operator checks both value and data type?",
            options: [
                "==",
                "=",
                "===",
                "!="
            ],
            answer: "==="
        }
    ]
};

const option1 = document.querySelector(".option1")

const dropDown = document.querySelector("#quiz")

const showQuizHtml = () => {
    console.log(dropDown.value);

    if (dropDown.value.toLowerCase() === "HTML".toLowerCase()){
        console.log("done");
        
    }

}



option1.addEventListener("click", showQuizHtml)