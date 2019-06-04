import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/login', (req, res) => {
  res.send('login');
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

router.get(
  '/google/redirect',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const test = req.user;
    res.send(`redirected${test}`);
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
