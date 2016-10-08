'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DefinitionSchema = new Schema({
    definition: {type: String, require: true},
    partsOfSpeech: {type: String, require: true},
    dateCreated: {type: Date, 'default': Date.now, require: true},
    dateModified: {type: Date, 'default': Date.now, require: true}
});

var Definition = mongoose.model('Definition', DefinitionSchema);