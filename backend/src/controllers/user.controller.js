// faceLogin method
exports.FaceLogin = async (req, res) => {
    try {
        const { email } = req.body; // Receive email or user ID from Python (after face recognition)

        // Check if user exists
        const user = await UserModel.findOne({ email });
        if (!user) throw new Error('User not found');

        // Generate token and send response
        const token = await AuthService.generateToken(user);
        res.status(200).json({
            message: 'Face login successful',
            token,
            user,
        });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};
