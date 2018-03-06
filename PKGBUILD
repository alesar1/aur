# Maintainer: Solomon Choina <shlomochoina@gmail.com>
pkgname=wxglterm-git
_pkgname=wxglterm
pkgver=r314.10272b9
pkgrel=1
pkgdesc="a cross platform terminal emulator using wxWidgets and python, drawing using OpenGL"
arch=('x86_64')
url="https://github.com/stonewell/wxglterm"
license=('MIT')
depends=('wxgtk3')
makedepends=('git' 'cmake' 'pybind11') # 'bzr', 'git', 'mercurial' or 'subversion'
options=()
source=("git+$url")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${_pkgname}"

	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"

}

prepare (){
  if [[ -d build ]]; then
    rm -rf build
  fi
  mkdir build
}
build() {
  #you need to go into $srcdir/build and do it manually
  cd "build"
  cmake ../$_pkgname -DCMAKE_INSTALL_PREFIX=/usr -DPYTHON_INCLUDE_DIR=$(python -c "from distutils.sysconfig import get_python_inc; print(get_python_inc())") -DBUILD_WXWIDGETS_UI=ON -DBUILD_OPENGL_UI=ON -DCMAKE_BUILD_TYPE="RedWithDebInfo"  -DBUILD_SCINTILLA_EDITOR=ON 
 
  make
}

package() {
	cd "build"
	make DESTDIR="$pkgdir/" install
	rm -rf $pkgdir/home
	install -D $pkgdir/usr/share/wxglterm/etc/wxglterm.json $pkgdir/etc/wxglterm.json
	rm -rf $pkgdir/usr/share/wxglterm/etc
}
