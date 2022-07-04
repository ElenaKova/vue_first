Vue.filter('First_lettersUpperCase', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.replace(/\b\w/g, function (n) {
        return n.toUpperCase();
    });
});



let app = new Vue({
    el: '#app',
    data: {
        show: false,
        title: 'Countries and their Capitals',
        name_of_country: [{
                country: 'Albania',
                capital: 'Tirana'
            },
            {
                country: 'Andorra',
                capital: 'Andorra la Vella'
            },
            {
                country: 'Austria',
                capital: 'Vienna'
            },
            {
                country: 'Belarus',
                capital: 'Minsk'
            },
            {
                country: 'Belgium',
                capital: 'Brussels'
            },
            {
                country: 'Bosnia and Herzegovina',
                capital: 'Sarajevo'
            }
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
        ]
    },
    methods: {

    },
    computed: {
        // ShowMess() {
        //     return this.title.toUpperCase();
        // }
    },
    filters: {
        lowerCase(value) {
            return value.toLowerCase();
        }
    }
});