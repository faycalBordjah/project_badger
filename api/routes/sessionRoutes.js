module.exports = function(app){
  const session = require('../controllers/sessionController');

  app.route('/sessions')
  .get(session.list_all_sessions)
  .post(session.create_session);

  app.route('/sessions/:id')
  .get(session.get_session)
  .put(session.update_session)
  .delete(session.delete_session);
}
