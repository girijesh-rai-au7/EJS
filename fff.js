// get daate in hindi
const options = {weekday:'long', year:'numeric',month:'long',day:'numeric'}
const date = new Date();
currentday = date.toLocaleString("hi-IN",options)
console.log(currentday)
