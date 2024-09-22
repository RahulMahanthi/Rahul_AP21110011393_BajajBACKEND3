// models/bfhlModel.js
class BFHLModel {
    constructor(isSuccess, userId, email, rollNumber, numbers, alphabets, highestLowercaseAlphabet, fileValid, fileMimeType, fileSizeKB) {
        this.is_success = isSuccess;
        this.user_id = userId;
        this.email = email;
        this.roll_number = rollNumber;
        this.numbers = numbers;
        this.alphabets = alphabets;
        this.highest_lowercase_alphabet = highestLowercaseAlphabet;
        this.file_valid = fileValid;
        this.file_mime_type = fileMimeType;
        this.file_size_kb = fileSizeKB;
    }
}

module.exports = BFHLModel;
