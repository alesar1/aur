pkgname=sat-shell
pkgver=0.9
pkgrel=1
pkgdesc="sat-shell is an interactive tcl-shell for sat-solver interaction"
url="https://github.com/TestudoAquatilis/sat-shell"
arch=('x86_64' 'i686' 'armv7h')
license=('GPLv3')
depends=('tclln' 'glib2' 'zlib' 'minisat')
optdepends=()
makedepends=('git' 'gcc' 'make' 'flex' 'bison')
conflicts=()
replaces=()
backup=()
#install='foo.install'
source=("git+https://github.com/TestudoAquatilis/sat-shell.git")
md5sums=('SKIP')

build () {
  cd "${pkgname}"
  make
}

package() {
  cd "${srcdir}/${pkgname}"
  install -Dm755 sat-shell "${pkgdir}/usr/bin/sat-shell"
}

# vim:set ts=2 sw=2 et:
