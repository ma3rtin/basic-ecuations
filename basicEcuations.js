//Four methods of the basic ecuations that recieve an array of numbers and returns null if one of the params isn't a number
const operations = {
    add: (arr) => {
        if (arr.some(num => typeof num !== 'number')) {
            return null;
        }
        return arr.reduce((acc, num) => acc + num, 0);
    },
    subtract: (arr) => {
        if (arr.some(num => typeof num !== 'number')) {
            return null;
        }
        return arr.reduce((acc, num) => acc - num);
    },
    multiply: (arr) => {
        if (arr.some(num => typeof num !== 'number')) {
            return null;
        }
        return arr.reduce((acc, num) => acc * num, 1);
    },
    divide: (arr) => {
        if (arr.some(num => typeof num !== 'number')) {
            return null;
        }
        return arr.reduce((acc, num) => acc / num);
    }
};

