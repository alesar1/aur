# Contributor: Geoffroy Carrier <geoffroy.carrier@koon.fr>
# Contributor: Giorgio Lando <patroclo7@gmail.com>
# Contributor: Leslie P. Polzer <polzer@gnu.org>
# Contributor: Mark Pustjens <pustjens@dds.nl>
# Contributor: Tom Tobin <archlinux@tomxtobin.com>
# Contributor: Jean-Philippe Menil <jpmenil@gmail.com>

_pkgname=isync
pkgname=$_pkgname-git
pkgver=1.4.2
pkgrel=1
pkgdesc="IMAP and MailDir mailbox synchronizer"
url="http://isync.sourceforge.net/"
arch=('i686' 'x86_64')
license=('GPL2')
depends=('libsasl' 'openssl')
makedepends=('git')
conflicts=('isync')
provides=('isync')
source=('git+https://git.code.sf.net/p/isync/isync')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "$srcdir/$_pkgname"
  ./autogen.sh
}

build() {
  cd "$srcdir/$_pkgname"
  ./configure --prefix=/usr
  make
}

package() {
  cd "$srcdir/$_pkgname"
  make DESTDIR="$pkgdir" install
}
