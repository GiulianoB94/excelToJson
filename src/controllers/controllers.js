let XLSX = require('xlsx')
let excel = XLSX.readFile('src/new.xlsx');
let nombreHoja = excel.SheetNames;
let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
		

const getAllData = () => {

	//Arrays a filtrar
	const idAll = []
	const Nivel1All = []
	const Nivel2All = []
	const Nivel3All = []
	const Visible4All = []


	for (const itemFila of datos) {

		// 1.Traemos datos de Excel
		const idExcel =	itemFila['Id']
		const nivel1Excel =	itemFila['Nivel 1']
		const nivel2Excel =	itemFila['Nivel 2']
		const nivel3Excel =	itemFila['Nivel 3']
		const visExcel =	itemFila['Visible']	

		// 2.Pusheamos todos los datos a los arrays a filtrar
		idAll.push(idExcel)
		Nivel1All.push(nivel1Excel)
		Nivel2All.push(nivel2Excel)
		Nivel3All.push(nivel3Excel)
		Visible4All.push(visExcel)
	}

	//Eliminamos datos duplicados
	const idFIlter = new Set(idAll)
	const nivel1Filter = new Set(Nivel1All)
	const nivel2Filter = new Set(Nivel2All)
	const nivel3Filter = new Set(Nivel3All)
	const vis = new Set(Visible4All)

	let id	= [...idAll]
	let nivel1	= [...nivel1Filter]
	let nivel2	= [...nivel2Filter]
	let nivel3	= [...nivel3Filter]
	let visible	= [...Visible4All]


}

getAllData()

module.exports = {
	getAllData
}



// 	//Categoria A
// 	if (!nievl1) {
// 		//Se carga en la db
// 	}
// 	//Categoria B y A
// 	if (!nivel2) {
// 		//	Buscamos en Nivel1, en la tabla A.
// 		// FindById.
// 		// Se guarda en B la tabla A
// 	}

// 	if (!nivel1) {

// 	}

// }
		



