function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;

    this.updateViews = function() {
        return ++this.views;
    };
}



var course01 = new Course("JavaScript training", "FName LName", 1, true, 0);
var course02 = new Course("Up and running", "Swaroop D", 1, true, 100);

var courses = [
    new Course("Up and runninggggg", "Swaroop Deee", 1, true, 101),
    new Course("Up and runningota", "Swaroop Dota", 1, true, 102)
];

console.log(course01);
console.log(course02);

console.log(courses);
console.log(course01.views);
console.log(course02["views"]);