$(document).ready(() => {
    clearAll();
})

const OPERATORS = ['+', '-', '*', '/']; 

$('body').on('click', 'button', (e) => {
    let oldEntry = $('#entry').val();
    let newEntry = e.target.innerText;
    let operation = $('#operations').val();

    if(newEntry === 'CE') {
        clearEntry(operation, oldEntry)
    } else if(newEntry === 'C') {
        clearAll()
    } else if(newEntry === '=') {
        if(oldEntry === '0' && operation === '0'){
            return;
        }
        calculate(operation)
    } else if(newEntry === '.'){
        if(operation.indexOf('.') >= 0 && oldEntry.indexOf('.') >= 0){
            return;
        }
        addEntry(operation, oldEntry, newEntry);
        addOperation(operation, newEntry, oldEntry);
    } else {
        addEntry(operation, oldEntry, newEntry);
        addOperation(operation, newEntry, oldEntry);
    }   
})

function clearAll() {
    $('#entry').val('0');
    $('#operations').val('0')
}

function clearEntry(operation, oldEntry) {
    if(operation.indexOf('=') >= 0) {
        operation = '0';
    }
    if(OPERATORS.indexOf(operation[operation.length - 1]) >= 0) {
        operation = '0';
    }
    operation = operation.slice(0, operation.lastIndexOf(oldEntry));
    if(operation === '') {
        operation = '0'
    }
    $('#operations').val(operation);
    $('#entry').val('0');
}

function addEntry(operation, oldEntry, newEntry){
    if(newEntry.search(/[\d.]/) >= 0) {
            if(OPERATORS.indexOf(newEntry) >= 0) {
                oldEntry = '0'
            }
            if(oldEntry === '0' || OPERATORS.indexOf(oldEntry) >= 0) {
                oldEntry = ''
            }
            $('#entry').val(oldEntry + newEntry)
    } else {
        if(oldEntry === '0' && operation === '0') {
            return;
        }
        $('#entry').val(newEntry)
    }
}

function addOperation(operation, newEntry, oldEntry) {
    if(operation.indexOf('=') >= 0) {
        operation = operation.slice(operation.lastIndexOf('=') + 1);
        if(newEntry === '.' && operation === oldEntry){
            operation = '';
        }
    }
    if(operation === '0') {
        operation = '';
    }
    if(OPERATORS.indexOf(newEntry) >= 0 && (OPERATORS.indexOf(oldEntry) >= 0 || oldEntry === '0')){
        operation = operation.slice(0, operation.length-1)
    }
    if(OPERATORS.indexOf(newEntry) >= 0 && operation === '') {
        return;
    }
    $('#operations').val(operation + newEntry)
}

function calculate(operation, newEntry) {
    let result = eval(operation).toString();
    if(result.length > 10 && result.indexOf('.') >= 0){
        result = result.substring(0, 10)
    }
    $('#entry').val(result);
    $('#operations').val(operation + '=' + result)
}