'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WordSchema = new Schema({
    word: {type: String, lowercase: true, unique: true, required: true},
    definition: [{type: Schema.ObjectId, ref: 'Definition', require: true}],
    dateCreated: {type: Date, 'default': Date.now, require: true},
    dateModified: {type: Date, 'default': Date.now, require: true}, 
});

WordSchema.statics.addDefinition = function(did) {

};

WordSchema.statics.removeDefinition = function(did) {

};

WordSchema.statics.getDefinitions = function() {

};

var Word = mongoose.model('Word', WordSchema);