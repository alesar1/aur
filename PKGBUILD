# Maintainer: Emil Velikov <emil.l.velikov@gmail.com>

pkgname=umr-git
epoch=1
pkgver=r332.5909d8c
pkgrel=1
pkgdesc='userspace debugging and diagnostic tool for AMD GPUs using the AMDGPU kernel driver'
arch=('i686' 'x86_64')
url='https://lists.freedesktop.org/archives/amd-gfx/2017-February/005122.html'
license=('MIT')
#depends=('ncurses')
makedepends=('git' 'cmake')
provides=('umr')
conflicts=('umr')
source=('git+https://gitlab.freedesktop.org/tomstdenis/umr.git')
sha256sums=('SKIP')
#options=(debug "!strip")

pkgver() {
	cd umr
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd umr
	cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR=lib -DCMAKE_BUILD_TYPE=Release .
}

package() {
	cd umr
	make DESTDIR="$pkgdir" install
	install -Dt "$pkgdir/usr/share/licenses/$pkgname" -m644 LICENSE
}
