# Maintainer: Storm Dragon <stormdragon2976@gmail.com> 
# Maintainer: Michael Taboada <michael@2mb.solutions>

pkgname='botamusique'
pkgver=7.1
pkgrel=1
pkgdesc="Music bot for mumble"
arch=('x86_64' 'i686' 'armv7h' 'aarch64')
url="https://github.com/azlux/botamusique"
license=('MIT')
depends=('ffmpeg' 'opus-tools')
makedepends=('unzip' 'python-virtualenv')
source=("${pkgname}-${pkgver}.zip::https://github.com/azlux/${pkgname}/archive/${pkgver}.zip"
"${pkgname}.service"
"${pkgname}.sh"
"${pkgname}.sysusers"
"${pkgname}.tmpfiles")
sha512sums=('0e94ae0c082160a497dab3b942f9cf44acd43351401cf95c4fcaa176d0aad2890444ea2cff457b001e7e6bc1e9bbf8287ee83146db4f394dc2599a6079f3307f'
            '170943e8d36f94ab6e895f99e72bb9d9e79a123758d9e9b87367fe95e9bb0ed0e7d896d242aa52598e5007fcabd764c4b2fe741bb9e9852fb30cbab8b8b4cf32'
            '5059932c232c18653cc06e133c0063eb7480dba395b6dd7d1848ba90a683c2ea28306c7a35293a774b06521b2fab426df82b16a9d4bc96fca2d5f00a37f7257f'
            '58340821d970ff60f79969a91a263fbf7ddea78c96852c89ef1248c7783a1b6c44406427c40c1955255f27a83371c53c340f7595d436de611f0974d27b80f731'
            '40adb0a02fe3fe0bbe90367cb0e4bb1bb1d213570090efe519414311c37c80a5f6e7413a1c2486bb6438381db18751f52bd1b14758d7120afbe13689b970a462')

package() {
mkdir -p "${pkgdir}/opt/${pkgname}"
cp -r "${pkgname}-${pkgver}" "${pkgdir}/opt/${pkgname}/${pkgname}"
mkdir -p "${pkgdir}/usr/lib/systemd/system"
install -Dm644 ${pkgname}.service "${pkgdir}/usr/lib/systemd/system"
mkdir -p "${pkgdir}/usr/bin"
install -Dm755 "${pkgname}.sh" "${pkgdir}/usr/bin/botamusique"
mkdir -p "${pkgdir}/usr/lib/sysusers.d"
install -Dm644 "${pkgname}.sysusers" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"
mkdir -p "${pkgdir}/usr/lib/tmpfiles.d"
install -Dm644 "${pkgname}.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf"
cd "${pkgdir}/opt/${pkgname}"
    virtualenv .venv
.venv/bin/pip install -r ${pkgname}/requirements.txt
}
