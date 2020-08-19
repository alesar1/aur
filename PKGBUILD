# Maintainer: Dct Mei <dctxmei@gmail.com>

pkgname=golang-clash
_pkgname=clash
pkgver=1.1.0
pkgrel=1
pkgdesc="A rule-based tunnel in Go"
arch=('x86_64')
url="https://github.com/Dreamacro/clash"
license=('GPL3')
depends=('glibc' 'golang-clash-geoip')
makedepends=('go')
provides=("clash=${pkgver}")
conflicts=('clash')
backup=("etc/clash/config.yaml")
source=("${_pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz"
        "config.yaml"
        "clash.sysusers"
        "clash.service"
        "clash@.service")
md5sums=('82e0279d23d67628b0a30f510c944d69'
         '6c517b62529e4d8890753922c1fa25f1'
         '8bddb4b9711be51b6324d81ed30c2115'
         'b10131dfd139a064c88e4e368ebcce68'
         '5142f457be7d5bd61db47217195e8d43')
sha1sums=('c4e34df6960579a65e2a9269d48df8c4f01e1386'
          '6dea4739c49700262a1b3edf670e6777f3fdb645'
          '374426626729f302af503ef4efafb2badebf2b96'
          '3d88416c215824cc4b24c808f6ed7de49eb3c983'
          '200df748a97c9535fd854245dd5548c530cbd093')
sha256sums=('00c19e27981dd0d6e9235d588a6e913d569157879b150da1f596682f5e525cae'
            '62ed4460cd2ed4b400193ad04b0cccb76d7558f87c377a0033041841a73f7945'
            '149c6448a5630af1065ea230707331ac12663128568d6cf0e9d5480e94d1d104'
            'a498fa343be043ffcf7cc183e4743427a19bae819772743c13f7c6fa0eb0009b'
            '1d225535e59ca1f24e941e34589e11613a0ab107d1586090752309cb274e759e')

build() {
    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"
    export GOFLAGS="-buildmode=pie -trimpath -mod=readonly -modcacherw"

    cd "${_pkgname}-${pkgver}/"
    go build -trimpath -ldflags "-X github.com/Dreamacro/clash/constant.Version=${pkgver}" -mod=readonly
}

check() {
    cd "${_pkgname}-${pkgver}/"
    go test github.com/Dreamacro/clash/...
}

package() {
    cd "${_pkgname}-${pkgver}/"
    install -Dm 755 clash -t "${pkgdir}"/usr/bin/
    install -Dm 644 LICENSE -t "${pkgdir}"/usr/share/licenses/clash/
    install -Dm 644 "${srcdir}"/config.yaml -t "${pkgdir}"/etc/clash/
    install -Dm 644 "${srcdir}"/clash.sysusers -t "${pkgdir}"/usr/lib/sysusers.d/
    install -Dm 644 "${srcdir}"/clash.service -t "${pkgdir}"/usr/lib/systemd/system/
    install -Dm 644 "${srcdir}"/clash@.service -t "${pkgdir}"/usr/lib/systemd/system/
}
