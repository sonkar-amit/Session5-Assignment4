var employee1 = {"name":"Amit",
                "age":"27",
                "salary":1600000,
                "address":{"city":"Bangalore",
                           "state":"Karnataka",
                           "pincode":"560043"
                          }
               };

var employee2 = {"name":"Rahul",
                "age":"29",
                "salary":1000000,
                "address":{"city":"Varanasi",
                            "state":"U.P",
                            "pincode":"221001"
                            }
                };

var employee3 = {"name":"Samsul",
                "age":"28",
                "salary":10000,
                "address":{"city":"Kolkata",
                            "state":"West Bengal",
                            "pincode":"700007"
                            }
                };

var employee4 = {"name":"Paulami",
                "age":"28",
                "salary":900000,
                "address":{"city":"Kolkata",
                            "state":"West Bengal",
                            "pincode":"700021"
                            }
                };

var employee5 = {"name":"Akshatha",
                "age":"31",
                "salary":1200000,
                "address":{"city":"Bangalore",
                            "state":"Karnataka",
                            "pincode":"560043"
                            }
                };

var empArray = [employee1,employee2,employee3,employee4,employee5];


console.log(empArray[0].name);
console.log(empArray[0].age);
console.log(empArray[0].salary);
console.log(empArray[0].address.city);
console.log(empArray[0].address.state);
console.log(empArray[0].address.pincode);
