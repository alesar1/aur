# Maintainer: Emma Caldeira <kiito@tilde.team>
# Contributor: Alexander F Rødseth <xyproto@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: Ryan Coyner <rcoyner@gmail.com>

pkgname=mod_wsgi
pkgver=4.9.2
pkgrel=1
pkgdesc='Python WSGI adapter module for Apache'
arch=('x86_64')
url='http://www.modwsgi.org/'
license=('APACHE')
depends=('apache' 'python')
conflicts=('mod_wsgi2')
makedepends=('apache' 'python')
install='mod_wsgi.install'
source=($pkgname-$pkgver.tar.gz::"https://codeload.github.com/GrahamDumpleton/mod_wsgi/tar.gz/$pkgver")
sha256sums=('3bf817b1bdeb47f564af85e6dbd56339dcc747df2961b6bec61e99b4fd56bcbe')

build() {
  cd $pkgname-$pkgver
  ./configure \
    --prefix=/usr \
    --with-apxs=/usr/bin/apxs \
    --with-python=/usr/bin/python
  make
}

package() {
  make -C $pkgbase-$pkgver DESTDIR="$pkgdir" install
}
