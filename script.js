const studentList = document.querySelector(".studentList");
const studentName = document.querySelector(".studentName");
const btn = document.querySelector(".btn")
const studentListArr = [];
btn.addEventListener("click", function () {
    let studentNames = studentName.value.trim();
    // console.log(studentNames);
    if (studentNames) {
        studentListArr.push(studentNames);
        studentName.value = "";
        updateList();
    }
    function updateList() {
        studentList.innerHTML = "";
        // studentListArr.map((item, index) => {
        //     studentList.innerHTML += `<li>${item} </li>`;
        // })
        studentListArr.forEach((item, index) => {
            studentList.innerHTML += `<li>${item}</li>`

        })
    }

});

// ===============================

const output = document.querySelector(".output");
const inputText = document.querySelector(".inputText");
const btn1 = document.querySelector(".btn1")
btn1.addEventListener("click", function () {
    const inputTexts = inputText.value;
    if (inputTexts) {
        const textLength = inputTexts.length;
        output.innerHTML = textLength;
        console.log(textLength)
    }
})

// ==========================================






























