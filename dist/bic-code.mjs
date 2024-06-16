var BIC_LENGTH = 11; // BIC 코드의 총 길이
var OWNER_CODE_LENGTH = 3; // Owner Code 선주코드 - BIC에 의해 관리됨. 한번 발급시 10년간 유지
var CHECK_DIGIT_INDEX = 10; // Check digit의 위치 (0부터 시작)
var CHECK_DIGIT_BASE = 11; // Check digit 계산을 위한 기준 값
var EQUIPMENT_CATEGORY_CODE = {
  U: 'U',
  // 컨테이너를 의미
  J: 'J',
  // 분리 가능한 장비를 의미
  Z: 'Z' // 수송 장비(트레일러 또는 차대)를 의미
};
var ALPHABET_TO_NUMBER = {
  A: 10,
  B: 12,
  C: 13,
  D: 14,
  E: 15,
  F: 16,
  G: 17,
  H: 18,
  I: 19,
  J: 20,
  K: 21,
  L: 23,
  M: 24,
  N: 25,
  O: 26,
  P: 27,
  Q: 28,
  R: 29,
  S: 30,
  T: 31,
  U: 32,
  V: 34,
  W: 35,
  X: 36,
  Y: 37,
  Z: 38
};

function validateBICInput(bic) {
  // BIC 코드의 길이 검사
  if (bic.length !== BIC_LENGTH) {
    return false;
  }
  // 1 ~ 3번째 자리: Owner code로 알파벳만 가능
  if (!/^[A-Z]{3}$/.test(bic.substring(0, OWNER_CODE_LENGTH))) {
    return false;
  }
  // 4번째 자리: Equipment category code로 U, J, Z만 가능
  if (!(bic.charAt(3) in EQUIPMENT_CATEGORY_CODE)) {
    return false;
  }
  // 5 ~ 10번째 자리: Serial number로 숫자만 가능
  if (!/^[0-9]{6}$/.test(bic.substring(4, 10))) {
    return false;
  }
  return true;
}
function convertCharToNumber(_char) {
  var _a;
  return (_a = ALPHABET_TO_NUMBER[_char]) !== null && _a !== void 0 ? _a : parseInt(_char, 10);
}

/**
 * @Sunset-Kim
 * @description ISO 6346 BIC(Bureau International des Containers et du Transport Intermodal) 코드 유효성 검사
 * - BIC 코드의 길이는 11자리
 * - 1 ~ 3번째 자리: Owner code로 알파벳만 가능
 * - 4번째 자리: Equipment category code로 U, J, Z만 가능
 * - 5 ~ 10번째 자리: Serial number로 숫자만 가능
 * - 11번째 자리: Check digit
 * @param bic ISO 6346 BIC(Bureau International des Containers et du Transport Intermodal) 코드
 */
function validateFullBIC(bic) {
  // BIC 코드의 사용자 입력이 올바른지 확인
  if (!validateBICInput(bic)) {
    return false;
  }
  // Check digit 계산
  var bicCodeWithOutCheckDigit = bic.substring(0, CHECK_DIGIT_INDEX);
  var bicCodeSplit = bicCodeWithOutCheckDigit.split('');
  var total = bicCodeSplit.reduce(function (acc, cur, idx) {
    return acc + convertCharToNumber(cur) * Math.pow(2, idx);
  }, 0);
  var refinedTotal = Math.floor(total / CHECK_DIGIT_BASE) * CHECK_DIGIT_BASE;
  var calculatedCheckDigit = total - refinedTotal;
  var userCheckDigit = bic.charAt(CHECK_DIGIT_INDEX);
  var calculatedCheckDigitOnePlace = calculatedCheckDigit % 10;
  return calculatedCheckDigitOnePlace === parseInt(userCheckDigit, 10);
}

export { validateFullBIC };
