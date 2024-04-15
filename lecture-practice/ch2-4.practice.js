//객체

let patient = {
  name: 'ji',
  age: 17,
  disease: 'cold',
};
console.log(patient);
console.log(patient.name);
console.log(patient['name']);
patient.name = 'kkg';
console.log(patient.name);
console.log(patient['name']);

let patientList = [
  { name: 'Jimin', age: 10 },
  { name: 'kkh', age: 12 },
  { name: 'sfdkjafsd', age: 20 },
];
console.log(patientList);
console.log('첫번째:', patientList[0]);
console.log('첫번째 나이:', patientList[0].age);
console.log('첫번째 나이:', patientList[0]['age']);
