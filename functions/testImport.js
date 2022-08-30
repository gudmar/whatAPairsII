// import {xor} from './arrayLogicFunctions.js'
const {xor} = require('./arrayLogicFunctions.js')

function testXor() {
    return xor([1, 2, 3], [2, 3, 4])
}

module.exports(testXor)