class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sMap = new Map();

        for (let i = 0; i < s.length; i++) {
            sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
        }

        for (let i = 0; i < t.length; i++) {
            if (!sMap.has(t[i]) || sMap.get(t[i]) === -1 || sMap.get(t[i]) === 0) return false;

            sMap.set(t[i], sMap.get(t[i]) -1)
        }

        return true;
    }
}
