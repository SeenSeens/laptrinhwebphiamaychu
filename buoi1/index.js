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
document.querySelector('#content tbody').appendChild(row);
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
	document.querySelector('#content tbody').appendChild(row);
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

	document.querySelector('#content tbody').appendChild(row);
});
// Bài 5
var duLieu = {
	"danhSach" : [
		{
			"ten" : "Ngoc Nhi",
			"tuoi" : 19,
			"email" : "ngocnhi2701@gmail.com"
		},
		{
			"ten" : "Phạm Thanh Nga",
			"tuoi" : 25,
			"email" : "thanhnga0797@gmail.com"
		}
	]
}
//console.log(duLieu);
Object.keys(duLieu.danhSach).forEach( (item, index) => { // sử dụng Object.keys() thay cho duLieu.forEach
	let row = document.createElement('tr');

	let cellName = document.createElement('td');
	cellName.textContent = duLieu.danhSach[index].ten;
	row.appendChild(cellName);

	let cellAge = document.createElement('td');
	cellAge.textContent = duLieu.danhSach[index].tuoi;
	row.appendChild(cellAge);

	let cellEmail = document.createElement('td');
	cellEmail.textContent = duLieu.danhSach[index].email;
	row.appendChild(cellEmail);

	document.querySelector('#content tbody').appendChild(row);
});
// Bài 6
var congty = [
	{
		"tochuc" : [
			{
				"name" : "Ho Phuong Lam"
			},
			{
				"name" : "Ho Truong Thinh"
			}
		]
	},
	{
		"ketoan" : [
			{
				"name" : "Nguyen Tran Minh Chien",
			},
			{
				"name" : "Pham The Quang"
			}
		]
	},
	{
		"hanhchinh" : [
			{
				"name" : "Nguyen Thi Ngoc My",
			},
			{
				"name" : "Phan Hoang Bao Ngoc"
			}
			
		]
	}
];
congty.forEach(items => {
	//console.log(items)
	Object.keys(items).forEach(item=> {
		items[item].forEach(person => {
			console.log(person.name);
		});
	});
});

// Bài 7
var tochuc = [
	{
		"name" : "Ho Phuong Lam"
	},
	{
		"name" : "Ho Truong Thinh"
	}
];
var ketoan = [
	{
		"name" : "Nguyen Tran Minh Chien",
	},
	{
		"name" : "Pham The Quang"
	}
];
var hanhchinh = [
	{
		"name" : "Nguyen Thi Ngoc My",
	},
	{
		"name" : "Phan Hoang Bao Ngoc"
	}
];
var congty = [tochuc, ketoan, hanhchinh];
congty.forEach(item => {
	item.forEach(category => {
		console.log(category);
	})
})

// Bài 8
var b8 = {
	"contacts": [
		{
			"id": "c200",
			"name": "Ravi Tamada",
			"email": "ravi@gmail.com",
			"address": "xx-xx-xxxx,x - street, x - country",
			"gender": "male",
			"phone": {
				"mobile": "+91 0000000000",
				"home": "00 000000",
				"office": "00 000000"
			}
		},
		{
			"id": "c201",
			"name": "Johnny Depp",
			"email": "johnny_depp@gmail.com",
			"address": "xx-xx-xxxx,x - street, x - country",
			"gender": "male",
			"phone": {
				"mobile": "+91 0000000000",
				"home": "00 000000",
				"office": "00 000000"
			}
		},
		{
			"id": "c202",
			"name": "Leonardo Dicaprio",
			"email": "leonardo_dicaprio@gmail.com",
			"address": "xx-xx-xxxx,x - street, x - country",
			"gender": "male",
			"phone": {
				"mobile": "+91 0000000000",
				"home": "00 000000",
				"office": "00 000000"
			}
		},
		{
			"id": "c203",
			"name": "John Wayne",
			"email": "john_wayne@gmail.com",
			"address": "xx-xx-xxxx,x - street, x - country",
			"gender": "male",
			"phone": {
				"mobile": "+91 0000000000",
				"home": "00 000000",
				"office": "00 000000"
			}
		},
		{
			"id": "c204",
			"name": "Angelina Jolie",
			"email": "angelina_jolie@gmail.com",
			"address": "xx-xx-xxxx,x - street, x - country",
			"gender": "female",
			"phone": {
				"mobile": "+91 0000000000",
				"home": "00 000000",
				"office": "00 000000"
			}
		},
		{
			"id": "c205",
			"name": "Dido",
			"email": "dido@gmail.com",
			"address": "xx-xx-xxxx,x - street, x - country",
			"gender": "female",
			"phone": {
				"mobile": "+91 0000000000",
				"home": "00 000000",
				"office": "00 000000"
			}
		},
		{
			"id": "c206",
			"name": "Adele",
			"email": "adele@gmail.com",
			"address": "xx-xx-xxxx,x - street, x - country",
			"gender": "female",
			"phone": {
				"mobile": "+91 0000000000",
				"home": "00 000000",
				"office": "00 000000"
			}
		},
		{
			"id": "c207",
			"name": "Hugh Jackman",
			"email": "hugh_jackman@gmail.com",
			"address": "xx-xx-xxxx,x - street, x - country",
			"gender": "male",
			"phone": {
				"mobile": "+91 0000000000",
				"home": "00 000000",
				"office": "00 000000"
			}
		},
		{
			"id": "c208",
			"name": "Will Smith",
			"email": "will_smith@gmail.com",
			"address": "xx-xx-xxxx,x - street, x - country",
			"gender": "male",
			"phone": {
				"mobile": "+91 0000000000",
				"home": "00 000000",
				"office": "00 000000"
			}
		},
		{
			"id": "c209",
			"name": "Clint Eastwood",
			"email": "clint_eastwood@gmail.com",
			"address": "xx-xx-xxxx,x - street, x - country",
			"gender": "male",
			"phone": {
				"mobile": "+91 0000000000",
				"home": "00 000000",
				"office": "00 000000"
			}
		},
		{
			"id": "c2010",
			"name": "Barack Obama",
			"email": "barack_obama@gmail.com",
			"address": "xx-xx-xxxx,x - street, x - country",
			"gender": "male",
			"phone": {
				"mobile": "+91 0000000000",
				"home": "00 000000",
				"office": "00 000000"
			}
		},
		{
			"id": "c2011",
			"name": "Kate Winslet",
			"email": "kate_winslet@gmail.com",
			"address": "xx-xx-xxxx,x - street, x - country",
			"gender": "female",
			"phone": {
				"mobile": "+91 0000000000",
				"home": "00 000000",
				"office": "00 000000"
			}
		},
		{
			"id": "c2012",
			"name": "Eminem",
			"email": "eminem@gmail.com",
			"address": "xx-xx-xxxx,x - street, x - country",
			"gender": "male",
			"phone": {
				"mobile": "+91 0000000000",
				"home": "00 000000",
				"office": "00 000000"
			}
		}
	]
}
Object.keys(b8).forEach(item => {
	//console.log(item);
	b8[item].forEach(contact => {
		//console.log(contact);
		var newRow = document.createElement("tr");

		// var fields = ["id", "name", "email", "address", "gender"];
		// //console.log(fields);
		// fields.forEach(field => {
		//     var cell = document.createElement("td");
		//     cell.textContent = contact[field];
		//     newRow.appendChild(cell);
		// });


		Object.keys(contact).forEach(category  => {
			// Khúc này lấy ra id,... gender
			var cell = document.createElement("td");
		    cell.textContent = contact[category];
		    newRow.appendChild(cell);
			//console.log(category + ": " + contact[category]);

		    
			if(typeof(contact[category]) === "object") {
				var phoneCell = document.createElement("td");
  				var phoneText = "";
				Object.keys(contact[category]).forEach(key => {
					// Khúc này lấy ra phone
  					//phoneText += key + ": " + contact[category][key] + "<br>";
					console.log(key + ": " + contact[category][key]);
					
				});
				phoneCell.innerHTML = phoneText;
  				newRow.appendChild(phoneCell);

  				 // Add separate cells for each phone type
				["mobile", "home", "office"].forEach(phoneType => {
				    var phoneSubCell = document.createElement("td");
				    phoneSubCell.textContent = contact.phone[phoneType];
				    newRow.appendChild(phoneSubCell);
				});
			}
		});
		document.querySelector('#b8 tbody').appendChild(newRow);
	});
	
});