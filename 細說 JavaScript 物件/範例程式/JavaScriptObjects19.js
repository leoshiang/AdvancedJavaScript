function Task(name, start, end) {
    this.name = name;
    this.start = new Date(start);
    this.end = new Date(end);
    this.subTasks = [];
}
Task.prototype = {
    constructor: Task,
    getDuration: function() {
        return this.end - this.start;
    }
}