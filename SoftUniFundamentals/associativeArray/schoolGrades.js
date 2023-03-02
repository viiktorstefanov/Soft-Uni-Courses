function schoolGrades(input) {
let obj = {};
for(line of input) {
line = line.split(' ');
let studentName = line[0];
let grades = line.slice(1);
let averageGrade = 0;
for(line of grades) {
    averageGrade += Number(line);
}
averageGrade /= grades.length;
if(obj[studentName]) {
    obj[studentName] += averageGrade;
    let newGrade =  (obj[studentName])/2;
    obj[studentName] = newGrade;
}
else {
    obj[studentName] = averageGrade;
}
}
let sortedObj = Object.keys(obj).sort((a,b) => a.localeCompare(b));
for(key of sortedObj) {
    let value = (obj[key]).toFixed(2);
    console.log(`${key}: ${value}`);
}

}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6',]
)

function schoolGrades(students) {
    let studentList = students.reduce((acc, curr, index) => {
        let [name, ...grades] = curr.split(' ');
        grades = grades.map((g) => Number(g));
        let currentStudent = acc.find((s) => s.name === name);

        if (currentStudent) {
            currentStudent.grades.push(...grades);
        } else {
            currentStudent = {
                name,
                grades,
                average: 0,
            };

            acc.push(currentStudent);
        }

        const totalGrades = currentStudent.grades.reduce((acc, curr) => { acc += curr; return acc; }, 0);
        currentStudent.average = (totalGrades / currentStudent.grades.length).toFixed(2);

        return acc;
    }, []);

    studentList = studentList.sort((a, b) => a.name.localeCompare(b.name));
    studentList.forEach((stu) => console.log(`${stu.name}: ${stu.average}`));
}