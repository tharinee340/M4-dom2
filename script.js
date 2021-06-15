var student = {};
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender = 'ชาย'

var student2 = {};
student2.name = 'คุณนาย'
student2.username = 'b@a.com'
student2.gender = 'หญิง'

function addStudentData(student){
	const output = document.getElementById('output')
	let row = document.createElement('div')
	row.classList.add("row")
	let columnName = document.createElement('div')
	columnName.classList.add("col-1")
	columnName.classList.add("offset-1")
	columnName.innerHTML = 'ชื่อ'
	let columnValue = document.createElement('div')
	columnValue = document.createElement('row')
	columnValue.classList.add('col')
	columnValue.innerHTML = student.name;
	row.appendChild(columnName)
	row.appendChild(columnValue)
	output.appendChild(row)

	row = document.createElement('div')
	row.classList.add("row")
	columnName = document.createElement('div')
	columnName.classList.add("col-1")
	columnName.classList.add("offset-1")
	columnName.innerHTML = 'เพศ'
	columnValue = document.createElement('div')
	columnValue = document.createElement('row')
	columnValue.classList.add('col')
	columnValue.innerHTML = student.gender;
	row.appendChild(columnName)
	row.appendChild(columnValue)
	output.appendChild(row)

	row = document.createElement('div')
	row.classList.add("row")
	columnName = document.createElement('div')
	columnName.classList.add("col-1")
	columnName.classList.add("offset-1")
	columnName.innerHTML = 'รหัส'
	columnValue = document.createElement('div')
	columnValue = document.createElement('row')
	columnValue.classList.add('col')
	columnValue.innerHTML = student.username;
	row.appendChild(columnName)
	row.appendChild(columnValue)
	output.appendChild(row)
}


var students = [
	student,
	secondStudent,
	{
		name: 'สมรักษ์',
		username: 'm@n.com',
		gender: 'ชาย'
	}

]

function addStudentToTable(index,student) {
	const tableBody = document.getElementById('tableBody')
	let row = document.createElement('tr')
	let cell = document.createElement('th')
	cell.setAttribute('score','row')
	cell.innerHTML = index
	row.appendChild(cell)
	cell = document.createElement('td')
	cell.innerHTML = student.name
	row.appendChild(cell)
	cell = document.createElement('td')
	//cell.innerHTML = student.username
	let img = document.createElement('img')
	img.setAttribute('src', student.imageLink)
	cell.appendChild(img)
	row.appendChild(cell)
	cell = document.createElement('td')
	cell.innerHTML = student.gender
	row.appendChild(cell)
	tableBody.appendChild(row)
}

function addStudentList(studentList) {
	let counter = 1
	for (student of studentList) {
		addStudentToTable(counter++, student)
	}
}
//window.addEventListener("load", function(){
//	addStudentList(students)
//})

function onLoad() {
	fetch('asset/students2.json').then(response => {
		return response.json()
		
	})
		.then(data => {
			let students = data
			addStudentList(data)
		})
	
}
