
class Student {
    constructor(id, name, gender, dob, hometown) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.hometown = hometown;
    }
}

class StudentManager {
    constructor() {
        this.students = JSON.parse(localStorage.getItem('students')) || [];
    }

    addStudent(student) {
        this.students.push(student);
        this.saveToLocalStorage();
    }

    updateStudent(updatedStudent) {
        this.students = this.students.map(student => student.id === updatedStudent.id ? updatedStudent : student);
        this.saveToLocalStorage();
    }

    deleteStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('students', JSON.stringify(this.students));
    }

    getStudents() {
        return this.students;
    }
}

const studentManager = new StudentManager();

function displayStudents() {
    const students = studentManager.getStudents();
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = '';

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.dob}</td>
            <td>${student.hometown}</td>
            <td class="action-buttons">
                <button onclick="editStudent('${student.id}')">Sửa</button>
                <button onclick="deleteStudent('${student.id}')">Xóa</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function addOrUpdateStudent() {
    const id = document.getElementById('studentId').value || Date.now().toString();
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const hometown = document.getElementById('hometown').value;

    if (name && gender && dob && hometown) {
        const student = new Student(id, name, gender, dob, hometown);

        if (document.getElementById('studentId').value) {
            studentManager.updateStudent(student);
        } else {
            studentManager.addStudent(student);
        }

        displayStudents();
        clearForm();
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
}

function editStudent(id) {
    const student = studentManager.getStudents().find(student => student.id === id);

    document.getElementById('studentId').value = student.id;
    document.getElementById('name').value = student.name;
    document.getElementById('gender').value = student.gender;
    document.getElementById('dob').value = student.dob;
    document.getElementById('hometown').value = student.hometown;
}

function deleteStudent(id) {
    studentManager.deleteStudent(id);
    displayStudents();
}

function clearForm() {
    document.getElementById('studentId').value = '';
    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('hometown').value = '';
}

window.onload = displayStudents;
