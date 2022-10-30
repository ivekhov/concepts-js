

// export default ({ id = null, friends = [] } = {}) => ({
//   friends,
//   id,
//   getFriends() {
//     return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
//   },
// });



const make = (numer, denom) => ({
    numer: numer,
    denom: denom,
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },
    setNumer(numer) {
      this.numer = numer;
    },
    setDenom(denom) {
      this.denom = denom;
    },
    toString() {
      return `${this.numer}/${this.denom}`;
    },
    add(rat) {
      const newNum = rat.getNumer() * this.denom + this.numer * rat.getDenom();
      const newDenom = rat.getDenom() * this.denom;
      return make(newNum, newDenom);
    }
  }
);

const rat1 = make(3, 8);
const rat2 = make(10, 3);
console.log(rat1.toString());
console.log(rat2.toString());

const rat3 = rat1.add(rat2);
console.log(rat3.toString());


/// example
// BEGIN
const makeExample = (numer, denom) => ({
  numer,
  denom,
  setNumer(newNumer) {
    this.numer = newNumer;
  },
  setDenom(newDenom) {
    this.denom = newDenom;
  },
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  toString() {
    return `${this.getNumer()}/${this.getDenom()}`;
  },
  add(rational) {
    const newNumer = this.getNumer() * rational.getDenom() + rational.getNumer() * this.getDenom();
    const newDenom = this.getDenom() * rational.getDenom();
    return makeExample(newNumer, newDenom);
  },
});


