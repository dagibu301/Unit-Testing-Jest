const cities = ['Bogota', 'Lima', 'Buenos Aires'];

const randomString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)];
    return string;
}

module.exports = randomString;