
/*168*/
//#1
console.log('168_1:');
let arr168_1 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log( arr168_1[3][2]) 
console.log( arr168_1[1][1]) 
console.log( arr168_1[2][0]) 
console.log( arr168_1[0][0]) 

//#2
console.log('168_2:');
let arr168_2 = [[1, 2], [3, 4], [5, 6]];
let sum168_2 = arr168_2[0][0] + arr168_2[0][1] + arr168_2[1][0] + arr168_2[1][1] + arr168_2[2][0] + arr168_2[2][1];
console.log(sum168_2);

/*169*/

console.log('169 :');
let arr169 = [
  [
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
let sum169 = arr169[0][0][0] + arr169[0][0][1] + arr169[0][1][0] + arr169[0][1][1] + arr169[1][0][0] + arr169[1][0][1] + arr169[1][1][0] + arr169[1][1][1];
console.log(sum169);

/*170*/

console.log('170:');
let arr170 = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
let sum170 = arr170[0][0] + arr170[0][1] + arr170[0][2] + arr170[0][3][0] + arr170[0][3][1] + arr170[0][3][2][0] + arr170[0][3][2][1] + arr170[1][0] + arr170[1][1][0] + arr170[1][1][1];
console.log(sum170);

/*171*/

// #1
console.log('171_1:');
let arr171_1 = [[1, 2, 3], [4, 5], [6]];
let sum171_1 = 0;
for (let subArr171_1 of arr171_1) {
	for (let elem171_1 of subArr171_1) {
        sum171_1 += elem171_1;
	}
}
console.log(sum171_1);

//#2
console.log(' 171_2:');
let arr171_2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum171_2 = 0;
for (let subArr171_2 of arr171_2) {
	for (let elem171_2 of subArr171_2) {
        for (let elem171_3 of elem171_2)
        sum171_2 += elem171_3;
	}
}
console.log(sum171_2);

/*172*/
// #1
console.log('172_1:');
let arr172_1 = [[1, 2, 3], [4, 5], [6]];
let sum172_1 = 0;
for (let i = 0; i < arr172_1.length; i++) {
  for (let j = 0; j < arr172_1[i].length; j++) {
    sum172_1 += arr172_1[i][j];
  }
}
console.log(sum172_1);

// #2
console.log('172_2:');
let arr172_2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum172_2 = 0;
for (let i = 0; i < arr172_2.length; i++) {
  for (let j = 0; j < arr172_2[i].length; j++) {
    for (let k = 0; k < arr172_2[i][j].length; k++) {
      sum172_2 += arr172_2[i][j][k];
    }
  }
}
console.log(sum172_2);

/*173*/
// #1
console.log('173_1:');
let arr173_1 = [];
for (let i = 0; i < 3; i++) {
  arr173_1[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr173_1[i].push(j); 
  }
}
console.log(arr173_1);

// #2
console.log('173_2:');
let arr173_2 = [];
for (let i = 0; i < 3; i++) {
  arr173_2[i] = [];
  for (let j = 0; j < 4; j++) {
    arr173_2[i].push('x');
  }
}
console.log(arr173_2);

// #3
console.log('173_3:');
let arr173_3 = [];
for (let i = 0; i < 3; i++) {
  arr173_3[i] = []; 
  for (let j = 0; j < 2; j++) {
    arr173_3[i][j] = []; 
    for (let k = 1; k <= 5; k++) {
      arr173_3[i][j].push(k); 
    }
  }
}
console.log(arr173_3);

/*174*/

//#1
console.log('174_1:');
let arr174_1 = [];
for (let i = 0; i < 3; i++) {
    arr174_1[i] = []
	for (let j = 1; j <= 5; j++) {
		arr174_1[i].push(j);
	}
}
console.log(arr174_1);

// #2
console.log('174_2:');
let arr174_2 = [];
for (let i = 0; i < 3; i++) {
	arr174_2[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr174_2[i].push(j);
	}
}
console.log(arr174_2);

// #3
console.log('174_3:');
let arr174_3 = [];
for (let i = 0; i < 3; i++) {
	arr174_3[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr174_3[i].push(j);
	}
}
console.log(arr174_3);

// #4
console.log('174_4:');
let arr174_4 = [];
for (let i = 0; i < 3; i++) {
	arr174_4[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr174_4[i].push(j);
	}
}
console.log(arr174_4);

// #5
console.log('174_5:');
let arr174_5 = [];
for (let i = 0; i < 3; i++) {
	arr174_5[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr174_5[i].push(j);
	}
}
console.log(arr174_5);

// #6
console.log('174_6:');
let arr174_6 = [];
for (let i = 0; i < 3; i++) {
	arr174_6[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr174_6[i].push(j);
	}
}
console.log(arr174_6);

/*175*/

// #1
console.log('Результат задания 175 №1:');
let arr175_1 = [];
for (let i = 0; i < 4; i++) {
  arr175_1[i] = [];
  for (let j = 0; j < 2; j++) {
    arr175_1[i][j] = i * 2 + j + 1;
  }
}
console.log(arr175_1);

// #2
console.log('Результат задания 175 №2:');
let arr175_2 = [];
for (let i = 0; i < 4; i++) {
  arr175_2[i] = [];
  for (let j = 0; j < 3; j++) {
    arr175_2[i][j] = (i * 3 + j + 1) * 2;
  }
}
console.log(arr175_2);

// #3
console.log('Результат задания 175 №3:');
let arr175_3 = [];
let k = 1;
for (let i = 0; i < 2; i++) {
  arr175_3[i] = [];
  for (let j = 0; j < 2; j++) {
    arr175_3[i][j] = [];
    for (let l = 0; l < 2; l++) {
      arr175_3[i][j][l] = k++;
    }
  }
}
console.log(arr175_3);

// #4
console.log('Результат задания 175 №4:');
let arr175_4 = [];
let k4 = 1;
for (let i = 0; i < 3; i++) {
  arr175_4[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_4[i][j] = k4;
    k4++;
  }
}
console.log(arr175_4);

// #5
console.log('Результат задания 175 №5:');
let arr175_5 = [];
let k5 = 1;
for (let i = 0; i < 3; i++) {
  arr175_5[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_5[i][j] = k5;
    k5++; 
  }
}
console.log(arr175_5);

// #6
console.log('Результат задания 175 №6:');
let arr175_6 = [];
let k6 = 1;
for (let i = 0; i < 3; i++) {
  arr175_6[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_6[i][j] = k6;
    k6++; 
  }
}
console.log(arr175_6);

// #7
let arr175_7 = [];
let k7 = 1; // Инициализация переменной k
for (let i = 0; i < 3; i++) {
  arr175_7[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_7[i][j] = k7;
    k7++;
  }
}
console.log(arr175_7);

// #8
console.log('Результат задания 175 №8:');
let arr175_8 = [];
for (let i = 0, k8 = 1; i < 3; i++) {
  arr175_8[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_8[i][j] = k8;
    k8++; 
  }
}
console.log(arr175_8);

// #9
console.log('Результат задания 175 №9:');
let arr175_9 = [];
for (let i = 0, k9 = 1; i < 3; i++) {
  arr175_9[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_9[i][j] = k9;
    k9++; // Увеличение k
  }
}
console.log(arr175_9);

// #10
console.log('Результат задания 175 №10:');
let arr175_10 = [];
for (let i = 0, k10 = 1; i < 3; i++) {
  arr175_10[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_10[i][j] = k10;
    k10++; // Увеличение k
  }
}
console.log(arr175_10);

// #11
console.log('Результат задания 175 №11:');
let arr175_11 = [];
for (let i = 0, k11 = 1; i < 3; i++) {
  arr175_11[i] = [];
  for (let j = 0; j < 3; j++) {
    arr175_11[i][j] = k11++;
  }
}
console.log(arr175_11);

// #12
console.log('Результат задания 175 №12:');
let arr175_12 = [];
let k12 = 1;

for (let i = 0; i < 3; i++) {
  arr175_12[i] = []; // Исправлено на arr[i]
  
  for (let j = 0; j < 3; j++) {
    arr175_12[i][j] = k12;
    k12++;
  }
}
console.log(arr175_12);

// #13
console.log('Результат задания 175 №13:');
let arr175_13 = [];
for (let i = 0, k13 = 1; i < 3; i++) {
  arr175_13[i] = [];
  
  for (let j = 0; j < 3; j++, k13++) { // Добавлено условие для j и увеличение k
    arr175_13[i][j] = k13;
  }
}
console.log(arr175_13);

/*176*/
// #1
console.log('176_1:');
let obj176_1 = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
}
let sum176_1 = 0;
for (let key in obj176_1) {
  for (let innerKey in obj176_1[key]) {
    sum176_1 += obj176_1[key][innerKey];
  }
}
console.log(sum176_1); // Вывод: 45

// #2
console.log('176_2:');
let obj176_2 = {
  1: {
    1: 'a1',
    2: 'a2',
    3: 'a3',
  },
  2: {
    1: 'b1',
    2: 'b2',
    3: 'b3',
  },
  3: {
    1: 'c1',
    2: 'c2',
    3: 'c3',
  },
}
console.log(obj176_2[2][2]); 
console.log(obj176_2[3][1]); 

//#3
console.log('176_3:');
let obj176_3 = {
  key1: {
    a: 1, b: 2, c: {
      d: 3,
      e: 4,
    }, f: 5,
  },
  key2: {
    g: 6, h: 7,
  },
}
let sum176_3 = obj176_3.key1.a + obj176_3.key1.b + obj176_3.key1.c.d + obj176_3.key1.c.e + obj176_3.key1.f + obj176_3.key2.g + obj176_3.key2.h;
console.log(sum176_3); 

/*task#177*/
// #1
console.log('Результат задания 177 №1:');
let obj177_1 = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let sum177_1 = 0;
for (let key in obj177_1) {
	let subObj177_1 = obj177_1[key];
	
	for (let subKey in subObj177_1) {
		sum177_1 += subObj177_1[subKey];
	}
}
console.log(sum177_1);

// #2
console.log('Результат задания 177 №2:');
let obj177_2 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
sum177_2 = 0;
for (let key in obj177_2) {
	let subObj = obj177_2[key];
	
	for (let subKey in subObj) {
		let a = subObj[subKey];

		for (let b in a) {
			sum177_2 += a[b];
		}
	}
}
console.log(sum177_2);

/*178*/

console.log('Результат задания 178 №1:');
let students = {
	'group1': ['Grebeneva', 'Ashirova', 'Ablyazova'],
	'group2': ['Kolobkov', 'Lebedev', 'Lazarev'],
	'group3': ['Baskov', 'Gagarina', 'Karnaval'],
};
console.log(students['group1'][0]);

/*179*/
// #1
console.log('Результат задания 179 №1:');
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};
for (let group in data) {
	for (let name of data[group]) {
		console.log(name);
	}
}

// #2
console.log('Результат задания 179 №2:');
data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];
for (let group of data) {
	for (let name in group) {
		console.log(group[name]);
	}
}

// #3
console.log('Результат задания 179 №3:');
let data3 = [
  {
    1: [
      'data111',
      'data112',
      'data113',
    ],
    2: [
      'data121',
      'data122',
      'data123',
    ],
  },
  {
    1: [
      'data211',
      'data212',
      'data213',
    ],
    2: [
      'data221',
      'data222',
      'data223',
    ],
  },
  {
    1: [
      'data411',
      'data412',
      'data413',
    ],
    2: [
      'data421',
      'data422',
      'data423',
    ],
  },
];
for (let i = 0; i < data3.length; i++) {
  let subObj = data[i]; 
  for (let key in subObj) {
    let items = subObj[key];
    console.log(items); 
  }
}

/*180*/

// #1
console.log('Результат задания 180 №1:');
let employees = [
  {
      name: 'name1',
      salary: 300,
  },
  {
      name: 'name2',
      salary: 400,
  },
  {
      name: 'name3',
      salary: 500,
  },
];

for (let employee of employees) {
  console.log(employee.name + ' ' + employee.salary);
}

// #2
console.log('Результат задания 180 №2:');
employees = [
  {
      name: 'name1',
      salary: 300,
  },
  {
      name: 'name2',
      salary: 400,
  },
  {
      name: 'name3',
      salary: 500,
  },
];
let sum = 0;
for (let employee of employees) {
  sum += employee.salary;
}
console.log(sum);

// #3
console.log('Результат задания 180 №3:');
employees = [
  {
      name: 'name1',
      salary: 300,
      age: 28,
  },
  {
      name: 'name2',
      salary: 400,
      age: 29,
  },
  {
      name: 'name3',
      salary: 500,
      age: 30,
  },
  {
      name: 'name4',
      salary: 600,
      age: 31,
  },
  {
      name: 'name5',
      salary: 700,
      age: 32,
  },
];
sum = 0;
for (let employee of employees) {
  if (employee.age >= 30) {
      sum += employee.salary;
  }
}
console.log(sum);

/*181*/

// #1
console.log('Результат задания 181 №1:');
let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};
let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5;   // число от 0 до 11
console.log(months[lang][month]);

// #2
console.log('Результат задания 181 №2:');
affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}
let year = '2018'; // может быть или 'ru' или 'en'
month = 11;  
let day = 29;
let info = 2; // число от 0 до 11
console.log(affairs[year][month][day][info]);

// #3
console.log('Результат задания 181 №3:');
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}
let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

// #4
console.log('Результат задания 181 №4:');
obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}
key1 = 'key2';
key2 = 'key4';
console.log(obj[key1][key2]);

// #5
console.log('Результат задания 181 №5:');
obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}
key1 = 'key2';
key2 = 'key4';
console.log(obj[key1][key2]);

// #6
console.log('Результат задания 181 №6:');
obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}
key1 = 'key2';
key2 = 'key4';
console.log(obj[key1][key2]);

/*182*/
console.log('Результат задания 182 №1:');
let employees182 = [
	{
		name: 'Yasya',
		salary: 300,
		age: 28,
	},
	{
		name: 'Adile',
		salary: 400,
		age: 29,
	},
	{
		name: 'Kate',
		salary: 500,
		age: 30,
	},
];
employees182.push({
	name: 'Zemine',
	salary: 600,
	age: 31,
});
console.log(employees182[3])

/*183*/
console.log('Результат задания 183 №1:');
let affairs183 = {
  '2019-12-28': ['data11', 'data12', 'data13'],
  '2019-12-29': ['data21', 'data22', 'data23'],
  '2019-12-30': ['data31', 'data32', 'data33'],
};

affairs183['2019-12-29'].push('data24'); 
affairs183['2019-12-31'] = []; 
affairs183['2019-12-31'].push('data41', 'data42'); 

let students183 = {
  'group1': {
    'subgroup11': ['student111', 'student112', 'student113'],
    'subgroup12': ['student121', 'student122', 'student123'],
  },
  'group2': {
    'subgroup21': ['student211', 'student212', 'student213'],
    'subgroup22': ['student221', 'student222', 'student223'],
  },
  'group3': {
    'subgroup31': ['student311', 'student312', 'student313'],
    'subgroup32': ['student321', 'student322', 'student323'],
  },
};
students183['group1']['subgroup11'].push('student114'); 
students183['group1']['subgroup13'] = ['student131', 'student132']; 
students183['group4'] = {
  'subgroup41': ['student411', 'student412'], 
};
console.log(students183['group1']['subgroup12']);
console.log(students183['group2']['subgroup22']);
console.log(students183['group3']['subgroup32']);
