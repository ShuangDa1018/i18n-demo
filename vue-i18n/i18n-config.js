// i18n-config.js
module.exports = {
    dir: './src/locale/', // 目标目录
    file: 'zh.js', // 翻译的文件
    distLangs: ['en'], // 要翻译的语言
    open: true, // leader是否启用 默认true 打包环境下不生效
    appId: '20220804001293782', // 百度翻译appid 这是我个人的id
    secret: '1czdfQ9XMX6y2kj8MXxF', // 百度翻译密钥 这是我个人的密钥
    singleNum: 3000, // 单次请求最长次数 可配置范围（3900 - 600）不填则为默认值 1500
};
