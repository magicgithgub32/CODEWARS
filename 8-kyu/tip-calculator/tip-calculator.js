function calculateTip(amount, rating) {
  let ratingLowered = rating.toLowerCase()
return ratingLowered == "terrible" ?  0 : ratingLowered == 'poor' ? Math.ceil((amount / 20)) : ratingLowered == 'good' ? Math.ceil((amount / 10)) : ratingLowered == 'great' ? Math.ceil(((amount * 15)/100)) : ratingLowered == 'excellent'? Math.ceil((amount / 5)) : 'Rating not recognised'
}