# Maintainer: Piotr Rogoża <rogoza dot piotr at gmail dot com>

pkgname=oktopi-git
pkgver=r1.9895a4b
pkgrel=1
pkgdesc='A fork of Pacman’s GUI Octopi for Chakra.'
arch=('i686' 'x86_64')
url='http://gitorious.org/chakra/oktopi'
license=('GPL')
depends=(kdebase-runtime)
makedepends=(git kdelibs cmake automoc4)
provides=(oktopi)
conflicts=(oktopi)
# install='oktopi-git.install'
source=()
_gitroot='http://gitorious.org/chakra/oktopi.git'
_gitname='oktopi'

pkgver(){
  cd "$srcdir"
  if [[ ! -d "$_gitname" ]]; then
    git clone --depth 1 "$_gitroot" "$_gitname"
  fi

  cd "$srcdir"/$_gitname
  set -o pipefail
  git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"

}
build(){
  cd "$srcdir"
  msg "Connecting to GIT server...."

  if [[ -d "$_gitname" ]]; then
    cd "$_gitname"
    git pull origin
    msg "The local files are updated."
  else
    git clone --depth 1 "$_gitroot" "$_gitname"
  fi

  msg "GIT checkout done or server timeout"
  msg "Starting build..."

  rm -rf "$srcdir/$_gitname-build"
  git clone "$srcdir/$_gitname" "$srcdir/$_gitname-build"
  cd "$srcdir/$_gitname-build"


  [ ! -d build ] && mkdir build
  cd build
  cmake .. -DCMAKE_INSTALL_PREFIX=$(kde4-config --prefix) -DCMAKE_BUILD_TYPE=Release
  make
}
package(){
  cd "$srcdir"/$_gitname-build/build
  make DESTDIR="$pkgdir/" install
}
