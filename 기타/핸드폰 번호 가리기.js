function solution(phoneNumber, displayCount = 4) {
    const { length } = phoneNumber;

    return '*'.repeat(length - displayCount).concat( phoneNumber.slice(-displayCount) );
}