export function isPalindrome(str: string): boolean {
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = formattedStr.split('').reverse().join('');
  return formattedStr === reversedStr;
}
