# Maintainer: Andy Weidenbaum <archbaum@gmail.com>

pkgname=libbitcoin-client-git
pkgver=20160723
pkgrel=1
pkgdesc="Bitcoin Client Protocol Library"
arch=('i686' 'x86_64')
depends=('boost'
         'boost-libs'
         'icu'
         'libbitcoin'
         'libbitcoin-protocol'
         'libsecp256k1'
         'zeromq')
makedepends=('autoconf'
             'automake'
             'gcc'
             'git'
             'libtool'
             'm4'
             'make'
             'pkg-config')
groups=('libbitcoin')
url="https://github.com/libbitcoin/libbitcoin-client"
license=('AGPL3')
source=(git+https://github.com/libbitcoin/libbitcoin-client)
sha256sums=('SKIP')
provides=('libbitcoin-client')
conflicts=('libbitcoin-client')

pkgver() {
  cd ${pkgname%-git}
  git log -1 --format="%cd" --date=short | sed "s|-||g"
}

build() {
  cd ${pkgname%-git}

  msg2 'Building...'
  ./autogen.sh
  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --libexecdir=/usr/lib/libbitcoin-client \
    --sysconfdir=/etc \
    --sharedstatedir=/usr/share/libbitcoin-client \
    --localstatedir=/var/lib/libbitcoin-client \
    --with-gnu-ld \
    --without-examples \
    --without-tests
  make -j$(($(nproc)/2))
}

package() {
  cd ${pkgname%-git}

  msg2 'Installing license...'
  install -Dm 644 COPYING -t "$pkgdir/usr/share/licenses/libbitcoin-client"

  msg2 'Installing...'
  make DESTDIR="$pkgdir" install

  msg2 'Cleaning up pkgdir...'
  find "$pkgdir" -type d -name .git -exec rm -r '{}' +
  find "$pkgdir" -type f -name .gitignore -exec rm -r '{}' +
}
