let fetch = require('node-fetch')
let zzz = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/ukhty.txt')
    .then(res => res.text())
    .then(txt => zzz = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = zzz[Math.floor(Math.random() * zzz.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝓐𝓝𝓓𝓡𝓔.𝓢\nfollow tiktok ; https://vt.tiktok.com/ZSR1Phosf/', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['cecanukhty']
handler.tags = ['asupan']
handler.limit = 5
handler.command = /^(cecanukhty|ukhty)$/i

module.exports = handler

