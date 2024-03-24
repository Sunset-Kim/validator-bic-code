import { convertCharToNumber, validateBICInput } from './bic-code-helper.js'
import { CHECK_DIGIT_BASE, CHECK_DIGIT_INDEX } from './bic-code.consts'


export function validateFullBIC(bic: string) {
  // BIC 코드의 사용자 입력이 올바른지 확인
  if (!validateBICInput(bic)) {
    return false
  }
  // Check digit 계산
  const bicCodeWithOutCheckDigit = bic.substring(0, CHECK_DIGIT_INDEX)
  const bicCodeSplit = bicCodeWithOutCheckDigit.split('')
  const total = bicCodeSplit.reduce((acc, cur, idx) => {
    return acc + convertCharToNumber(cur) * Math.pow(2, idx)
  }, 0)

  const refinedTotal = Math.floor(total / CHECK_DIGIT_BASE) * CHECK_DIGIT_BASE
  const calculatedCheckDigit = total - refinedTotal
  const userCheckDigit = bic.charAt(CHECK_DIGIT_INDEX)
  const calculatedCheckDigitOnePlace = calculatedCheckDigit % 10

  return calculatedCheckDigitOnePlace === parseInt(userCheckDigit, 10)
}