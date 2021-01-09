import { Router } from 'express';
import { getTweets, getTweet, postTweet, updateTweet, deleteTweet } from '../controllers/tweets'


const router = Router();

router.get('/tweets',getTweets);
router.get('/tweets/:id', getTweet);
router.post('/tweets', postTweet);
router.put('/tweets/:id', updateTweet);
router.delete('/tweets/:id', deleteTweet);

export default router