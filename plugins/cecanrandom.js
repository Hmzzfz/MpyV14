let fetch = require('node-fetch')
let arr = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/cecan.txt')
    .then(res => res.text())
    .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = arr[Math.floor(Math.random() * arr.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝓐𝓝𝓓𝓡𝓔.𝓢\nfollow tiktok ; https://vt.tiktok.com/ZSR1Phosf/', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['cecanrandom']
handler.tags = ['asupan']
handler.limit = 5
handler.command = /^(cecanrandom)$/i

module.exports = handler
