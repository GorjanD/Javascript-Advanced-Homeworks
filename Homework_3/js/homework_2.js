fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
    .then(response => {
        response.json()
            .then(result => {
                for (student of result) {

                    function gradeHigherThanThree(student) {
                        return student.averageGrade > 3;
                    }
                    function gradeEqualToFive(student) {
                        return student.averageGrade === 5;
                    }
                    function femaleStudents(student) {
                        return student.gender === "Female"
                    }
                    function maleStudents(student) {
                        return student.gender === "Male"
                    }
                    function aboveEighteen(student) {
                        return student.age > 18
                    }
                    function citySkopje(student) {
                        return student.city === "Skopje"
                    }
                    function aboveTwentyFour(student) {
                        return student.age > 24
                    }
                    function averageGrades(student) {
                        return student.averageGrade
                    }
                    function sumGrades(sum, grade) {
                        return sum += grade
                    }
                    function gradeHigherThanTwo(student) {
                        return student.averageGrade > 2
                    }
                    function startWithB(student) {
                        if (student.firstName.startsWith('B') === true) {
                            return student.firstName
                        }
                    }
                }
                console.log("-------------|TASK 1|-------------")

                let higherThanThree = result.filter(gradeHigherThanThree)

                console.log("These students have an average grade higher than 3:")
                function logNames(higherThanThree) {
                    console.log(`Name: ${higherThanThree.firstName} Average Grade: ${higherThanThree.averageGrade}`)
                }
                higherThanThree.forEach(logNames)

                console.log("-------------|TASK 2|-------------")

                let femaleStudentsAvgGradeFive = result
                    .filter(gradeEqualToFive)
                    .filter(femaleStudents)

                function logNames2(femaleStudentsAvgGradeFive) {
                    console.log(`Name: ${femaleStudentsAvgGradeFive.firstName}`)
                }
                femaleStudentsAvgGradeFive.forEach(logNames2)

                console.log("-------------|TASK 3|-------------")

                let maleStudentsAbove18Skopje = result
                    .filter(maleStudents)
                    .filter(aboveEighteen)
                    .filter(citySkopje)

                function logNames3(maleStudentsAbove18Skopje) {
                    console.log(`Name: ${maleStudentsAbove18Skopje.firstName} ${maleStudentsAbove18Skopje.lastName}`)
                }
                maleStudentsAbove18Skopje.forEach(logNames3)

                console.log("-------------|TASK 4|-------------")

                let avgGradeFemale24 = result
                    .filter(femaleStudents)
                    .filter(aboveTwentyFour)
                    .map(averageGrades)
                    .reduce(sumGrades, 0)

                let avgGradeFemale24array = []

                let arrayFemales24 = result
                    .filter(femaleStudents)
                    .filter(aboveTwentyFour)

                function logArrayFemales(arrayFemales24) {
                    avgGradeFemale24array.push(`${arrayFemales24.productName}`)
                }
                arrayFemales24.forEach(logArrayFemales)

                let averageGradeF = avgGradeFemale24 / avgGradeFemale24array.length

                console.log("The average grades of all female students over the age of 24 is:")
                console.log(averageGradeF.toFixed(2))

                console.log("-------------|TASK 5|-------------")

                let malesStartingWithBAvg2 = result
                    .filter(maleStudents)
                    .filter(gradeHigherThanTwo)
                    .filter(startWithB)

                function logNames4(malesStartingWithBAvg2) {
                    console.log(`Name: ${malesStartingWithBAvg2.firstName}`)
                }
                malesStartingWithBAvg2.forEach(logNames4)
            })
    })