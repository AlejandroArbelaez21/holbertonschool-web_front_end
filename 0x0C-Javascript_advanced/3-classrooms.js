const createClassRoom = (numbersOfStudents) => {

    const studentSeat = (seat) => {
        return function () {return seat}
    }

    const students = []
    for (let number = 0; number < numbersOfStudents; number++) {
        students.push(studentSeat(number + 1));
    }
    return students;
}
classRoom = createClassRoom(10);
