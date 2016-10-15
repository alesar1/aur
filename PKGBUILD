# Maintainer: kevku <kevku@gmx.com>
pkgname=kodi-addon-inputstream-rtmp-git
pkgver=r12.70cb86f
pkgrel=1
pkgdesc="librtmp support for Kodi 17+"
arch=('x86_64' 'i686')
url="https://github.com/notspiff/inputstream.rtmp"
license=('GPL2')
depends=('rtmpdump')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('kodi-addon-inputstream-rtmp-git::git+https://github.com/notspiff/inputstream.rtmp.git')
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/$pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/$pkgname"
        cmake \
            -DCMAKE_INSTALL_PREFIX=/usr \
            -DCMAKE_INSTALL_LIBDIR=/usr/lib \
            -DCMAKE_INSTALL_LIBDIR_NOARCH=/usr/lib \
            -DCMAKE_BUILD_TYPE=Release
	make
}

package() {
	cd "$srcdir/$pkgname"
	make DESTDIR="$pkgdir/" install
}
