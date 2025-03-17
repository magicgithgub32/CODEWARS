function smallEnough(a, limit){
a.sort((a,b) => b-a)
  
  return a[0] <= limit ? true : false
}