# Contributor: Robin Eklind <rnd0x00@gmail.com>
# Maintainer: Kuan-Yen Chou <kuanyenchou at gmail dot com>

pkgname=intelxed-git
pkgver=12.0.1.r1.gf7191e2
pkgrel=1
pkgdesc="x86 encoder decoder"
arch=('x86_64')
url="https://intelxed.github.io"
license=('Apache')
depends=()
makedepends=('git' 'mbuild')
provides=('intelxed')
conflicts=('intelxed')
source=("$pkgname"::'git+https://github.com/intelxed/xed')
md5sums=('SKIP')

pkgver() {
    cd "$srcdir/$pkgname"
    if git describe --long --tags >/dev/null 2>&1; then
        git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
    else
        printf 'r%s.%s' "$(git rev-list --count HEAD)" "$(git describe --always)"
    fi
}

build() {
    cd "${srcdir}/${pkgname}"
    ./mfile.py --static install ${MAKEFLAGS}
    ./mfile.py --shared install ${MAKEFLAGS}
    ./mfile.py examples install ${MAKEFLAGS}
}

package() {
    cd "${srcdir}/${pkgname}"/kits/xed-install-base-*-lin-x86-64

    # remove unneeded files
    rm -rf extlib/ mbuild/ misc/ doc/ examples/

    # install binaries, headers, and libraries
    install -Dm 755 -t "${pkgdir}/usr/bin" bin/*
    install -dm 755 "${pkgdir}/usr/include"
    cp -r include/* "${pkgdir}/usr/include/"
    install -Dm 644 -t "${pkgdir}/usr/lib" lib/*
}

# vim: set sw=4 ts=4 et:
