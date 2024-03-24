import { BIC_LENGTH, OWNER_CODE_LENGTH, EQUIPMENT_CATEGORY_CODE, ALPHABET_TO_NUMBER } from './bic-code.consts.js';

export function validateBICInput(bic)  {
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
  };

export function convertCharToNumber (char) {
    return (
      ALPHABET_TO_NUMBER[char] ??parseInt(char, 10)    )
};