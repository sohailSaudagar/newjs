const findData=(str,substr)=>{
    const arrstr= str.split(" ");
    return arrstr.indexOf(substr) !== -1;

};
  console.log(findData("I am indian living in nanded", "in"));