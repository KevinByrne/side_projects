const { authenticate } = require('passport')
const bcrypt = require('bcrypt');

const LocalStrategy = require('passport-local').Strategy

function initialize(passport) {
  const authenticateUser = (email, password, done) => {
    const user = getUserByEmail(email, getUserByEmail)
    if (user == null) {
      return done(null,false, { message: 'No user with that email'})
    }
    try{ 
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, {message: 'Password incorrect'})
      }
    }
    catch (e) {
      return done(e)
    }
  }
  passport.use(new LocalStrategy({ usernameField: 'email'}),
  authenticateUser)
  passport.serializeUser((user, done) => {  })
  passport.deserializeUser((id, done) => {  })

}

module.export = initialize