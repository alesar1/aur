# Original submitter: Tetsumaki <http://goo.gl/YMBdA>
# Maintainer: rws <elisp dot vim at google mail> (@xd1le on twitter)

pkgname=sfnt2woff
pkgver=latest
pkgrel=1
pkgdesc="Convert/Unconvert TrueType/OpenType fonts to WOFF format"
arch=('i686' 'x86_64')
url="http://people.mozilla.org/~jkew/woff/"
license=('custom')
source=("http://people.mozilla.org/~jkew/woff/woff-code-latest.zip")
sha1sums=('59879f1bdeeafce7fc9d4b51406e80d7a4cd0293')

build() {
	cd "${srcdir}"
	make
}

package() {
	cd "${srcdir}"
	install -Dm755 "sfnt2woff" "${pkgdir}/usr/bin/sfnt2woff"
	install -Dm755 "woff2sfnt" "${pkgdir}/usr/bin/woff2sfnt"
}
