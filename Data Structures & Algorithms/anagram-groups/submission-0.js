class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
            const orderedWord = strs[i].split("").sort().join("");
            console.log("orderedWord", orderedWord)
            
            if (!map.has(orderedWord)) {
                map.set(orderedWord, []);
            }

            map.get(orderedWord).push(strs[i]);
        }

        return Array.from(map.values())
    }
}
