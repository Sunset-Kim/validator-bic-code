/**
 *
 * @description ISO 6346 BIC(Bureau International des Containers et du Transport Intermodal) 코드 유효성 검사
 * - BIC 코드의 길이는 11자리
 * - 1 ~ 3번째 자리: Owner code로 알파벳만 가능
 * - 4번째 자리: Equipment category code로 U, J, Z만 가능
 * - 5 ~ 10번째 자리: Serial number로 숫자만 가능
 * - 11번째 자리: Check digit
 * @param bic ISO 6346 BIC(Bureau International des Containers et du Transport Intermodal) 코드
 *
 */
export declare function validateFullBIC(bic: string): boolean
