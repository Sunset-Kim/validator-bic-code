
    export const BIC_LENGTH =  11; // BIC 코드의 총 길이
    export const OWNER_CODE_LENGTH = 3; // Owner Code 선주코드 - BIC에 의해 관리됨. 한번 발급시 10년간 유지
    export const SERIAL_NUMBER_LENGTH = 6; // Serial number - 선주 발행한 자체적인 코드
    export const CHECK_DIGIT_INDEX = 10; // Check digit의 위치 (0부터 시작)
    export const CHECK_DIGIT_BASE = 11; // Check digit 계산을 위한 기준 값
    export const EQUIPMENT_CATEGORY_CODE=  Object.freeze({
        U: 'U', // 컨테이너를 의미
        J: 'J', // 분리 가능한 장비를 의미
        Z: 'Z', // 수송 장비(트레일러 또는 차대)를 의미
    });
    export const ALPHABET_TO_NUMBER=  {
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
        Z: 38,
    };

