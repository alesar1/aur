# Maintainer: Neal Miller <ac9qd@protonmail.com>
# Contributor: Thomas Gatzweiler <thomas.gatzweiler@gmail.com> wsjtx-svn maintainer

pkgname=wsjtx-git
pkgver=r4207.11dfce32
pkgrel=1
pkgdesc="Software for Amateur Radio Weak-Signal Communication (JT9 and JT65)"
arch=(i686 x86_64)
url="http://physics.princeton.edu/pulsar/k1jt/wsjtx.html"
license=("GPL-3")
depends=(qt5-base qt5-multimedia qt5-serialport libusb libusb-compat fftw gcc-fortran hamlib)
makedepends=('cmake' 'git' 'asciidoc')
provides=("wsjtx")
conflicts=("wsjtx" "wsjtx-bin" "wsjtx-bin-rpm" "wsjtx-svn")
source=("git+https://git.code.sf.net/p/wsjt/wsjtx/"
        "wsjtx.patch")
md5sums=("SKIP"
         "57650d8febe9810c4d3bc9f8c5cda75d")

pkgver() {
	cd "$srcdir/${pkgname%-git}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cp wsjtx.patch "$srcdir/${pkgname%-git}"
	cd "$srcdir/${pkgname%-git}"
    patch -i wsjtx.patch
	sed -ri 's/^find_package \(hamlib 3 REQUIRED\)/set \(hamlib_LIBRARIES hamlib\)/' CMakeLists.txt
}

build() {
	mkdir -p "$srcdir/${pkgname%-git}/build"
	cd "$srcdir/${pkgname%-git}/build"
        cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release ..
	make
}

# make pkg file and reverse patch so its ready for next update
package() {
	cd "$srcdir/${pkgname%-git}/build"
	make DESTDIR="$pkgdir/" install
	cd "$srcdir/${pkgname%-git}"
    patch -R CMakeLists.txt wsjtx.patch
}
