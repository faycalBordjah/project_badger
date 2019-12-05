/**
 * Le test vérifie si la donnée n'existe pas
 *
 * equal[0] = Donnée reçu a vérifier
 * equal[1] = Un message (personalisable) dans la log
 */
let assert = require('assert'); // Je récupère une donnée (nom / prenom)
describe('Vérification de la présence d\'une donnée', function() {
    describe('name', function() {
        it('La donnée existe pas', function() {
            assert.equal(['matiss'].indexOf('matisse'), 3);
        });
    });
});

//let assert = require('assert');



describe('Test unitaire', function() {
    describe('Inscription', function() {
        describe('Mot de passe', function() {

            it('Nombre de catactère compris entre 8 et 13', function() {
                assert.equal(['matiss'].indexOf('matisse'), -1);
            });

            it('Minimum 1 majuscule', function() {
                assert.equal(['matiss'].indexOf('matisse'), -1);
            });

            it('Présence de caractère spéciaux ', function() {
                assert.equal(['matiss'].indexOf('matisse'), [1,2,3]);
                assert.e
            });
        });

      /*  describe('Adresse mail', function() {
            it('Espace', function() {
                assert.equal(['matisse'].indexOf('matisse'));
            });

            it('Format de l\'adresse mail ', function() {
                assert.equal(['matisse'].indexOf('matisse'), [1,2,3]);
                assert.e
            });
        });

        describe('Multiplication', function() {
            it('should work', function() {
                assert.equal((7*3), 6, 'yolo');
            });
        });*/
    });

    describe('API publique', function() {
        describe('Key', function() {

            it('Elle existe', function() {
                assert.equal(['matiss'].indexOf('matisse'), -1);
            });
        });
    });
});

