class Course {
    constructor({ name, language, created }) {
        this.language = language;
        this._name = name;
        this._created = created;
    }

    get created() {
        return this._getCreated();
    }

    getName() {
        return `${this.language}: ${this._name}`;
    }

    _getCreated() {
        return this._created;
    }

    setName(name) {
        this._name = name;
    }
}

const validate = (target, prop) => {
    if (prop.startsWith('_')) {
        throw new Error(`Property "${prop}" is protected`)
    }
    if (!(prop in target)) {
        throw new Error(`Property "${prop}" doesn't exist`);
    }


};

const protect = (course) => {
    const handler = {
        get: (target, prop) => {

            validate(target, prop);

            const property = target[prop];
            if (typeof property === 'function') {
                return property.bind(course);
            } else {
                return  property;
            }
        },
        set: (target, prop, value) => {

            validate(target, prop);

            target[prop] = value;
            return true;
        }

    }

    const proxy = new Proxy(course, handler);
    return proxy;
};
export default protect;


const test = () => {
    const course = new Course('Object-oriented design');
    const protectedCourse = protect(course);

    console.log(
        course.getName(), // "Object-oriented design"
        protectedCourse.getName(), // "Object-oriented design"

        // course._name, // "Object-oriented design"
        // course._nonExists, // undefined
        //
        // protectedCourse._name, // Error
        // protectedCourse._name = 'OOD',// Error
        // protectedCourse._nonExists, // Error
    );
};
test();


// // BEGIN
const validateProperty = (target, name) => {
    if (!(name in target)) {
        throw new Error(`Property "${name}" doesn't exist`);
    }
    if (name.startsWith('_')) {
        throw new Error(`Property "${name}" is protected`);
    }
};
//
const protect2 = (obj) => new Proxy(obj, {
    get: (target, name) => {
        validateProperty(target, name);
        const property = target[name];

        return (typeof property === 'function') // если свойство - это метод, то необходимо привязать его
            ? property.bind(obj) // к контексту оригинального объекта, иначе метод вызовется на прокси
            : property;
    },
    set: (target, name, value) => {
        validateProperty(target, name);
        target[name] = value;

        return true;
    },
});
//
// export default protect;
// END
