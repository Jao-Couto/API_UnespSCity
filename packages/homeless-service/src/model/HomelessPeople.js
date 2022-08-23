const mongoose = require("mongoose");

const schema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	cityId: Number,
	rg: String,
	cpf: String,
	birthday: Date,
	latitude: Number,
	longitude: Number,
	description: String,
	images: [String],
	date: Date,
});

module.exports = mongoose.model("HomelessPeople", schema);
