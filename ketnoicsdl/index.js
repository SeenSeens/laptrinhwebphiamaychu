var mongo = require('mongodb-legacy');
const MongoClient = require('mongodb-legacy').MongoClient;
const client = new MongoClient("mongodb://127.0.0.1:27017");
const csdl = client.db("quanlyhanghoa");
/*csdl.createCollection("hoadon")
    	.then( ketqua => {
        	console.log('Đã tạo xong', ketqua.namespace)
    	})
	.catch( err => {
        	console.log('Không tạo được collection')
    	})
	.finally( () => client.close() )*/
/*csdl.collection('nhanvien')
	.insertOne( { "manv" : 11, "tennv" : "ITC"} )
	//.countDocuments()
	.then( ketqua => {
		console.log('Đã chèn xong dữ liệu', ketqua)
		//console.log('Số dòng dữ liệu', ketqua)
	})
	.catch( err => {
		console.log('Không chèn dữ liệu')
	})
	.finally( () => client.close() ) */
// Đếm số document trong collection
//csdl.collection('nhanvien')
//	.countDocuments()
//	.then( ketqua => {
//		console.log('Số dòng dữ liệu', ketqua)
//	})
//	.catch( err => {
//		console.log('Không biết')
//	})
//	.finally( _ => client.close())

// Chèn nhiều document
csdl.collection('nhanvien')
	.insertMany( [
		{ manv : 'Jonh', tennv : 'Highway 71' },
		{ manv : 'Peter', tennv : 'Lowstreet 4' },
		{ manv : 'Amy', tennv : 'Apple st 652' }
	] )
	.then( ketqua => {
		console.log( 'Đã chèn xong dữ liệu', ketqua)
	})
	.catch( err => { console.log( 'Không chèn dữ liệu' )})
	.finally( _ => client.close())

// Tìm document trong collection
// Ta sử dụng các phương thức find và findOne
//csdl.collection('nhanvien')
.find()
.toArray()
.then( ketqua => {
	for( dl of ketqua) {
		console.log( 	'Mã nhân viên: ', dl.manv,
				' Tên nhân viên', dl.tennv )
	}
})
.catch( err => { console.log( 'Không xem được dữ liệu )})
.finally( _ => client.close())
