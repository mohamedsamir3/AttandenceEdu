function CURRENT_COURSE(get_courseName, e) {
  console.log(get_courseName);
  // e.preventDefault();
  // e.stopPropagation();
  localStorage.setItem("courseName", get_courseName);
}

/** */
// document.querySelector(".course_name").innerHTML = "courseName";
let getCourseNameFromLocalStorage = localStorage.getItem("courseName");
document.querySelector(".course_name").textContent =
  getCourseNameFromLocalStorage;
console.log(getCourseNameFromLocalStorage);

// let course_title = document.querySelectorAll(".course-title");

// console.log("title", course_title);
