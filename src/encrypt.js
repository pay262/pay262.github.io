// == 完整解密实现 ==
const CRYPTO_CONFIG = {
    key: null,
    getKey: async function() {
        if (!this.key) {
            this.key = await crypto.subtle.importKey(
                "raw",
                new TextEncoder().encode('secure-key-32bytes-length-required'), // 32字节密钥
                { name: "AES-CBC" },
                false,
                ["decrypt"]
            );
        }
        return this.key;
    }
};

window.decryptData = async function(encryptedData) {
    try {
        const key = await CRYPTO_CONFIG.getKey();
        const iv = encryptedData.slice(0, 16);
        const ciphertext = encryptedData.slice(16);
        
        const decrypted = await crypto.subtle.decrypt(
            { name: "AES-CBC", iv },
            key,
            ciphertext
        );
        
        const decoder = new TextDecoder();
        return JSON.parse(decoder.decode(decrypted));
    } catch (error) {
        console.error('Decryption failed:', error);
        throw new Error('数据解密失败，请检查密钥');
    }
};