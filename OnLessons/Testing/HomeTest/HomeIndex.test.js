// const { getSum } = require('./Calendar');/* Экспортируем из Calendar.js */
const { getValue, substract, randomInRage, capitalize, arrayToString, quotient } = require('./HomeTest');

// describe('getSum', () => {                      /* Описание теста */
//    it('should return correct sum', () => {      /* то, ГДЕ выполняется тест */
//       expect(getSum(1, 2)).toBe(3);             /* то, что ВОЗВРАЩАЕТ результат для сравнения.expect значит я ОЖИДАЮ что*/
//    });                                                /* результат выполнения функции с заданными аргументами будет равен( .toBe ) 3 */
// });
describe.skip('when getValue is a func with params "a" then ', () => {                   
   it('should return number', () => {    
      expect(getValue(1)).toBe(1);          
   });
   it('should return string', () => {
      expect(getValue(typeof 'some text')).toBe('string');
   });
   it('should return undefined', () => {
      expect(getValue(typeof undefined)).toBe('undefined');
   });
   it('should return NaN', () => {
      expect(getValue(typeof NaN)).toBe('number');
   });
   it('should return Object', () => {
      expect(getValue(typeof [], typeof {})).toBe('object');
   });
});

describe('when substract is a func with params "a" and "b"', () => {               
   it('should return PLUS result', () => {   
      a = 3; b = 1;
      expect(substract(a, b)).toBe(2);            
   }); 
   it('should return MINUS result', () => {
      a = 1; b = 3;
      expect(substract(a, b)).toBe(-2);
   });
   it('should return result LESS than second arg', () => {
      a = 1; b = 3;
      expect(substract(a, b)).toBeLessThan(b);
   });
   it('should return result GREATER than second arg', () => {
      a = 1; b = 3;
      expect(substract(a, b)).toBeGreaterThan(a);
   });       
   it('should return Not a Number', () => {
      a = 'string'; b = 3;
      expect(substract(a, b)).toBe(NaN);
   }); 
   it('should return String with number MINUS number', () => {
      a = '3'; b = 2;
      expect(substract(a, b)).toBe(1);
   }); 
   it('Вернет нам приблизительную разницу между дробями', () => {
      a = 0.45; b = 0.25;
      expect(substract(a, b)).toBe(0.2);
   }); 
                                                     
});

// describe('When quotinet is a func with params "a", "b"', () =>



// )

describe('return equal arrs', () => {
   const arr1 = [1, 2, 3, 4, 5];
   const arr2 = arr1;
   it('should return this', () => {
      expect(arr1).toEqual(arr2);
   })
})

describe('some array contain entrance', () => {
   const newName = [{type: 'user', age: 27}, {type: 'admin', age: 34}];
   const admin = {type: 'admin', age: 34};
   it('should contains admin', () => {
      expect(newName).toContainEqual(admin);
   })
});

describe('testing value: is defined, is not a NaN, is nit a null', () => {
   describe('when ex uquils to 5 then', () => {
      const exmp = 5;
      it(' should return truthy value', () => {
         expect(exmp).not.toBeNull();
         expect(exmp).toBeDefined();
         expect(exmp).not.toBeNaN();
      });
   });
   describe('when ex uquils to 5 then', () => {
      let value
      it(' should return truthy/falsy', () => {
         value = "";
         expect(value).toBeFalsy();
         value = 0;
         expect(value).toBeFalsy();
         value = null;
         expect(value).toBeFalsy();
      });
   });
});