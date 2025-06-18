const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {

    const uniqueSuffix = Date.now() + '-' + "profile"

    cb(null, file.fieldname + '-' + uniqueSuffix)

  }
})

const upload = multer({ storage: storage })

module.exports = upload