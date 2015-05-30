# Maintainer: Markus Kalb <mk@filmkreis.tu-darmstadt.de>
# Contributor: Stefan Karner <stefan.karner@student.tuwien.ac.at>
pkgname=libdcp-git
pkgver=0.r808.bbb3db1
pkgrel=2
pkgdesc="A small C++ library which can create and read Digital Cinema Packages using JPEG2000 and WAV files"
arch=('i686' 'x86_64')
url="http://carlh.net/software/libdcp"
license=('GPL')
groups=
depends=('openssl' 'libxml++>=2.6' 'xmlsec' 'openjpeg' 'libcxml-git' 'libsigc++>=2.0' 'boost-libs>=1.45')
makedepends=('python2' 'boost>=1.45')
optdepends=()
provides=('libdcp')
conflicts=('libdcp')
replaces=()
backup=()
options=()
install=
source=("libdcp-git::git+http://git.carlh.net/git/libdcp.git")

# git variables
_gitname='libdcp-git'

pkgver() {
  cd "$_gitname"

  printf "0.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd  "$_gitname"
  python2 waf configure --prefix=/usr
  python2 waf build
}

package() {
  cd  "$_gitname"
  python2 waf install --destdir=$pkgdir
}

sha512sums=('SKIP')
         
