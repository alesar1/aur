# Maintainer: Daniel Bermond < gmail-com: danielbermond >

pkgname=pingo
pkgver=0.99.beta50
pkgrel=1
pkgdesc='An experimental, fast Web PNG/JPG optimizer with visually lossless or lossy compression (uses wine)'
arch=('any')
url='https://css-ig.net/pingo'
license=('unknown')
depends=('bash' 'wine')
makedepends=('git')
source=("pingo-win64-${pkgver}.zip"::'https://css-ig.net/bin/pingo-win64.zip'
        'git+https://github.com/dbermond/shellutils.git')
noextract=("pingo-win64-${pkgver}.zip")
sha256sums=('d0d241a03351f07568b1b672f6161cd612cdc6a7ec23503039fdf8027c07fcb0'
            'SKIP')

_useragent="User-Agent: Mozilla/5.0 (X11; Linux ${CARCH}) \
                        AppleWebKit/537.36 (KHTML, like Gecko) \
                        Chrome/76.0.3809.87 \
                        Safari/537.36"

_useragent="$(printf '%s' "$_useragent" | sed 's/[[:space:]]\+/\\ /g')"

DLAGENTS=("https::/usr/bin/curl \
              -gqb '' -LC - --retry 3 --retry-delay 3 \
              -H authority:\ css-ig.net \
              -H upgrade-insecure-requests:\ 1 \
              -H ${_useragent} \
              -H accept:\ text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3 \
              -H referer:\ https://css-ig.net/pingo \
              -H accept-encoding:\ gzip,\ deflate,\ br \
              -H accept-language:\ en-US,en;q=0.9,pt;q=0.8 \
              -H cookie:\ HttpOnly;\ SERVERID105614=1420122|XSyhV|XSyhV \
              --compressed \
              --output %o \
              %u")

prepare() {
    mkdir -p "${pkgname}-${pkgver}"
    cd "${pkgname}-${pkgver}"
    bsdtar -xf "../pingo-win64-${pkgver}.zip"
}

package() {
    install -D -m755 "shellutils/image/pingo"         -t "${pkgdir}/usr/bin"
    install -D -m644 "${pkgname}-${pkgver}/pingo.exe" -t "${pkgdir}/usr/share/${pkgname}"
}
