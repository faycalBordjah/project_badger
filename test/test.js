let expect = require('chai').expect; // Je récupère une donnée (nom / prenom)
const mongoose = require('mongoose');
const Session = require('../api/models/sessionModel');
const Student = require('../api/models/studentModel');
const sessionContrl = require('../api/controllers/sessionController')

/**
 * 
 */
describe('Test unitaire', function() {

        it('should return an Object', () => {
            //let testBody = { nom: null,description: 'dadu', annee: '2010' };
            let testBody = "azertyuiop";
            var new_session = new Session(testBody);
            Session.findOne({nom:new_session.nom})
                .then(session => {
                    expect(session).to.be.an('object');
                })
        });

      /*  it('should return empty', () => {
            let testId = { id: null };
            //let testId = "azertyuiop";
            var delete_student = new Session(testId);
            Session.findOne({id:delete_student.id})
                .then(session => {
                    expect(session).to.be.an('object');
                })
        })*/
});