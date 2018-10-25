var task1 = new Task(
    '需求訪談', '2018-10-23', '2018-10-30');
var task2 = new Task(
	'系統設計', '2018-11-01', '2018-11-12');
	
console.log(task1.subTasks === task2.subTasks);
console.log(task1.getDuration === task2.getDuration);
