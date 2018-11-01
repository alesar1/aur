# Maintainer: Gilrain <gilrain+libre.arch A_T castelmo DOT_ re>

pkgname="asf"
pkgver="3.4.0.5"
pkgrel=1
pkgdesc="Steam cards farmer."
arch=('x86_64' 'arm' 'i686')
url="https://github.com/JustArchiNET/ArchiSteamFarm"
license=('Apache')
depends_x86_64=('dotnet-host' 'libunwind' 'openssl-1.0')
depends_arm=('dotnet-host' 'libunwind' 'openssl-1.0')
depends_i686=('dotnet-runtime')
makedepends=('p7zip')
changelog=changelog
backup=('var/lib/asf/config/ASF.json' 'usr/lib/asf/NLog.config')
install=${pkgname}.install
source=("${pkgname}.sh"
        "${pkgname}.service"
        "${pkgname}-user.service"
        "${pkgname}.sysusers"
        "ASF.json"
        "NLog.config")
source_x86_64=("${pkgname}-${pkgver}-x86_64.zip::https://github.com/JustArchiNET/ArchiSteamFarm/releases/download/${pkgver}/ASF-linux-x64.zip")
source_arm=("${pkgname}-${pkgver}-arm.zip::https://github.com/JustArchiNET/ArchiSteamFarm/releases/download/${pkgver}/ASF-linux-arm.zip")
source_i686=("${pkgname}-${pkgver}-i686.zip::https://github.com/JustArchiNET/ArchiSteamFarm/releases/download/${pkgver}/ASF-generic.zip")
sha256sums=('8d76996c1024b80704b25af8a8800ef3f8a8a518d19c2a1e85ba62b58b22cdfd'
            'e543cd3fed402c9dfdd23918ea2d0a3a1793e6b1a906167752bdaca86864eac9'
            '17dd9b90b00df2bac9b1f0974fb93c278b2cdebc2f239cd9f6568a7dd0a95856'
            '883373be23f6f49ae597f61c1310d8cd45bce7c3ee1b5d456ffc9fedbe7dd486'
            'e63a92fd8008c40dab963161bdac967b57146553c00f114469c204ac6e1795b2'
            '9a10e9e6ff88fcc00000c12464ae2b650a3f075ef7e440088414b46c41214ee4')
sha256sums_x86_64=('b5c0bd979d062f1b1e0df62da845000d90df97f5f457502595e4b2f9d8632217')
sha256sums_arm=('2b38113cc013d68eead58912639caae06f9543181192e5ba0ec978cd06e33fce')
sha256sums_i686=('d0f4e70627ca3ddb3fbb5bd96213ba2aa38ad3bf4aa4225226ef06d95112fd04')
noextract=("${source_x86_64[@]%%::*}" "${source_arm[@]%%::*}" "${source_i686[@]%%::*}")

prepare() {
    7z x -o"${srcdir}/asf" ${pkgname}-${pkgver}-${CARCH}.zip
}

package() {
    install -d -m 755 "${pkgdir}/usr/lib/${pkgname}"
    cp -rdp --no-preserve=ownership "${srcdir}/asf" "${pkgdir}/usr/lib"
    find "${pkgdir}/usr/lib/${pkgname}" -type f -exec chmod 644 {} \;
    find "${pkgdir}/usr/lib/${pkgname}" -type d -exec chmod 755 {} \;

    install -d -m 755 "${pkgdir}/var/lib/${pkgname}/config"
    mv "${pkgdir}/usr/lib/${pkgname}/config" "${pkgdir}/var/lib/${pkgname}"
    ln -sf "/var/lib/${pkgname}/config" "${pkgdir}/usr/lib/${pkgname}/config"

    install -D -m644 "${srcdir}/ASF.json" "${pkgdir}/var/lib/${pkgname}/config/ASF.json"
    install -D -m755 "${srcdir}/${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"
    install -D -m644 "${srcdir}/${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
    install -D -m644 "${srcdir}/${pkgname}-user.service" "${pkgdir}/usr/lib/systemd/user/${pkgname}.service"
    install -D -m644 "${srcdir}/${pkgname}.sysusers" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"
    install -D -m644 "${srcdir}/NLog.config" "${pkgdir}/usr/lib/${pkgname}/NLog.config"
}
