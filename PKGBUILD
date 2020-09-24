# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# The following guidelines are specific to BZR, GIT, HG and SVN packages.
# Other VCS sources are not natively supported by makepkg yet.

# Maintainer: Nemin <pergerlori@gmail.com>
pkgname=relive-git
pkgver=r3159.98bcf2a9
pkgrel=1
pkgdesc="An open-source Abe's Oddysee / Abe's Exoddus engine"
arch=('i686' 'x86_64')
url="https://aliveteam.github.io"
license=('unknown')
depends=('sdl2')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
install='relive-git.install'
source=('relive::git+https://github.com/AliveTeam/alive_reversing')
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/${pkgname%-git}"
  git submodule update --init --recursive
  cmake -B build -S .
}

package() {
  cd "$srcdir/${pkgname%-git}/build"
  make
  mkdir -p "$pkgdir/usr/bin"
  cp Source/AliveExe/AliveExeAE "$pkgdir/usr/bin/${pkgname%-git}"
}
