const cloudinary = require('cloudinary').v2

cloudinary.config({ 
    cloud_name: 'du8qoqwpl', 
    api_key: '778232742128954', 
    api_secret: 'fN2ymaD4rjRaZ40jLu8nn_hXE9I' 
  });

    module.exports = cloudinary;