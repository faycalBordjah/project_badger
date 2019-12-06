module.exports = function(app){
  const session = require('../controllers/sessionController');
  const auth = require('../../middleware/auth');

  app.route('/sessions')
      .all(auth.validateToken)
  .get(session.list_all_sessions)
  .post(session.create_session);

  app.route('/sessions/:id')
      .all(auth.validateToken)
  .get(session.get_session)
  .put(session.update_session)
  .delete(session.delete_session);
}
