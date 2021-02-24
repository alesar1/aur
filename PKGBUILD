# Maintainer: Piotr Rogoża <rogoza dot piotr at gmail dot com>
# Contributor: Edvinas Valatka <edacval@gmail.com>
# vim:set ts=2 sw=2 et ft=sh tw=100: expandtab

pkgname=apache-html-manual
_pkgname=httpd
pkgver=2.4.46
pkgrel=1
pkgdesc='Apache manual html pages'
arch=('any')
options=('libtool' '!strip' '!zipman' '!purge' 'docs')
url='https://www.apache.org/dist/httpd'
license=('APACHE')
source=(
http://www.apache.org/dist/httpd/httpd-${pkgver}.tar.bz2
)
sha256sums=('740eddf6e1c641992b22359cabc66e6325868c3c5e2e3f98faf349b61ecf41ea')
options=('emptydirs')

package() {
  cd "$srcdir"/${_pkgname}-$pkgver

  install -d "$pkgdir"/usr/share/$_pkgname
	cp -a "$srcdir"/httpd-$pkgver/docs/manual \
    "$pkgdir"/usr/share/$_pkgname/
}
