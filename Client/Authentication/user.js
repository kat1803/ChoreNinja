import React from "react";
import { View, Text, Image } from "react-native";

var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    username: String, 
    password: String, 
    email: String,
    gender: Sring, 
    address: String
});