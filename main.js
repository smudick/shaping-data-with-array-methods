// const businesses = [
//   {
//     purchasingAgent: { nameLast: 'Kirlin', nameFirst: 'Kristy' },
//     phoneWork: '089.129.2290 x9400',
//     orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
//     companyName: 'Care-media',
//     companyIndustry: 'Education',
//     addressZipCode: '56839',
//     addressStateCode: 'WI',
//     addressFullStreet: '8417 Franklin Court Tunnel',
//     addressCity: 'Mouthcard',
//   },
//   {
//     purchasingAgent: { nameLast: 'Steuber', nameFirst: 'Kamron' },
//     phoneWork: '(833) 222-7579 x5874',
//     orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
//     companyName: 'Stanholding',
//     companyIndustry: 'Hospitality',
//     addressZipCode: '09705',
//     addressStateCode: 'NY',
//     addressFullStreet: '2889 Fawn Court Garden',
//     addressCity: 'Fellsmere',
//   },
//   {
//     purchasingAgent: { nameLast: 'Gutkowski', nameFirst: 'Kaylee' },
//     phoneWork: '235.266.6278',
//     orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
//     companyName: 'Highnix',
//     companyIndustry: 'Agriculture',
//     addressZipCode: '49376',
//     addressStateCode: 'ME',
//     addressFullStreet: '5734 Maple Avenue Throughway',
//     addressCity: 'Little Genesee',
//   },
//   {
//     purchasingAgent: { nameLast: 'Crona', nameFirst: 'Lauren' },
//     phoneWork: '1-449-987-3083 x23263',
//     orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
//     companyName: 'Conit',
//     companyIndustry: 'Defense',
//     addressZipCode: '53326',
//     addressStateCode: 'IL',
//     addressFullStreet: '5755 Hillside Drive Crossroad',
//     addressCity: 'Norval',
//   },
//   {
//     purchasingAgent: { nameLast: 'Krajcik', nameFirst: 'Elvera' },
//     phoneWork: '1-730-411-8580',
//     orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
//     companyName: 'Dong-tom',
//     companyIndustry: 'Energy',
//     addressZipCode: '67071',
//     addressStateCode: 'KS',
//     addressFullStreet: '4826 Arch Street Lights',
//     addressCity: 'Newburyport',
//   },
//   {
//     purchasingAgent: { nameLast: 'Kling', nameFirst: 'Ellie' },
//     phoneWork: '(868) 043-0950',
//     orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
//     companyName: 'Dan-dox',
//     companyIndustry: 'Manufacturing',
//     addressZipCode: '98842',
//     addressStateCode: 'WV',
//     addressFullStreet: '9767 Cedar Court Corner',
//     addressCity: 'Prince George',
//   },
//   {
//     purchasingAgent: { nameLast: 'Robel', nameFirst: 'Otilia' },
//     phoneWork: '(298) 305-1942 x53653',
//     orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
//     companyName: 'J-base',
//     companyIndustry: 'Health care',
//     addressZipCode: '72993',
//     addressStateCode: 'FL',
//     addressFullStreet: '9954 Buckingham Drive Mountains',
//     addressCity: 'Vesper',
//   },
//   {
//     purchasingAgent: { nameLast: 'Gusikowski', nameFirst: 'Karolann' },
//     phoneWork: '(743) 934-8981 x692',
//     orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
//     companyName: 'Span-fix',
//     companyIndustry: 'Construction',
//     addressZipCode: '59860',
//     addressStateCode: 'MT',
//     addressFullStreet: '4151 Orange Street Extension',
//     addressCity: 'Little Rock Air Force Base',
//   },
//   {
//     purchasingAgent: { nameLast: 'Hartmann', nameFirst: 'Zena' },
//     phoneWork: '727.635.6610 x6483',
//     orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
//     companyName: 'Sanaplane',
//     companyIndustry: 'Information',
//     addressZipCode: '85156',
//     addressStateCode: 'NY',
//     addressFullStreet: '4765 Fairview Avenue Locks',
//     addressCity: 'Dennisville',
//   },
//   {
//     purchasingAgent: { nameLast: 'Torphy', nameFirst: 'Celia' },
//     phoneWork: '(992) 079-1670 x71569',
//     orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
//     companyName: 'Ran-taxon',
//     companyIndustry: 'Manufacturing',
//     addressZipCode: '96673',
//     addressStateCode: 'MD',
//     addressFullStreet: '7157 Hudson Street Ford',
//     addressCity: 'Watrous',
//   },
// ];

// const outEl = document.querySelector('#output');
// const nyEl = document.querySelector('#ny');
// const manEl = document.querySelector('#manufacturing');
// const agentEl = document.querySelector('#agents');
// outEl.innerHTML = '<h1>Active Businesses</h1>';
// // nyEl.innerHTML = '<h2>NY Businesses</h2>';
// // manEl.innerHTML = '<h2>Manufacturing Businesses</h2>';
// agentEl.innerHTML = '<h2>Agents</h2>';

// businesses.forEach((business) => {
//   let totalOrders = business.orders.reduce(
//     (currentTotal, nextValue) => (currentTotal += nextValue),
//     0
//   );

//   let zipCode = business['addressZipCode'];
//   outEl.innerHTML += `
//     <h2>
//     ${business.companyName}
//     ($${totalOrders})
//     </h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//         ${business.addressCity}, ${business['addressStateCode']} ${zipCode}
//     </section>
//   `;
//   outEl.innerHTML += '<hr/>';
// });

// const newYorkBusinesses = businesses.filter((business) => {
//   let inNewYork = false;

//   if (business.addressStateCode === 'NY') {
//     inNewYork = true;
//   }

//   return inNewYork;
// });

// const manufacturingBusinesses = businesses.filter((business) => {
//   let isManufacturing = false;
//   if (business.companyIndustry === 'Manufacturing') {
//     isManufacturing = true;
//   }
//   return isManufacturing;
// });

// // newYorkBusinesses.forEach((business) => {
// //   let zipCode = business['addressZipCode'];
// //   nyEl.innerHTML += `
// //     <h3>${business.companyName}</h3>
// //     <section>
// //       ${business.addressFullStreet}
// //     </section>
// //     <section>
// //         ${business.addressCity}, ${business['addressStateCode']} ${zipCode}
// //     </section>
// //   `;
// //   nyEl.innerHTML += '<hr/>';
// // });

// // manufacturingBusinesses.forEach((business) => {
// //   let zipCode = business['addressZipCode'];
// //   manEl.innerHTML += `
// //     <h3>${business.companyName}</h3>
// //     <section>
// //       ${business.addressFullStreet}
// //     </section>
// //     <section>
// //         ${business.addressCity}, ${business['addressStateCode']} ${zipCode}
// //     </section>
// //   `;
// //   manEl.innerHTML += '<hr/>';
// // });

// const agents = businesses.map((business) => {
//   const agent = business.purchasingAgent;
//   const company = business.companyName;
//   const phone = business.phoneWork;
//   return [agent, company, phone];
// });

// agents.forEach((agent) => {
//   agentEl.innerHTML += `<h3>${agent[0].nameFirst} ${agent[0].nameLast}</h3>`;
//   agentEl.innerHTML += `<h4>${agent[1]}</4>`;
//   agentEl.innerHTML += `<h4>${agent[2]}</4>`;
//   agentEl.innerHTML += '<hr/>';
// });

// document
//   .querySelector('#companySearch')
//   .addEventListener('keypress', (keyPressEvent) => {
//     if (keyPressEvent.charCode === 13) {
//       /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//       const foundAgent = agents.find((agent) =>
//         agent[0].nameFirst.includes(keyPressEvent.target.value)
//       );

//       agentEl.innerHTML = `
//                 <h2>
//                 ${foundAgent[0].nameFirst} ${foundAgent[0].nameLast}
//                 </h2>
//                 <section>
//                 ${foundAgent[1]}
//                 </section>
//                 <section>
//                 ${foundAgent[2]}
//                 </section>

//             `;
//     }
//   });

// const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10];

// const totalRainfall = monthlyRainfall.reduce((currentTotal, nextValue) => currentTotal += nextValue, 0);

// console.log(totalRainfall);

// const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

// const sentence = words.reduce((currentWord, nextWord) => currentWord += ` ${nextWord}`)

// console.log(sentence)

// const bigSpenders = businesses.filter(business => {
//   let isBigSpender = false;

//   business.orders.forEach((order) => {
//     if (order > 9000) {
//     isBigSpender = true;
//     }
//   })
//   return isBigSpender

// })

// console.log(bigSpenders);

// const planets = [
//   'mercury',
//   'venus',
//   'earth',
//   'mars',
//   'jupiter',
//   'saturn',
//   'uranus',
//   'neptune',
// ];

// /*
//     Use the forEach method to add the name of each planet
//     to a section element in your HTML with an id of "planets".
//     Use string templates to construct the DOM elements.
// */
// const planetEl = document.getElementById('planets');

// planets.forEach((planet) => {
//   planetEl.innerHTML += `<h2>${planet} </h2>`;
// });

// const planetsUppercase = planets.map((planet) => {
//   const firstLetter = planet[0].toUpperCase();
//   let otherLetters = '';
//   for (i = 1; i < planet.length; i++) {
//      otherLetters += planet[i].toLowerCase();
//   }
//   return firstLetter + otherLetters;
// });

// console.log(planetsUppercase);

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
// const hasE = planets.filter(planet => {
//   let containsE = false;
//   const e = 'e';
//     if (planet.includes(e)) {
//       containsE = true;
//     };
//   return containsE;
// })

// console.log(hasE);
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// let customers = [
//   {
//     "location": {
//       "street": "Old York Road",
//       "state": "Delaware",
//       "country": "Qatar",
//       "city": "Irma"
//     },
//     "last_name": "Herzog",
//     "job": {
//       "position": "Senior Intranet Assistant",
//       "phone_number": "1-035-577-1574",
//       "department": "sales",
//       "company": "Ganjazamlux"
//     },
//     "first_name": "Johnson",
//     "contacts": {
//       "mobile": "102.596.5226",
//       "email": [
//         "rerum@outlook.com",
//         "possimus_abraham@hotmail.com",
//         "yoshiko@gmail.com"
//       ]
//     }
//   },
//   {
//     "location": {
//       "street": "Maple Street",
//       "state": "Wyoming",
//       "country": "Uzbekistan",
//       "city": "Ortonville"
//     },
//     "last_name": "Stehr",
//     "job": {
//       "position": "Dynamic Quality Administrator",
//       "phone_number": "555.173.9685",
//       "department": "customer service support",
//       "company": "Hating"
//     },
//     "first_name": "Rogelio",
//     "contacts": {
//       "mobile": "1-746-406-3132",
//       "email": [
//         "saw_savannah@yahoo.com",
//         "this46@outlook.com",
//         "quidem_shayna@hotmail.com"
//       ]
//     }
//   },
//   {
//     "location": {
//       "street": "Cleveland Avenue",
//       "state": "South Carolina",
//       "country": "Lebanon",
//       "city": "New Salem"
//     },
//     "last_name": "McDermott",
//     "job": {
//       "position": "Human Research Architect",
//       "phone_number": "1-120-949-9685",
//       "department": "accounting",
//       "company": "Keyzazim"
//     },
//     "first_name": "Herbert",
//     "contacts": {
//       "mobile": "705.404.8808",
//       "email": [
//         "him_joshuah@yahoo.com",
//         "neha@outlook.com",
//         "tail@gmail.com"
//       ]
//     }
//   },
//   {
//     "location": {
//       "street": "Route 30",
//       "state": "Pennsylvania",
//       "country": "Nauru",
//       "city": "Brocton"
//     },
//     "last_name": "Buckridge",
//     "job": {
//       "position": "National Usability Technician",
//       "phone_number": "215.951.1943",
//       "department": "research and development",
//       "company": "Dongsolofind"
//     },
//     "first_name": "Keagan",
//     "contacts": {
//       "mobile": "665.835.9595",
//       "email": [
//         "trade_hunter@yahoo.com",
//         "ut@hotmail.com",
//         "throw@gmail.com"
//       ]
//     }
//   },
//   {
//     "location": {
//       "street": "Arch Street",
//       "state": "Illinois",
//       "country": "Guam",
//       "city": "Stroud"
//     },
//     "last_name": "Barton",
//     "job": {
//       "position": "Dynamic Directives Analyst",
//       "phone_number": "1-069-596-0831 x15766",
//       "department": "operations",
//       "company": "Zoomruntam"
//     },
//     "first_name": "Kenton",
//     "contacts": {
//       "mobile": "(972) 219-3017",
//       "email": [
//         "alberto@outlook.com",
//         "june@gmail.com",
//         "rafaela@hotmail.com"
//       ]
//     }
//   },
//   {
//     "location": {
//       "street": "Race Street",
//       "state": "Nebraska",
//       "country": "Republic of Saudi Arabia",
//       "city": "Guelph"
//     },
//     "last_name": "Mitchell",
//     "job": {
//       "position": "Principal Implementation Specialist",
//       "phone_number": "713-818-2034 x23626",
//       "department": "IT support",
//       "company": "Hot-tom"
//     },
//     "first_name": "Hattie",
//     "contacts": {
//       "mobile": "(144) 533-6049",
//       "email": [
//         "river32@yahoo.com",
//         "class65@gmail.com",
//         "scale_oda@outlook.com"
//       ]
//     }
//   },
//   {
//     "location": {
//       "street": "Prospect Avenue",
//       "state": "Massachusetts",
//       "country": "Fiji",
//       "city": "Hachita"
//     },
//     "last_name": "Rohan",
//     "job": {
//       "position": "Customer Identity Producer",
//       "phone_number": "110-592-6773 x3160",
//       "department": "production",
//       "company": "Zapware"
//     },
//     "first_name": "Clotilde",
//     "contacts": {
//       "mobile": "005.981.1039",
//       "email": [
//         "winter@outlook.com",
//         "kyla@gmail.com",
//         "boy@yahoo.com"
//       ]
//     }
//   },
//   {
//     "location": {
//       "street": "Lexington Court",
//       "state": "Georgia",
//       "country": "Tokelau",
//       "city": "Blackwater"
//     },
//     "last_name": "Kuphal",
//     "job": {
//       "position": "Direct Division Executive",
//       "phone_number": "(763) 900-2576 x943",
//       "department": "operations",
//       "company": "Inchdonin"
//     },
//     "first_name": "Marcelle",
//     "contacts": {
//       "mobile": "1-511-518-7079",
//       "email": [
//         "try@outlook.com",
//         "part73@yahoo.com",
//         "mother5@hotmail.com"
//       ]
//     }
//   },
//   {
//     "location": {
//       "street": "Cobblestone Court",
//       "state": "Minnesota",
//       "country": "Saint Helena, Ascension and Tristan da Cunha",
//       "city": "North Stonington"
//     },
//     "last_name": "Thompson",
//     "job": {
//       "position": "Product Response Facilitator",
//       "phone_number": "(948) 430-6348 x4290",
//       "department": "communication",
//       "company": "Goldcare"
//     },
//     "first_name": "Briana",
//     "contacts": {
//       "mobile": "714-922-9557",
//       "email": [
//         "randi@outlook.com",
//         "christian@yahoo.com",
//         "tempore_gilda@hotmail.com"
//       ]
//     }
//   },
//   {
//     "location": {
//       "street": "Mill Street",
//       "state": "Kentucky",
//       "country": "Ireland",
//       "city": "Crystal"
//     },
//     "last_name": "Weimann",
//     "job": {
//       "position": "Future Web Representative",
//       "phone_number": "693-204-7849 x4251",
//       "department": "legal",
//       "company": "K-touch"
//     },
//     "first_name": "Brittany",
//     "contacts": {
//       "mobile": "1-327-084-4643",
//       "email": [
//         "she@hotmail.com",
//         "quam3@gmail.com",
//         "recusandae23@outlook.com"
//       ]
//     }
//   }
// ];

// customers.forEach((customer) => {
//   customer.contacts.email.forEach((address) => {
//     console.log(address);
//   })
// })

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.reverse().filter((value => value < 19)).map((number => (number * 1.5) - 1)).reduce((acc, cur) => acc + cur));c