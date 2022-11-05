
// BEGIN (write your solution here) >>>

class PasswordValidator{
    constructor(...config) {
        this.params = {
            minLength: 8,
            containNumbers: true
        };
        Object.assign(this.params, config[0]);
    }

    getMinLength() {
        return this.params.minLength;
    }

    getContainNumbers() {
        return this.params.containNumbers;
    }

    validate(text) {
        const response = {};
        if (text.length < this.getMinLength()) {
            response['minLength'] = 'too small';
        }
        if (hasNumber(text) !== Boolean(this.getContainNumbers())) {
            response['containNumbers'] = 'should contain at least one number';
        }
        return response;
    }
};
//  << END


const options = {
    minLength: 118,
        containNumbers: false
};

// BEGIN example
// export default class PasswordValidator {
//     constructor(options = {}) {
//         const defaultOptions = {
//             minLength: 8,
//             containNumbers: true,
//         };
//
//         this.options = { ...defaultOptions, ...options };
//     }
//
//     validate(password) {
//         const errors = {};
//
//         if (password.length < this.options.minLength) {
//             errors.minLength = 'too small';
//         }
//
//         if (this.options.containNumbers) {
//             if (!hasNumber(password)) {
//                 errors.containNumbers = 'should contain at least one number';
//             }
//         }
//
//         return errors;
//     }
// }
// END example


// #
export default class Truncater {
    static defaultOptions = {
        separator: '...',
        length: 200,
    };
    // BEGIN >>
    constructor (options = {}) {
        this.options = { ...Truncater.defaultOptions, ...options };
    }

    truncate(text, ...options) {
        let copyOptions = this.options;
        this.options = { ...this.options, ...options[0] };
        if (text.length <= this.options.length) {
            this.options = copyOptions;
            return text;
        }
        const result = `${text.slice(0, this.options.length)}${this.options.separator}`;
        this.options = copyOptions;
        return result;
    }
    // < END
}

// const truncater2 = new Truncater({ 'length': 6 });
// console.log(
//   truncater2.truncate('one two', { 'separator': '.' }),// 'one tw.'
//   truncater2.truncate('one two', { 'length': '3' }), // 'one...'
// );

// const truncater = new Truncater();
// console.log(
//   truncater.truncate('one two'), // 'one two'
//   truncater.truncate('one two', { 'length': 6 }), // 'one tw...'
// );

// BEGIN
// constructor(options = {}) {
//     this.options = { ...this.constructor.defaultOptions, ...options };
// }
//
// truncate(text, options = {}) {
//     const { length, separator } = { ...this.options, ...options };
//     return (text.length <= length) ? text : text.substring(0, length).concat(separator);
// }
// END

// 1 ternar operator could be with return
// 2 text.substring.concat




