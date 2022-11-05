import yup from 'yup';


const genres = [
    'drama', 'horror', 'fantasy', 'classic',
];
const books = [
    { name: 'book', author: 'author' },
    { author: 'author 2' },
];

const schema = yup.object().shape({
    name: yup.string().required(),
    author: yup.string().required(),
    pagesCount: yup.number().positive().integer(),
    link: yup.string().url(),
    genre: yup.string().oneOf(genres),
});

const isInvalid = (schema, book) => {
    return !(schema.isValidSync(book));
};

const getInvalidBooks = (data) => {
    const invalidBooks = [];
    data.filter((book) => isInvalid(book)).map((book) => invalidBooks.push(book));
    return invalidBooks;
};



const invalidBooks = getInvalidBooks(books);
console.log(
    invalidBooks
)

 // ValidationError: this is a required field
// schema.validateSync('wrongemail'); // ValidationError: this must be a valid email
// schema.validateSync('support@hexlet.io'); // возвращает само значение
