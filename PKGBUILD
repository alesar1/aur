# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgname=pingo
pkgver=1.a33
pkgrel=1
pkgdesc='Lossless and lossy image optimizer for PNG/JPEG/WebP/APNG (uses wine)'
arch=('any')
url='https://css-ig.net/pingo'
license=('unknown')
depends=('sh' 'wine')
makedepends=('git')
source=("pingo-win64-${pkgver}.zip"::'https://css-ig.net/bin/pingo-win64.zip'
        'git+https://github.com/dbermond/shellutils.git')
noextract=("pingo-win64-${pkgver}.zip")
sha256sums=('08881ce4d0158c83a1be23fe221876efa354af6cb250c01919a75f16b9631e0d'
            'SKIP')

_useragent="User-Agent: Mozilla/5.0 (X11; Linux ${CARCH}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.125 Safari/537.36"

DLAGENTS=("https::/usr/bin/curl \
              -gqb '' -LC - --retry 3 --retry-delay 3 \
              -H Upgrade-Insecure-Requests:\ 1 \
              -H ${_useragent// /\\ } \
              -H Referer:\ https://www.css-ig.net/pingo \
              --compressed \
              --output %o \
              %u")

prepare() {
    mkdir -p "${pkgname}-${pkgver}"
    bsdtar -xf "pingo-win64-${pkgver}.zip" -C "${pkgname}-${pkgver}"
}

package() {
    install -D -m755 shellutils/image/pingo -t "${pkgdir}/usr/bin"
    install -D -m644 "${pkgname}-${pkgver}/pingo.exe" -t "${pkgdir}/usr/share/${pkgname}"
}
