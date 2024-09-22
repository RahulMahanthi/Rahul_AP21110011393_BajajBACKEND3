// controllers/bfhlController.js
const BFHLModel = require('../models/bfhlModel');

exports.handlePostRequest = (req, res) => {
    const { data, file_b64 } = req.body;

    // User details
    const userId = "Mahanthi_Rahul_AP21110011393";
    const email = "rahul_mahanthi@srmap.edu.in";
    const rollNumber = "AP21110011393";

    // Process input
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercaseAlphabet = alphabets.filter(char => char >= 'a' && char <= 'z')
                                             .sort().slice(-1);

    // File handling
    let fileValid = false;
    let fileMimeType = "unknown";
    let fileSizeKB = "0";

    if (file_b64 && file_b64.startsWith('data:')) {
        const [metadata, base64Data] = file_b64.split(',');
        fileMimeType = metadata.split(';')[0].split(':')[1]; // Extract MIME type
        fileSizeKB = (Buffer.from(base64Data, 'base64').length / 1024).toFixed(2); // Calculate size in KB
        fileValid = true;
    }

    // Constructing response
    const response = new BFHLModel(
        true, userId, email, rollNumber, numbers,
        alphabets, highestLowercaseAlphabet, fileValid,
        fileMimeType, fileSizeKB
    );

    res.json(response);
};

exports.handleGetRequest = (req, res) => {
    res.json({ operation_code: 1 });
};
