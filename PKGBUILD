# Maintainer: Evangelos Athanasiadis <dyrer@yandex.com>
# Maintainer: Peter Kerschl <git@pmke.de>
pkgname=local-by-flywheel-bin
_pkgname=local-by-flywheel
pkgver=6.3.1
pkgrel=5826
pkgdesc="A program to create a local WordPress development environment."
arch=('x86_64')
url="https://localbyflywheel.com/"
license=('custom:proprietary')
makedepends=('rpmextract')
depends=(
  'numactl'
  'ncurses5-compat-libs'
  'libaio'
  'gtk3'
  'nss'
  'libjpeg-turbo'
  'libxss'
  'libxslt'
)
options=('emptydirs')
source=("https://cdn.localwp.com/releases-stable/$pkgver+$pkgrel/local-$pkgver-linux.rpm")
sha1sums=('94794ce8b2fe453850af7aa5aff09d1d750a5e67')

package() {
  rpmextract.sh ../local-$pkgver-linux.rpm
  mv $srcdir/usr $pkgdir/ # /usr & /opt are top-level dirs in the package
  mv $srcdir/opt $pkgdir/

  #Create symlink the executable to /usr/bin
  mkdir "$pkgdir"/usr/bin
  ln -s /opt/Local/local "$pkgdir"/usr/bin/$_pkgname

  #Setuid on chrome-sandbox
  chmod u+s "$pkgdir"/opt/Local/chrome-sandbox

  cd $pkgdir/
}
