# Maintainer: everyx <lunt.luo#gmail.com>

pkgname=sing-box
pkgver=1.0.7
pkgrel=3

pkgdesc='The universal proxy platform.'
arch=('x86_64' 'i686')
url='https://sing-box.sagernet.org/'
license=('GPL3')

makedepends=('go')

source=("$pkgname-$pkgver.tar.gz::https://github.com/SagerNet/sing-box/archive/v$pkgver.tar.gz")
sha256sums=('8c07e6c966aa79545647ada297b2c99d861636e5721bdeba720d2213d0883233')

conflicts=("${pkgname}-git" "${pkgname}-beta")
optdepends=('sing-geosite: sing-geosite database'
            'sing-geoip: sing-geoip database')

backup=('etc/sing-box/config.json')

_tags=with_quic,with_wireguard,with_clash_api
build(){
    cd $pkgname-$pkgver

    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"

    go build \
        -v \
        -trimpath \
        -buildmode=pie \
        -mod=readonly \
        -modcacherw \
        -tags "$_tags" \
        -ldflags '-linkmode=external -w -s' \
        ./cmd/sing-box

    sed -i '/^\[Service\]$/a User=sing-box' release/config/${pkgname}*.service

    echo 'u sing-box - "Sing-box Service" - -' > release/config/${pkgname}.sysusers
}

package() {
    cd $pkgname-$pkgver

    install -Dm755 "${pkgname}"                         -t "${pkgdir}/usr/bin"
    install -Dm644 "LICENSE"                            -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -Dm644 "release/config/config.json"         -t "${pkgdir}/etc/${pkgname}"
    install -Dm644 "release/config/${pkgname}.service"  -t "${pkgdir}/usr/lib/systemd/system"
    install -Dm644 "release/config/${pkgname}@.service" -t "${pkgdir}/usr/lib/systemd/system"
    install -Dm644 "release/config/${pkgname}.sysusers"    "${pkgdir}/usr/lib/sysusers.d//${pkgname}.conf"
}
