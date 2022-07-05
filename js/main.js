// Vue.filter('First_lettersUpperCase', function (value) {
//     if (!value) return '';
//     value = value.toString();
//     return value.replace(/\b\w/g, function (n) {
//         return n.toUpperCase();
//     });
// });

// Vue.filter('currency', function (value) {
//     return '$' + value.toFixed(2).replace(/(d)(?=(ddd)+(?!d))/g, "$1,");
// });

// Vue.component('app-name_of_country', {
//     data: function () {
//         return {
//             name_of_country: [{
//                     country: 'Albania',
//                     capital: 'Tirana'
//                 },
//                 {
//                     country: 'Andorra',
//                     capital: 'Andorra la Vella'
//                 },
//                 {
//                     country: 'Austria',
//                     capital: 'Vienna'
//                 },
//                 {
//                     country: 'Belarus',
//                     capital: 'Minsk'
//                 },
//                 {
//                     country: 'Belgium',
//                     capital: 'Brussels'
//                 },
//                 {
//                     country: 'Bosnia and Herzegovina',
//                     capital: 'Sarajevo'
//                 }
//             ]
//         };
//     },
//     template: '<div><div class="list-country" v-for="name in name_of_country"> <p> Country: {{name.country}} <br> Capital: {{ name.capital}} </p> </div></div>'
// });

Vue.component('simple-counter', {
    data: function () {
        return {
            count: 0
        };
    },
    template: '<button id="components-count" v-on:click="count++"> {{count}} </button>',
});

let app = new Vue({
    el: '#app',
    // data: {
    //     show: false,
    //     title: 'Countries and their Capitals',
    //     number: 25000,
    //     date: '10-02-1999',

    //     name_of_country: [{
    //             country: 'Albania',
    //             capital: 'Tirana'
    //         },
    //         {
    //             country: 'Andorra',
    //             capital: 'Andorra la Vella'
    //         },
    //         {
    //             country: 'Austria',
    //             capital: 'Vienna'
    //         },
    //         {
    //             country: 'Belarus',
    //             capital: 'Minsk'
    //         },
    //         {
    //             country: 'Belgium',
    //             capital: 'Brussels'
    //         },
    //         {
    //             country: 'Bosnia and Herzegovina',
    //             capital: 'Sarajevo'
    //         }
    // Bulgaria: 'Sofia',
    // croatia: 'Zagreb',
    // czechia :'Prague',
    // Denmark :'copenhagen',
    // Estonia :'Tallinn',
    // Finland :'Helsinki',
    // France :'Paris',
    // Germany: 'Berlin',
    // Greece :'Athens',
    // Hungary: 'Budapest',
    // Iceland: 'Reykjavik',
    // Ireland: 'Dublin',
    // Italy :'Rome',
    // Latvia :'Riga',
    // Liechtenstein :'Vaduz',
    // Lithuania: 'Vilnius',
    // Luxembourg: 'Luxembourg',
    // Malta: 'Valletta',
    // Moldova: 'chisinau',
    // Monaco :'Monaco',
    // Montenegro: 'Podgorica',
    // Netherlands: 'Amsterdam',
    // North Macedonia: 'Skopje',
    // Norway :'Oslo',
    // Poland :'Warsaw',
    // Portugal: 'Lisbon',
    // Romania: 'Bucharest',
    // San Marino: 'San Marino',
    // Serbia: 'Belgrade',
    // Slovakia: 'Bratislava',
    // Slovenia :'Ljubljana',
    // Spain :'Madrid',
    // Sweden: 'Stockholm',
    // Switzerland: 'Bern',
    // Ukraine:'Kyiv',
    // United: 'Kingdom London'
    //     ]
    // },
    // components: {
    //     'app-name_of_country': {
    //         data: function () {
    //             return {
    //                 name_of_country: [{
    //                         country: 'Albania',
    //                         capital: 'Tirana'
    //                     },
    //                     {
    //                         country: 'Andorra',
    //                         capital: 'Andorra la Vella'
    //                     },
    //                     {
    //                         country: 'Austria',
    //                         capital: 'Vienna'
    //                     },
    //                     {
    //                         country: 'Belarus',
    //                         capital: 'Minsk'
    //                     },
    //                     {
    //                         country: 'Belgium',
    //                         capital: 'Brussels'
    //                     },
    //                     {
    //                         country: 'Bosnia and Herzegovina',
    //                         capital: 'Sarajevo'
    //                     }
    //                 ]
    //             };
    //         },
    //         template: '<div><div class="list-country" v-for="name in name_of_country"> <p> Country: {{name.country}} <br> Capital: {{ name.capital}} </p> </div></div>'
    //     }
    // },

    // methods: {

    // },
    // computed: {
    //     // ShowMess() {
    //     //     return this.title.toUpperCase();
    //     // }
    // },
    // filters: {
    //     lowerCase(value) {
    //         return value.toLowerCase();
    //     },

    //     dateFilter(value) {
    //         let monthNames = [
    //             "January", "February", "March",
    //             "April", "May", "June", "July",
    //             "August", "September", "October",
    //             "November", "December"
    //         ];
    //         let dateArr = value.split("-");
    //         dateArr[1] = monthNames[parseInt(dateArr[1]) - 1];
    //         return dateArr[0] + " " + dateArr[1] + " " + dateArr[2] + " year";
    //     }
    // }
});