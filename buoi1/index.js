// Bài 1
const sinhvien = {
	"ten" : "Truong Dinh Tuan",
	"tuoi" : 18,
	"email" : "truongtuan_tuantruong829@gmail.com"
};
const sv = { ten, tuoi, email } = sinhvien;
console.log(ten, '\t', tuoi, '\t', email);
// Bài 2
const name = document.getElementById('ten').innerText = ten;
const age = document.getElementById('tuoi').innerText = tuoi;
const mail = document.getElementById('mail').innerText = email;
// Bài 3
var dulieu = '{"ten" : "Thanh Nga", "tuoi" : 18, "email" : "thanhnga0797@gmail.com"}';
var sv1 = JSON.parse(dulieu);
var svArr = Object.entries(sv1);
var row = document.createElement('tr');
svArr.forEach( item => {
	let cell = document.createElement('td');
	cell.textContent = item[1];
	row.appendChild(cell);
	
});
document.querySelector('tbody').appendChild(row);
// Bài 4
var danhsach = `[
	{
		"ten" : "Trương Đình Tuấn",
		"tuoi" : 25,
		"email" : "truongtuan829@gmail.com"
	},
	{
		"ten" : "Phạm Thế Quang",
		"tuoi" : 19,
		"email" : "thequang19@gmail.com"
	},
	{
		"ten" : "Phạm Thanh Nga",
		"tuoi" : 25,
		"email" : "thanhnga0797@gmail.com"
	}
]`;
var ds = JSON.parse(danhsach);
ds.forEach(item => {
	let row = document.createElement('tr');
	for (let key in item) { // for in trả về id của đối tượng
		let cell = document.createElement('td');
		cell.textContent = item[key];
		row.appendChild(cell);
	}
	document.querySelector('tbody').appendChild(row);
});
ds.forEach(( item, index) => {
	let row = document.createElement('tr');
	let cellName = document.createElement('td');
	cellName.innerText = ds[index].ten;
	cellName.style.cssText = "color: #2626ff";	
	row.appendChild(cellName);

	let cellAge = document.createElement('td');
	cellAge.innerText = ds[index].tuoi;
	cellAge.style.cssText = "color: #ffd326";	
	row.appendChild(cellAge);
	
	let cellEmail = document.createElement('td');
	cellEmail.innerText = ds[index].email;
	cellEmail.style.cssText = "color: #8bc906";	
	row.appendChild(cellEmail);

	document.querySelector('tbody').appendChild(row);
});
