# Maintainer: suienzan <suienzan at gmail dot com>
_pkgname=mosdns
pkgname=${_pkgname}-bin
pkgver=1.8.0
pkgrel=2
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
source=("$pkgname-$pkgver.zip::https://github.com/IrineSistiana/mosdns/releases/download/v${pkgver}/mosdns-linux-amd64.zip")
sha256sums=('0adffff63544b87fef15689f482cd53c85848084498ef33ffc4d2da29b153975')

package() {
  install -Dm755 mosdns "$pkgdir"/usr/bin/mosdns
  install -Dm644 ../service "$pkgdir"/usr/lib/systemd/system/mosdns.service
  install -Dm644 ../config.yaml "$pkgdir"/etc/mosdns/config.yaml
}
