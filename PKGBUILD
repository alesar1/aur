# Maintainer:  Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=gomplate-bin
pkgver=3.8.0
pkgrel=1
pkgdesc='A flexible commandline tool for template rendering. Supports lots of local and remote datasources'
arch=('x86_64')
url="https://gomplate.ca"
license=('MIT')
provides=('gomplate')
source=("${pkgname}-${pkgver}::https://github.com/hairyhenderson/gomplate/releases/download/v${pkgver}/gomplate_linux-amd64"
        'LICENSE::https://github.com/hairyhenderson/gomplate/raw/master/LICENSE')
sha256sums=('13b39916b11638b65f954fab10815e146bad3a615f14ba2025a375faf0d1107e'
            '623198523f10b6c9b0473c832634cd678b17492e77745c453aaec3f6f9d4fc20')

package() {
  install -Dm755 "${srcdir}"/gomplate* "${pkgdir}/usr/bin/gomplate"
  install -Dm644 "${srcdir}"/LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
