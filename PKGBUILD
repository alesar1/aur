# Maintainer: dylif <aur_kl40w9du AT dylif DOT org>
# Contributor: Thermi <noel at familie-kuntze dot de>
# Submitter: nullie

pkgname=lsyncd-git
_pkgname=lsyncd
pkgver=2.3.0.r0.gf02bf70
pkgrel=1
pkgdesc="Live Syncing (Mirror) Daemon - Git development version"
arch=('i686' 'x86_64')
url="https://github.com/lsyncd/lsyncd"
license=('GPL2')
depends=('lua' 'rsync')
makedepends=('lua' 'cmake')
provides=('lsyncd')
conflicts=('lsyncd')
source=("git+https://github.com/lsyncd/lsyncd.git"
        "lsyncd.service"
        )

sha256sums=('SKIP'
            '538072a4505abbdf8c4d16c9200810d4a2253f892a71fc16b5cd7f35ebe1ae57'
            )

pkgver() {
    cd "${srcdir}/${_pkgname}"
    git describe --long --tags | sed 's/release-//;s/\([^-]*-g\)/r\1/;s/-/./g' 
}

build() {
    cd "${srcdir}/${_pkgname}"

    cmake -DCMAKE_INSTALL_PREFIX=/usr
    make -j$(nproc --ignore 1)
}

package() {
    cd "${srcdir}/${_pkgname}"
    make DESTDIR="${pkgdir}" install
    install -Dm 644 "${srcdir}/lsyncd.service" "${pkgdir}/usr/lib/systemd/system/lsyncd.service"
}
