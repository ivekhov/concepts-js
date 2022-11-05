const countries = [
    { name: 'Miami', country: 'usa' },
    { name: 'samarA', country: '  ruSsiA' },
    { name: 'Moscow ', country: ' Russia' },
    { name: 'istanbul', country: 'turkey' },
    { name: 'Moscow ', country: ' Russia' },
    { name: 'iStanbul', country: 'tUrkey' },
    { name: 'antalia', country: 'turkeY ' },
    { name: 'samarA', country: '  ruSsiA' },
    { name: 'Miami', country: 'usa' },
];

const normalize = (items) => {
  const result = {};
   const uniqNames = new Set();
    const uniqCountries = new Set();

    items.map((item) => {
        item.name = item.name.toLowerCase().trim();
        uniqNames.add(item.name);

        item.country = item.country.toLowerCase().trim();
        uniqCountries.add(item.country);
    });

    for (const country of uniqCountries.values()) {
        const cities = new Set();

        items
            .filter((item) => item.country === country)
            .map((item) => cities.add(item.name));

        result[country] = Array.from(cities).sort();
    }
  return result;
};


console.log(
    normalize(countries),
);

// BEGIN
// export default (data) => data
//     .map(({ name, country }) => ({ city: name.toLowerCase(), country: country.toLowerCase() }))
//     .map(({ city, country }) => ({ city: city.trim(), country: country.trim() }))
//     .map(({ city, country }) => [country, city])
//     .sort() // sort countries and cities
//     .reduce((acc, [country, city]) => {
//         const citiesAcc = acc[country] ?? [];
//         const cities = citiesAcc.concat(city);
//         const uniqueCities = new Set(cities);
//         return { ...acc, [country]: [...uniqueCities] };
//     }, {});
// END

