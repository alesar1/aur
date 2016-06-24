# Maintainer: Alois Nespor <info@aloisnespor.info>
# Contributor: speps <speps dot aur dot archlinux dot org>

pkgname=rssguard
pkgver=3.3.1
pkgrel=1
pkgdesc="A simple (yet powerful) Qt5 feed reader."
arch=('i686' 'x86_64')
url="https://github.com/martinrotter/rssguard/"
license=('GPL3')
depends=('qt5-base>=5.7.0' 'qt5-webengine')
makedepends=('qt5-tools')
optdepends=('mariadb: MySQL/MariaDB storage backend support')
provides=('rss-guard')
conflicts=('rss-guard' 'rssguard-git')
replaces=('rss-guard')
source=("https://github.com/martinrotter/rssguard/archive/$pkgver.tar.gz")


build() {
  cd $pkgname-$pkgver
  qmake-qt5 -r CONFIG+=release PREFIX=/usr INSTALL_ROOT="$pkgdir/" QMAKE_CFLAGS_RELEASE="$CPPFLAGS $CFLAGS" QMAKE_CXXFLAGS_RELEASE="$CPPFLAGS $CXXFLAGS" QMAKE_LFLAGS_RELEASE="$LDFLAGS"
  make
}

package() {
  cd $pkgname-$pkgver
  make INSTALL_ROOT="$pkgdir/" install
}
sha256sums=('7d1939917caeaadab21d360fe29a0a0a11c49cbf68ba1993dd17296f3076ee04')
