var profiles =[{
    fname:'Ram',
    age:30,
    gender:'M',
    salary:250000
 },
 {
    fname:'Laxmi',
    age:26,
    gender:'F',
    salary:300000
 },
 {
    fname:'Siva',
    age:26,
    gender:'M',
    salary:230000
 },
 {
    fname:'Tara',
    age:28,
    gender:'F',
    salary:200000
 },
 {
    fname:'Meera',
    age:24,
    gender:'F',
    salary:230000
 }]
 
 function pAge(a){
    return [a.fname , a.age];
  }

console.log('Finding their fnames and age: ',profiles.map(pAge));