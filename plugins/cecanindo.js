let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/indonesia'), '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝓐𝓝𝓓𝓡𝓔.𝓢\nfollow tiktok ; https://vt.tiktok.com/ZSR1Phosf/', wm, 'NEXT', '.cecanindo', m)
}

handler.help = ['cecanindo']
handler.tags = ['asupan']
handler.command = /^(cecanindo)$/i
handler.limit = 3
module.exports = handler

