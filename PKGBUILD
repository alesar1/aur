# Maintainer: Icaro Perseo <icaroperseo[at]protonmail[dot]com>
# Contributor: Eugenio M. Vigo <emvigo@gmail.com>
# Contributor: speps <speps at aur dot archlinux dot org>

pkgname=dianara
pkgver=1.3.5
pkgrel=2
pkgdesc="A Qt pump.io client"
arch=('i686' 'x86_64')
url="http://dianara.nongnu.org/"
license=('GPL')
depends=('hicolor-icon-theme' 'file' 'qt5-base' 'qoauth-git')
source=("http://download-mirror.savannah.gnu.org/releases/$pkgname/$pkgname-v$pkgver.tar.gz")
sha256sums=('c284fecbb4c0fe00fe2ce7cfd537de42759567c6116f6c16f5b48857ddb73d3e')

build() {
  cd $pkgname-v$pkgver
  qmake Dianara.pro
  make
}

package() {
  cd $pkgname-v$pkgver

  make INSTALL_ROOT="${pkgdir}" install

  # Desktop file
  install -Dm644 dianara.desktop \
    "$pkgdir/usr/share/applications/dianara.desktop"

  # Icons
  install -Dm644 icon/32x32/dianara.png \
    "$pkgdir/usr/share/icons/hicolor/32x32/apps/dianara.png"
  install -Dm644 icon/64x64/dianara.png \
    "$pkgdir/usr/share/icons/hicolor/64x64/apps/dianara.png"

  # Translations
  install -d "$pkgdir/usr/share/dianara/translations"
  install -Dm644 translations/* \
    "$pkgdir/usr/share/${pkgname}/translations"

  # Doc files
  install -Dm644 BUGS \
    "$pkgdir/usr/share/doc/${pkgname}/BUGS"
  install -Dm644 CHANGELOG \
    "$pkgdir/usr/share/doc/${pkgname}/CHANGELOG"
  install -Dm644 INSTALL \
    "$pkgdir/usr/share/doc/${pkgname}/INSTALL"
  install -Dm644 README \
    "$pkgdir/usr/share/doc/${pkgname}/README"
  install -Dm644 TODO \
    "$pkgdir/usr/share/doc/${pkgname}/TODO"
  install -Dm644 TRANSLATING \
    "$pkgdir/usr/share/doc/${pkgname}/TRANSLATING"

  # Man files
  install -Dm644 manual/dianara.1 \
    "$pkgdir/usr/share/man/man1/dianara.1"

  # License
  install -Dm644 LICENSE \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 cc=80 et:
