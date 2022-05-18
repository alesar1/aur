# Maintainer: Dct Mei <dctxmei@yandex.com>

pkgname=ariang-allinone
pkgver=1.2.4
pkgrel=1
pkgdesc="A modern web frontend making aria2 easier to use (all-in-one version)"
arch=('any')
url="https://github.com/mayswind/AriaNg"
license=('MIT')
depends=('xdg-utils')
makedepends=('git' 'nvm')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz"
        "${pkgname}.desktop"
        "${pkgname}.sh")
b2sums=('3759e7793b0a65024b2e31334ca2a322815447da08d66346703a8ab02c0176ab2e31b8c9bc3f727ac0d0aefecccda8afe5a38b6fb67a7f00ea2faa55af4436f3'
        '75f9cd947d78ff94a20104cc2d138d82fdb47d8ba994292b27bf88f5e9a5204e989af39a738821bd4dfb500b63e45103cf70ddddc7523e3175b53652241c4701'
        '8585359a12bf26f10923a073fc2b7cb4bcef95ee46c67664356819d959bfbb2f4b8279fd57664e44d569077ff63a4da298b3a36276a423af0c3e8a1e3641133a')

build() {
    cd "${srcdir}"/"AriaNg-${pkgver}"/
    source /usr/share/nvm/init-nvm.sh
    nvm install 8.17.0
    npm install --devDependencies
    node_modules/gulp/bin/gulp.js clean build-bundle
}

package() {
    cd "${srcdir}"/"AriaNg-${pkgver}"/
    install -Dm 644 LICENSE -t "${pkgdir}"/usr/share/licenses/"${pkgname}"/
    install -Dm 644 dist/index.html -t "${pkgdir}"/usr/share/"${pkgname}"/
    install -Dm 644 src/favicon.png "${pkgdir}"/usr/share/icons/hicolor/32x32/apps/"${pkgname}.png"
    install -Dm 644 src/touchicon.png "${pkgdir}"/usr/share/icons/hicolor/114x114/apps/"${pkgname}.png"
    install -Dm 644 src/tileicon.png "${pkgdir}"/usr/share/icons/hicolor/144x144/apps/"${pkgname}.png"
    install -Dm 644 "${srcdir}"/"${pkgname}.desktop" -t "${pkgdir}"/usr/share/applications/
    install -Dm 755 "${srcdir}"/"${pkgname}.sh" "${pkgdir}"/usr/bin/"${pkgname}"
}
