import { Router } from 'express';
import { TweetController } from '../controllers/tweets';

const router = Router();

router.get('/tweets', TweetController.getTweets);
router.get('/tweets/:id', TweetController.getTweet);
router.post('/tweets', TweetController.postTweet);
router.put('/tweets/:id', TweetController.updateTweet);
router.delete('/tweets/:id', TweetController.deleteTweet);

export default router