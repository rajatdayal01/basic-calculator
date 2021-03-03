function display(val) {
    document.getElementById("result").value += val;
  }
  function clr(){
    document.getElementById("result").value ="";
  }
  function calculate(){
    let values = document.getElementById("result").value;
    let output = eval(values);
    //Instead of this line we can use two line also just call two function clr() and display()
    document.getElementById("result").value = output ;
    //clr();
    //display(output);
    
  }