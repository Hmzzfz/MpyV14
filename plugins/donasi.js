let handler = async m => m.reply(`
            .✵.𝔾ℝ𝕌ℙ ℤ𝔼ℝ𝕆𝔹𝕆𝕋.✵.

            https://chat.whatsapp.com/D05rhi0ELaOCPrEVq9qLf9
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
