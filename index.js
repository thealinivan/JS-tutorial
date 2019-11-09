

function ex1(){
  let input = document.getElementById('inp-ex1')
  console.log(input.value)

  const evenStr = "<CURRENT ITEM IN THE STRING> times 3 is even"
  const oddStr = "<CURRENT ITEM IN THE STRING> times 3 is odd"
  const text  = input.value

  function num(){
    this.value=0
  }

  let numEven = new num()
  let numOdd = new num()
  let i = 0

  function akNo(_number, _string){
    _number.value++
    console.log(_string)
  }

  while(i < text.length)
  {
    let bool = (text[i] * 3) % 2 === 0
    bool ? akNo(numEven, evenStr) : akNo(numOdd, oddStr)
    i++
  }

  console.log(`Even numbers qty: ${numEven.value}`)
  console.log(`Odd numbers qty: ${numOdd.value}`)
  document.getElementById("output").style.color = "white";

}



//need to find a way to convert input string into array fromat
//currently on on error for testing functionality
function ex2(){
  let input = document.getElementById('inp-ex2')
  //input array
  let input_array = input.value
  //result array
  let result_array = [[],[],[],[]]

  //loop first array dimension
  input_array.forEach(function(item, index) {
    //initial min and max values
    let max = -Infinity
    let min = Infinity

    //loop second array dimension
    item.forEach(function(s, i){
      //check if not number
      if (typeof s === "number")
      {
        //assign new values to min and max
        if (s<min){
          min = s
        }
        if(s>max){
          max = s
        }
      }
    })

    //check if min and max has been modified (at least 1 number exist in the array)
    if (max != -Infinity && min != Infinity)
    {
      //populate result array
      result_array[index].push(min)
      result_array[index].push(max)
    }else{
     result_array[index].push("No numbers found")
    }
    max = -Infinity
    min = Infinity
  })
  console.log(result_array)
  document.getElementById("output").style.color = "white";

}
