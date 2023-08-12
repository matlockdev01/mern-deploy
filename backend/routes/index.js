const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const Story = require('../models/Story')

// @desc    login/landing page
// @route   GET /
