class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
            const orderedWord = strs[i].split("").sort().join("");
            
            // Se ainda não existe no Map
            if (!map.has(orderedWord)) {
                // Cria vazio para receber os valores logo abaixo
                map.set(orderedWord, []); 
            }

            // Adiciona os valores originais na chave Ordenada
            map.get(orderedWord).push(strs[i]);
        }

        // Retorna somente os valores como um Array
        return Array.from(map.values())
    }
}
