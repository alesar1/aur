pkgname=mstpd
pkgver=0.04.r8.gb593ac6
pkgrel=1
pkgdesc="User-space RSTP and MSTP daemon"
arch=(i686 x86_64)
license=(GPL2)
source=(git+https://github.com/ocedo/mstpd.git)
sha256sums=('SKIP')

pkgver() {
  cd $pkgname
  git tag -f v0.03 8b24d0260652357709cda159b45b0b58a2545e9e
  git tag -f v0.04 61728c9ecaf40f787cd1994be15f41a91df8986a
  git describe --tags | sed 's/^v//; s/-/.r/; s/-/./'
}

prepare() {
  cd $pkgname
  sed -i 's/ -Werror / /' Makefile
}

build() {
  cd $pkgname
  make
}

package() {
  cd $pkgname
  # installer is halfassed
  #make DESTDIR="$pkgdir" install

  install -Dm 755 bridge-stp "$pkgdir/usr/bin/bridge-stp"
  install -Dm 755 mstpctl "$pkgdir/usr/bin/mstpctl"
  install -Dm 755 mstpd "$pkgdir/usr/bin/mstpd"
  install -Dm 644 lib/bash_completion "$pkgdir/usr/share/bash-completion/completions/mstpctl"
  install -Dm 644 lib/mstpctl.8 "$pkgdir/usr/share/man/man8/mstpctl.8"
}

# vim: ft=sh:ts=2:sw=2:et
