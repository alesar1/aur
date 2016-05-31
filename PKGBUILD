# Maintainer: Kevin MacMartin <prurigro@gmail.com>

_pkgname=salsapipe
pkgname=${_pkgname}-git
pkgver=20150727.r26.6d81ace
pkgrel=2
pkgdesc='Encrypted network tunneling using salsa20 from libnettle and GPG from libgpgme'
url='https://github.com/prurigro/salsapipe'
license=('GPL3')
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
groups=('archassault' 'archassault-networking')
depends=('gpgme')
makedepends=('git')
source=("git+$url")
sha512sums=('SKIP')

pkgver() {
  cd $_pkgname
  printf "%s.r%s.%s" "$(git show -s --format=%ci master | sed 's/\ .*//g;s/-//g')" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd $_pkgname
  make
}

package() {
  cd $_pkgname
  install -Dm755 salsamsg "$pkgdir/usr/bin/salsamsg"
  install -Dm644 salsamsg.1 "$pkgdir/usr/share/man/man1/salsamsg.1"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}
