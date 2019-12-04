# Maintainer: Máté Eckl <ecklm94@gmail.com>
# Contributor: Anatol Pomozov <anatol.pomozov@gmail.com>
# Contributor: Steven Allen <steven@stebalien.com>

pkgname=nftables-git
pkgver=0.9.3
pkgrel=1
pkgdesc='Netfilter tables userspace tools'
arch=(i686 x86_64)
url='https://netfilter.org/projects/nftables/'
license=('GPL2')
depends=(libmnl libnftnl-git gmp readline ncurses jansson)
makedepends=(asciidoc git bison flex)
optdepends=('python: Python bindings')
backup=('etc/nftables.conf')
provides=(nftables)
conflicts=(nftables)
source=(git://git.netfilter.org/nftables
        nftables.conf
        nftables.service)
sha1sums=('SKIP'
          '7869aa31ac802922073310ffd4cbbc16450171e5'
          '59185e947ebfd599954800ad2c774171b3f4cd58')

pkgver() {
  cd nftables
  git describe | sed 's/^v//; s/-/.r/; s/-/./'
}

build() {
  cd nftables
  sh autogen.sh
  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --sysconfdir=/usr/share \
    --with-json
  make
}

package() {
  cd nftables
  make DESTDIR="$pkgdir" install
  # basic safe firewall config
  install -Dm644 "$srcdir/nftables.conf" "$pkgdir/etc/nftables.conf"
  # systemd
  install -Dm644 "$srcdir/nftables.service" "$pkgdir/usr/lib/systemd/system/nftables.service"
}
