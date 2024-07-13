class Solution:
    def isPalindrome(self, s: str) -> bool:
        value = ""
        for i in range(0 , len(s)):
            if s[i].isalpha() or s[i].isnumeric():
                value = value + s[i]
            else:
                continue
        if value.lower() == value.lower()[::-1]:
            return True
        return False
        