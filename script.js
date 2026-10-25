
const countDisplay = document.getElementById("count");

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

function updateCount() {
    countDisplay.textContent = count;
}

increaseBtn.addEventListener("click", function () {
    count++;
    updateCount();
});

decreaseBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
    }

    updateCount();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateCount();
});




const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");
const charCount = document.getElementById("charCount");
const clearBtn = document.getElementById("clearBtn");

function updatePreview() {
    const text = textInput.value;

    if (text.length === 0) {
        preview.textContent = "Your text will appear here";
    } else {
        preview.textContent = text;
    }

    charCount.textContent = text.length;
}

textInput.addEventListener("input", updatePreview);

clearBtn.addEventListener("click", function () {
    textInput.value = "";
    updatePreview();
    textInput.focus();
});




const imageSelect = document.getElementById("imageSelect");
const hobbyImage = document.getElementById("hobbyImage");
const imageCaption = document.getElementById("imageCaption");

const hobbies = {
    film: {
        src: "imagess/films.jpg",
        alt: "fav film",
        caption: "My favourite coffee"
    },

    book: {
        src: "imagess/books.jpg",
        alt: "fav book",
        caption: "My favourite book"
    },

    music: {
        src: "imagess/music.jpg",
        alt: "fav album",
        caption: "My favourite album"
    }
};

function updateImage() {
    const selectedHobby = imageSelect.value;
    const hobby = hobbies[selectedHobby];

    hobbyImage.src = hobby.src;
    hobbyImage.alt = hobby.alt;
    imageCaption.textContent = hobby.caption;
}

imageSelect.addEventListener("change", updateImage);

updateImage();




const keyboardInput = document.getElementById("keyboardInput");
const keyStatus = document.getElementById("keyStatus");
const keyResult = document.getElementById("keyResult");

keyboardInput.addEventListener("keydown", function (event) {
    keyStatus.textContent = "Last pressed key: " + event.key;

    if (event.key === "Enter") {
        event.preventDefault();
        keyResult.textContent = keyboardInput.value;
    }

    if (event.key === "Escape") {
        keyboardInput.value = "";
        keyResult.textContent = "";
    }
});




const interactiveCard = document.getElementById("interactiveCard");
const cardInstruction = document.getElementById("cardInstruction");

interactiveCard.addEventListener("mouseenter", function () {
    interactiveCard.classList.add("highlight");
    cardInstruction.textContent = "Mouse entered the card!";
});

interactiveCard.addEventListener("mouseleave", function () {
    interactiveCard.classList.remove("highlight");
    cardInstruction.textContent = "Hover over the card or focus it using Tab.";
});

interactiveCard.addEventListener("focus", function () {
    interactiveCard.classList.add("highlight");
    cardInstruction.textContent = "The card is focused!";
});

interactiveCard.addEventListener("blur", function () {
    interactiveCard.classList.remove("highlight");
    cardInstruction.textContent = "Hover over the card or focus it using Tab.";
});



