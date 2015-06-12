# Maintainer: Mitsu <archlinux AT suumitsu DOT eu>

pkgname=hubicfuse-git
_gitname=hubicfuse
pkgver=20150317
pkgrel=1
pkgdesc="A fuse filesystem to access HubiC cloud storage (git)"
arch=('i686' 'x86_64')
conflicts=("hubicfuse")
provides=("hubicfuse")
url='https://github.com/TurboGit/hubicfuse'
license=('MIT')
depends=('fuse' 'libxml2' 'json-c')
makedepends=('git' 'gcc' 'libxml2' 'pkg-config' 'make')
source=("git+https://github.com/TurboGit/hubicfuse.git")

sha256sums=('SKIP')

build() {
	cd "$srcdir/$_gitname"
	./configure --prefix=/usr
	make -j $(nproc)
}

package() {
	cd "$srcdir/$_gitname"
	make DESTDIR="$pkgdir" install
	
	  install -D -m755 "$srcdir/$_gitname/hubic_token" "$pkgdir/usr/bin/hubic_token"
  echo "##################################################################"
  echo "For setup, please refer to https://github.com/TurboGit/hubicfuse"
  echo "##################################################################"
}
# vim:set ts=2 sw=2 et:

