// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

function getLearnerData(course, ag, submissions) {

    const result = [
        {
            id: 0,
            avg: 0,
            ass1_av: 0,
            ass2_av: 0
        },
        {
            id: 0,
            avg: 0,
            ass1_av: 0,
            ass2_av: 0
        }
    ]


    if (course === 451) {
        console.log(`introduction to JavasScript:${course}`);

        if (ag === 12345) {

            if (submissions[0] === 125) {

                let maxpoint = 0;
                for (let i = 0; i < 2; i++) {
                    maxpoint = maxpoint + AssignmentGroup.assignments[i].points_possible;
                }

                let totalscore = 0;
                for (let i = 1; i <= 2; i++) {
                    totalscore = totalscore + submissions[i];
                }
                result[0].id = submissions[0];
                result[0].avg = totalscore / maxpoint;
                result[0].ass1_av = submissions[1] / AssignmentGroup.assignments[0].points_possible;
                result[0].ass2_av = submissions[2] / AssignmentGroup.assignments[1].points_possible;

            }
            if (submissions[0] === 132) {
                let maxpoint1 = 0;
                for (let i = 0; i < 2; i++) {
                    maxpoint1 = maxpoint1 + AssignmentGroup.assignments[i].points_possible;
                }
                let totalscore1 = 0;
                for (let i = 1; i <= 2; i++) {
                    totalscore1 = totalscore1 + submissions[i];
                }
                result[1].id = submissions[0];
                result[1].avg = (totalscore1 - 15) / maxpoint1;
                result[1].ass1_av = submissions[1] / AssignmentGroup.assignments[0].points_possible;
                result[1].ass2_av = (submissions[2] - 15) / AssignmentGroup.assignments[1].points_possible;


            } else if (submissions[0] !== 125 || submissions[0] !== 132) {
                console.log(' This student is not enrolled');

            }




        } else if (ag !== 12345) {
            console.log('Please check your data');

        }
    } else if (course !== 451) {
        console.log(`This course number: ${course} is not our database`);
    }


    return result;

}


    let test={}
    test=(getLearnerData(451, 12345, [102, 39, 125]));
    console.log(test);
    






