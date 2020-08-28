# Maintainer: Morgenstern <charles [at] charlesbwise [dot] com>

pkgname=cherrytree-git
_pkgname=$(echo -e "${pkgname/-git/}")
pkgver=0.99.9.r145.gdfed1e53
pkgrel=1
pkgdesc="Hierarchical note-taking application, git version"
arch=('x86_64')
url="https://github.com/giuspen/${_pkgname}"
license=('GPL3')
depends=('gspell'
	 'gtksourceviewmm'
	 'libxml++2.6')
makedepends=('cmake'
	     'git'
	     'python-lxml')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("git+https://github.com/giuspen/${_pkgname}.git")
sha256sums=('SKIP')

pkgver() {
  local _pkgver
  cd "${_pkgname}"
  _pkgver=$(grep 'CT_VERSION "' CMakeLists.txt | \
	sed 's/.*"\(.*\)"[^"]*$/\1/')
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | \
	sed "s/.*r/$_pkgver\.r/"
}

build() {
  cmake \
	-B "${_pkgname}/build" \
	-S "${_pkgname}" \
	-DBUILD_TESTING:BOOL=OFF \
	-Wno-dev
  make -C "${_pkgname}/build"
}

package() {
  make -C "${_pkgname}/build" DESTDIR="${pkgdir}" install
}
