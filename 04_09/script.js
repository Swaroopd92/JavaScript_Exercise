var course = new Object();

// course.title = "JS training";
// course.instructor = "FName LName";
// course.level = 1;;
// course.views = 0;

// console.log(course);

var course = {
    title: "JS training",
    instructor: "FName LName",
    level: 1,
    published: true,
    views: 0,

    updateViews: function(){
        return ++course.views;
    }
}

console.log(course.views);
course.updateViews();
console.log(course.views);
