# Maintainer: Icaro Perseo <icaroperseo[at]protonmail[dot]com>

_pkgname=uget
pkgname=${_pkgname}-beta
pkgver=2.1.5
pkgrel=1
pkgdesc="GTK+ download manager featuring download classification and HTML import"
arch=('i686' 'x86_64')
url="http://ugetdm.com/"
license=('LGPL')
depends=('libnotify' 'libappindicator-gtk3' 'gtk3' 'gstreamer' 'curl')
makedepends=('intltool')
optdepends=('aria2: alternative backend')
provides=('uget')
conflicts=('uget')
source=("https://downloads.sourceforge.net/project/urlget/uget%20%28developing%29/${pkgver}/${_pkgname}-${pkgver}.tar.gz")
sha256sums=('a32f2fb8ad558c552caeb0c9dedb4f5825f531f71baf54b6cb9b809b0d3c0ed9')

build() {
  cd "${_pkgname}-${pkgver}"
  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --localstatedir=/var
  make
}

package() {
  cd "${_pkgname}-${pkgver}"
  make DESTDIR="$pkgdir" install

  # Doc files
  install -Dm644 AUTHORS \
    "$pkgdir/usr/share/doc/${_pkgname}/AUTHORS"
  install -Dm644 ChangeLog \
    "$pkgdir/usr/share/doc/${_pkgname}/CHANGELOG"
  install -Dm644 INSTALL \
    "$pkgdir/usr/share/doc/${_pkgname}/INSTALL"
  install -Dm644 README \
    "$pkgdir/usr/share/doc/${_pkgname}/README"
  install -Dm644 NEWS \
    "$pkgdir/usr/share/doc/${_pkgname}/NEWS"

  # License
  install -Dm644 COPYING \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 cc=80 et:
