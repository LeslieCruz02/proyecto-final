
let auth = (req, res) => {
        return res.status(200).json({ 
                                status: 'Successful authentication',
                                student: req.body.student
                              });
      }


module.exports = {
  auth
}
