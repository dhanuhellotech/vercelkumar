const express = require('express');
const router = express.Router();

const reviewsControllers = require('../../Controller/adminController/reviewsController');

//services

router.post('/api/reviews', reviewsControllers.uploadImage, reviewsControllers.resizeImage, reviewsControllers.addreviewsImagetoCloud, reviewsControllers.addReviews);
router.get('/api/reviews',reviewsControllers.getReviews)
// router.post('/',Services.uploadImage,Services.addservices)
router.delete('/api/reviews/:id',reviewsControllers.deleteReviews)
module.exports = router;
