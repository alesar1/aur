# Maintainer: everyx <lunt.luo#gmail.com>

pkgname=sing-box-beta
_pkgname=sing-box
pkgver=1.1_beta17
_version=${pkgver//_/-}
pkgrel=1

pkgdesc='The universal proxy platform (beta version).'
arch=('x86_64' 'i686')
url='https://sing-box.sagernet.org/'
license=('GPL3')

makedepends=('go')

source=("$_pkgname-$_version.tar.gz::https://github.com/SagerNet/sing-box/archive/$_version.tar.gz")
sha256sums=('26a5e9ed589a23187f172690e451b332b9a0c7009243fa9dabf7e48df03a0525')

provides=("$_pkgname")
conflicts=("$_pkgname")
optdepends=('sing-geosite: sing-geosite database'
            'sing-geoip: sing-geoip database')

backup=('etc/sing-box/config.json')


_tags=with_quic,with_wireguard,with_clash_api
build(){
    cd "$_pkgname-$_version" || return

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
}

package() {
    cd "$_pkgname-$_version" || return

    install -Dm755 "${_pkgname}"                        -t "${pkgdir}/usr/bin"
    install -Dm644 "release/config/config.json"         -t "${pkgdir}/etc/${_pkgname}"
    install -Dm644 "release/config/sing-box.service"    -t "${pkgdir}/usr/lib/systemd/system"
    install -Dm644 "release/config/sing-box@.service"   -t "${pkgdir}/usr/lib/systemd/system"
}
