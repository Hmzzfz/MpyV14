let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/japan'), '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝓐𝓝𝓓𝓡𝓔.𝓢\nfollow tiktok ; https://vt.tiktok.com/ZSR1Phosf/', wm, 'NEXT', '.cevanjapan', m)
}

handler.help = ['cecanjapan']
handler.tags = ['asupan']
handler.command = /^(cecanjapan)$/i
handler.limit = 3

module.exports = handler
