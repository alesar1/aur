# Maintainer: John Ramsden <johnramsden [at] riseup [dot] net>

pkgname=zrepl
pkgver=0.2.0
pkgrel=3
pkgdesc='One-stop ZFS backup & replication solution'
arch=('x86_64')
url='https://zrepl.github.io/'
license=('MIT')
provides=('zrepl')
conflicts=('zrepl-bin')
depends=('go-pie')
source=("https://github.com/${pkgname}/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('40ceb559059b43e96f61303a43ca0fac80b26f8281a07aa03e235658a6548891')

zrepl_version="arch-${pkgver}"

build() {
    GO_LDFLAGS="-X github.com/zrepl/zrepl/version.zreplVersion=${zrepl_version}"
    cd "${pkgname}-${pkgver}"
    go build \
        -trimpath \
        -mod=readonly \
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
