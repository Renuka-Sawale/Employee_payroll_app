window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

/*Template literal ES6 features*/
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>";
        let innerHtml = `${headerHtml}`;
        let empPayrollList = createEmployeePayrollJSON();
        for (const empPayrollData of empPayrollList) {
            innerHtml = `${innerHtml}
            <tr><!--Hard Coding only test purpose -->
                <td><img class="profile" alt="" src="${empPayrollData._profilePic}">
                </td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <img name="${empPayrollData._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                    <img name="${empPayrollData._id}" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
            `;
        }
        document.querySelector('#table-display').innerHTML = innerHtml;
    }
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name:'Samarth',
            _gender: 'male',
            _department: [
                'Engineering'
            ],
            _salary:'500000',
            _startDate: '20 Oct 2017',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        },
        {
            _name:'Reena',
            _gender: 'female',
            _department: [
                'Sales'
            ],
            _salary:'400000',
            _startDate: '20 Sept 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/profile-images/Ellipse -1.png'   
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList)=> {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class= 'dept-label'>${dept}</div>`
    }
    return deptHtml;
}