# Maintainer: Thomas Kiss <thokis@gmail.com>

pkgname=sane-airscan-git
pkgver=0.9.15.r4.g04857b0
pkgrel=1
pkgdesc='SANE - Apple AirScan (eSCL) driver'
url='https://github.com/alexpevzner/sane-airscan'
arch=('aarch64' 'x86_64')
license=('GPL2')
depends=('sane' 'libsoup')
makedepends=('ctags' 'git')
source=('git://github.com/alexpevzner/sane-airscan.git')
sha1sums=('SKIP')
conflicts=("sane-airscan")


pkgver() {
    cd "sane-airscan"
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "sane-airscan"
    make
}

package() {
    cd "sane-airscan"
    make DESTDIR="$pkgdir" install
    install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README"
}
