const course = {
    courseName : "java script ",
    prices : 999,
    courseInsctrutor : "chay or code"
}
// console.log(course);
console.log(course.prices);



const {courseInsctrutor} = course
console.log(courseInsctrutor);

const { courseInsctrutor: ran} = course
console.log(ran); 