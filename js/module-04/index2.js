// let igor = {
//     name: "Igor",
//     DOB: 1985,
//     gender: "male",
//     ocupation: "student",
// };

// let Person = function(name, DOB, gender, job){
//     this.name = name;
//     this.DOB = DOB;
//     this.gender = gender;
//     this.job = job;
//     // this.calculateAge = function(){
//     //     console.log(2018-this.DOB);
//     // }
// }
// Person.prototype.calculateAge = function(){
//     console.log(2018-this.DOB);
// }
//
// Person.prototype.lastName = 'smith';
//
// let igor = new Person('igor',1985,'male','student');
//
//
// let varya = new Person('varya',1989,'female','PM');
// let artem= new Person('artem',1992,'male','photographer');
//
//
// igor.calculateAge();
// varya.calculateAge();
// artem.calculateAge();
//
// console.log(igor.lastName);
// console.log(varya.lastName);
// console.log(artem.lastName);


///Object.create

let personProto = {
    calculateAge: function () {
        console.log(2018 - this.YOB);
    }
};

let igor = Object.create(personProto);
igor.name = "igor";
igor.YOB = 1985;
igor.job = "student";

let varya = Object.create(personProto,
    {
        name: {value: "varya"},
        YOB: {value: 1989},
        job: {value: "PM"}
    });

































