# $Id$
# Maintainer: Max Mazurov <fox.cpp at disroot dot org>
# Contributor: Jonas Heinrich <onny@project-insantiy.org>
# Contributor: Max Mazurov <fox.cpp at disroot dot org>
pkgname='maddy'
pkgver=0.2.1
pkgrel=1
pkgdesc='Composable all-in-one mail server'
arch=('x86_64')
url='https://github.com/foxcpp/maddy'
license=('MIT')
depends=('glibc')
makedepends=('go' 'git' 'scdoc')
optdepends=(
    "bash: For rspamd-hook script"
)
source=(
    "${pkgname}-${pkgver}.tar.zst::https://github.com/foxcpp/maddy/releases/download/v${pkgver}/maddy-${pkgver}-src.tar.zst"
    "${pkgname}-${pkgver}.tar.zst.sig::https://github.com/foxcpp/maddy/releases/download/v${pkgver}/maddy-${pkgver}-src.tar.zst.sig"
    'maddy.sysusers'
    'maddy.tmpfiles'
)
backup=('etc/maddy/maddy.conf')
sha512sums=('1116a9575a8505586f29e5478393761430e9c57a6b680df9610b32836e823c7ca8a6a810609444e15658c9329546867505f0ff249aae2d98ff984abee44438b6'
            'SKIP'
            '750346110adb8caa61f537560018497f73543dc01ff26aceed2f052f281a35fdc659c9c478cc55775eadf8a3d17b511d5bed86334d1c455732dcb9a273120589'
            'f33135b81129d6ef3006d8e9f410ec0d7e44226ae640dea77d756268d0e97828d8965ac75d0d9b49604a19b8b9e0384d15007d33c4b813f359108d28a10702b5')
validpgpkeys=('3197BBD95137E682A59717B434BB2007081396F4')
build() {
    export GOPATH="$PWD/gopath"
    cd "${srcdir}/maddy-${pkgver}-src"

    ./build.sh --version "${pkgver}" --prefix /usr package

    # Module cache is read-only by default. Fix its permissions so it will be
    # easier to clean build directory.
    chmod -R +w ${GOPATH}
}

check() {
    export GOPATH="$PWD/gopath"
    cd "${srcdir}/maddy-${pkgver}-src"

    go test ./...

    cd tests/
    ./run.sh

    chmod -R +w ${GOPATH}
}

package() {
    export GOPATH="$PWD/gopath"
    cd "${srcdir}/maddy-${pkgver}-src"

    ./build.sh \
        --version "v${pkgver}" \
        --prefix /usr \
        --destdir "${pkgdir}" \
        install_pkg

    install -Dm 0644 "${srcdir}/maddy-${pkgver}-src/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm 0644 "${srcdir}/maddy.sysusers" "${pkgdir}/usr/lib/sysusers.d/maddy.conf"
    install -Dm 0644 "${srcdir}/maddy.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/maddy.conf"
}
