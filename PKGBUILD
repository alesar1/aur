# Maintainer: Onur BÜBER <onurbuber@engineer.com>
# Developer: Ari Archer <ari.web.xyz@gmail.com>

pkgname=kos
pkgver=0.0.8
pkgrel=2
pkgdesc='A simple SUID tool written in C++'
arch=('x86_64')
url='https://github.com/TruncatedDinosour/kos'
license=('custom:ArAr2')
provides=('kos')
conflicts=('kos')
optdepends=('bash'
	    'bash-completion')
depends=('libxcrypt')  # NOTE: libxcrypt is needed at runtime too
makedepends=('clang'
             'pkgconf')  # NOTE: removed llvm and its libs as they should be pulled by clang
install="${pkgname}.install"
source=("$pkgname-$pkgver.tar.gz::https://github.com/TruncatedDinosour/kos/archive/refs/tags/v$pkgver.tar.gz"
      	"kos.sysusers")
sha256sums=('SKIP'
            'SKIP')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  clang++ \
    -std=c++11 \
    -Wall -Wextra -Wpedantic -Wshadow -Werror -pedantic \
    -march=native -pipe \
    ./src/main.cc -o "${DESTDIR}kos" $(pkg-config --cflags --libs libxcrypt)

}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  install -Dm644 "${srcdir}"/kos.sysusers "${pkgdir}"/usr/lib/sysusers.d/kos.conf
  install -Dm4711 "$srcdir/$pkgname-$pkgver/kos" "$pkgdir/usr/bin/kos"
  install -Dm644 "$srcdir/$pkgname-$pkgver/kos.1" "$pkgdir/usr/share/man/man1/kos.1"
  install -Dm644 "$srcdir/$pkgname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/kos/LICENSE"
}

