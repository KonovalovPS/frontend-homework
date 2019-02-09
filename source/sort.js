'use strict'

function sort(str) {
    let arr = str.split(' ')
    
    var newArr = arr.map(function(item) {
        return capitalize(item.split('')
                              .sort(sortFunc)
                              .join(''));
    });
    
    return newArr.sort(sortFunc).join(' ');
}


function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

//функция сортировки для не ASCII
function sortFunc(a,b) {
    return a.localeCompare(b);
}