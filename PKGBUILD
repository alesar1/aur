# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=rng-tools-git
pkgver=6.11.r0.g2ea1347
pkgrel=1
pkgdesc="Random number generator daemon"
arch=('i686' 'x86_64')
url="https://github.com/nhorman/rng-tools"
license=('GPL3')
depends=('glibc' 'curl' 'jansson' 'jitterentropy' 'libp11' 'libxml2' 'openssl' 'sysfsutils')
makedepends=('git')
provides=('rng-tools')
conflicts=('rng-tools')
backup=('etc/conf.d/rngd')
source=("git+https://github.com/nhorman/rng-tools.git"
        "rngd.conf::https://git.archlinux.org/svntogit/community.git/plain/trunk/rngd.conf?h=packages/rng-tools")
sha256sums=('SKIP'
            'SKIP')


pkgver() {
  cd "rng-tools"

  git describe --long --tags | sed 's/^[vV]//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "rng-tools"

  ./autogen.sh
  ./configure \
    --prefix="/usr" \
    --sbindir="/usr/bin"
  make
}

check() {
  cd "rng-tools"

  make check
}

package() {
  cd "rng-tools"

  make DESTDIR="$pkgdir" install

  install -Dm644 "rngd.service" -t "$pkgdir/usr/lib/systemd/system"
  install -Dm644 "$srcdir/rngd.conf" "$pkgdir/etc/conf.d/rngd"
}
