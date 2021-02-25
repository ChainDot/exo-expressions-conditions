let list = "'Alice', 'Bob', 'Charlie', 'Craig', 'Eva'"
for (let i = 0; i <= list.length; ++i) {
  list = list.toLowerCase()
  switch (list[i]){
    case "a":
      console.log('Alice want to exchange with Bob')
    case "bob":
      console.log('Bob want to exchange with Alice')
     
    case "charlie":
      console.log('Charlie is a generic third participant')
      
    case "craig":
      console.log('Craig is a password cracker')
      
    case "eve":
      console.log('Eve is an eavesdropper')
      break
  }
}
