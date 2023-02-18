function reception(input) {
    let firstEmployee = Number(input[0]);
    let secondEmployee = Number(input[1]);
    let thirdEmployee = Number(input[2]);
    let studentCount = Number(input[3]);
    let totalForHour = firstEmployee + secondEmployee + thirdEmployee;
    let needTime = 0;

    while (studentCount > 0) {
        studentCount -= totalForHour;
        needTime++;

        if (needTime % 4 === 0) {
            needTime++;
        }
    }

    console.log(`Time needed: ${needTime}h.`);
}
reception(['5', '6', '4', '20'])
reception(['1','2','3','45'])
reception(['3','2','5','40'])