module.exports = function(app){
  // Get session controller
  const session = require('../controllers/sessionController');
  const auth = require('../../middleware/auth');

  // create routes POST/GET to create a session and get all sessions
  // by calling sessions controller method
  app.route('/sessions')
      .all(auth.validateToken)
  .get(session.list_all_sessions)
  .post(session.create_session);

  // create routes GET/PUT/DELETE to get/modify/delete a session
  // by calling sessions controller method
  app.route('/sessions/:id')
      .all(auth.validateToken)
  .get(session.get_session)
  .put(session.update_session)
  .delete(session.delete_session);
}
