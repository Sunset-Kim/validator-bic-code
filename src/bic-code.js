
const { validateBICInput, convertCharToNumber } = require('./bic-code-helper.js');
const { CHECK_DIGIT_INDEX, CHECK_DIGIT_BASE } = require('./bic-code.consts.js');

module.exports = {
    /**
     * 주어진 문자열이 유효한 BIC 코드인지 확인하는 함수
     * @param bic {string} - BIC 코드로 검사할 문자열
     * @returns {boolean} - 유효한 BIC 코드이면 true, 그렇지 않으면 false를 반환합니다.
     * @example validateFullBIC("JASU4734206") // true
     */
    validateFullBIC (bic)  {
        // BIC 코드의 사용자 입력이 올바른지 확인
        if (!validateBICInput(bic)) {
            return false;
        }
        // Check digit 계산
        const bicCodeWithOutCheckDigit = bic.substring(0, CHECK_DIGIT_INDEX);
        const bicCodeSplit = bicCodeWithOutCheckDigit.split('');
        const total = bicCodeSplit.reduce((acc, cur, idx) => {
            return acc + convertCharToNumber(cur) * Math.pow(2, idx);
        }, 0);

        const refinedTotal = Math.floor(total / CHECK_DIGIT_BASE) * CHECK_DIGIT_BASE;
        const calculatedCheckDigit = total - refinedTotal;
        const userCheckDigit = bic.charAt(CHECK_DIGIT_INDEX);
        const calculatedCheckDigitOnePlace = calculatedCheckDigit % 10;

        return calculatedCheckDigitOnePlace === parseInt(userCheckDigit, 10);
    }
}