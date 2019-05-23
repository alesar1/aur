# Maintainer: Jannik Vogel <email@jannikvogel.de>

_pkgbase='xqemu'
pkgname="$_pkgbase-git"
pkgver=r63217.729e52662f
pkgrel=1
pkgdesc="An original Xbox emulator" #FIXME: "An" ?
arch=('i686' 'x86_64')
url="http://xqemu.org/"
license=('GPL2')
depends=('sdl2' 'virglrenderer' 'vde2' 'libnfs' 'libepoxy')
optdepends=('qemu: support scripts and localization'
            'xqemu-manager: launcher with graphical user interface')
makedepends=('python' 'git')
provides=('xqemu')
source=("$_pkgbase::git+https://github.com/xqemu/xqemu.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgbase"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/$_pkgbase"

  ./build.sh
}

package() {
  cd "$srcdir/$_pkgbase"

  install -Dm755 "$srcdir/$_pkgbase/i386-softmmu/qemu-system-i386" "$pkgdir/usr/bin/xqemu"
}
