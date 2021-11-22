
let image = (req, res) => {
  let img = req.query.image;
  console.log(img);
  return res.download("./images/" +img+".jpg");    
}


module.exports = {
image
}