# Maintainer: John Ramsden <johnramsden [at] riseup [dot] net>

pkgname=zrepl
pkgver=0.3.0
pkgrel=1
pkgdesc='One-stop ZFS backup & replication solution'
arch=('x86_64')
url='https://zrepl.github.io/'
license=('MIT')
provides=('zrepl')
conflicts=('zrepl-bin')
depends=('go')
source=("https://github.com/${pkgname}/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('669b59ca524f487a76145f7153b9c048442cd1b96a293e0dc18048f5024a2997')

zrepl_version="arch-${pkgver}"

build() {
    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export GOFLAGS="-buildmode=pie -trimpath -mod=readonly -modcacherw"

    GO_LDFLAGS="-X github.com/zrepl/zrepl/version.zreplVersion=${zrepl_version}"

    cd "${pkgname}-${pkgver}"
    go build \
        -ldflags "${GO_LDFLAGS} -extldflags ${LDFLAGS}" \
        -o "${pkgname}" .
}

package() {
    cd "${pkgname}-${pkgver}"
    install -Dm755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
    install -d "${pkgdir}/usr/share/licenses/${pkgname}"
    install -d "${pkgdir}/usr/share/${pkgname}"
    install -d "${pkgdir}/usr/lib/systemd/system"

    install -m644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -m644 "dist/systemd/${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
    cp -r "config/samples" "${pkgdir}/usr/share/${pkgname}/samples"

    sed -i s:/usr/local/bin/:/usr/bin/:g "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
}
