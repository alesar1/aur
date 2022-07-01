# Maintainer: suienzan <suienzan at gmail dot com>
_pkgname=mosdns
pkgname=${_pkgname}-bin
pkgver=4.1.4
pkgrel=1
pkgdesc="Plug-in configured DNS forwarder/server"
arch=('x86_64')
url="https://github.com/IrineSistiana/mosdns/"
license=('GPL3')
optdepends=('v2ray-domain-list-community: geosite.dat'
            'v2ray-geoip: geoip.dat'
            'v2ray-rules-dat-git: geosite.dat & geoip.dat')
backup=('etc/mosdns/config.yaml')
provides=('mosdns')
conflicts=('mosdns' 'mosdns-git')
source=("$pkgname-$pkgver.zip::https://github.com/IrineSistiana/mosdns/releases/download/v${pkgver}/mosdns-linux-amd64.zip" "service" "config.yaml")
sha256sums=('6d201ca66c2bb2d39fa1fad5a9d5cf5b89491f7e8cb0f412d557d529b0fdc383'
            'b85dd6e5522e558bb1282734bbb684ceee019047d7597bdbde4dc07a8d59317e'
            '5ff706ed3d6e5e8624e6f8b276ed1e476be8ebc4747043e63999c8a9f9324ea8')

package() {
  install -Dm755 mosdns "$pkgdir"/usr/bin/mosdns
  install -Dm644 service "$pkgdir"/usr/lib/systemd/system/mosdns.service
  install -Dm644 config.yaml "$pkgdir"/etc/mosdns/config.yaml
}
