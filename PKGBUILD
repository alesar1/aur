# Maintainer: Baptiste Jonglez <baptiste--aur at jonglez dot org>
pkgname=opendht
pkgver=0.5.1.r79.g13f8c13
pkgrel=1
epoch=1
pkgdesc="A C++11 implementation of the Kademlia DHT (Distributed Hash Table)"
arch=('i686' 'x86_64')
depends=('gnutls' 'nettle' 'readline')
makedepends=('git' 'msgpack-c')
url="https://github.com/savoirfairelinux/opendht"
license=('GPL3')
source=("git://github.com/savoirfairelinux/opendht#commit=13f8c13ac4ebb3b43474d91ca48b42a1019083f4")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname}"
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${pkgname}"

  msg2 'Building...'
  ./autogen.sh
  # Python bindings are disabled as of 2015-08-24 because they don't
  # build.  See https://github.com/savoirfairelinux/opendht/issues/15
  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --libexecdir=/usr/bin \
    --sysconfdir=/etc \
    --sharedstatedir=/usr/share/opendht \
    --localstatedir=/var/lib/opendht \
    --with-gnu-ld \
    --disable-python \
    --disable-doc
  make
}

package() {
  cd "${pkgname}"

  msg2 'Installing...'
  make DESTDIR="$pkgdir" install

  msg2 'Installing documentation...'
  install -D -m655 README.md "${pkgdir}/usr/share/doc/opendht/README.md"

  msg2 'Cleaning up pkgdir...'
  find "$pkgdir" -type d -name .git -exec rm -r '{}' +
  find "$pkgdir" -type f -name .gitignore -exec rm -r '{}' +
}

# vim:set ts=2 sw=2 et:
