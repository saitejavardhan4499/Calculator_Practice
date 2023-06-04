//Global variables
var prevCalc = 0;
var calc = "";

function showNum(value) {
  document.frmCalc.txtNumber.value += value;
}

function decrement_st() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    num--;
    document.frmCalc.txtNumber.value = num;
  }
}

function increment_st() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    num++;
    document.frmCalc.txtNumber.value = num;
  }
}

function Add_st() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Add";
  }
}

function subtract_st() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "subtract_st";
  }
}

function multiply_st() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "multiply_st";
  }
}

function divide_st() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "divide_st";
  }
}

function square_st() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    var result = num * num;
    document.frmCalc.txtNumber.value = result;
  }
}

function squareRoot_st() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    var result = Math.sqrt(num);
    document.frmCalc.txtNumber.value = result;
  }
}

function pow_st() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "pow_st";
  }
}

function floor_st() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    var result = Math.floor(num);
    document.frmCalc.txtNumber.value = result;
  }
}

function round_st() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    var result = Math.round(num);
    document.frmCalc.txtNumber.value = result;
  }
}

function calculate() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    if (calc == "Add") {
      var total = prevCalc + num;
      document.frmCalc.txtNumber.value = total;
    } else if (calc == "subtract_st") {
      var total = prevCalc - num;
      document.frmCalc.txtNumber.value = total;
    } else if (calc == "multiply_st") {
      var total = prevCalc * num;
      document.frmCalc.txtNumber.value = total;
    } else if (calc == "divide_st") {
      var total = prevCalc / num;
      document.frmCalc.txtNumber.value = total;
    } else if (calc == "pow_st") {
      var total = prevCalc ** num;
      document.frmCalc.txtNumber.value = total;
    }
    // Add other calculations here
  }
}

function clear() {
  document.frmCalc.txtNumber.value = "";
  prevCalc = 0;
  calc = "";
}
