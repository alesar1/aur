# Maintainer: Vasiliy Bukharev <bvp-yar@ya.ru>

pkgname=consul-bin
pkgver=1.7.4
pkgrel=1
pkgdesc='A tool for service discovery, monitoring and configuration.'
#arch=('i686')
#arch=('x86_64')
arch=('i686' 'x86_64' 'arm' 'armv6h' 'aarch64')
url="https://www.consul.io"
license=('MPL')
depends=('glibc')
provides=('consul=1.7.1')
source=('consul.service')
source_i686=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_386.zip")
source_x86_64=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_amd64.zip")
source_arm=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_armelv5.zip")
source_armv6h=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_armhfv6.zip")
source_armv7h=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_armhfv6.zip")
source_aarch64=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_arm64.zip")

sha256sums=('cace20b6db0643a4d10f6f14ab7ba23d047376aae48460b48fd265cb3eebc13c')
sha256sums_i686=('46580180f788cb0e13eace9048c3bc68e7eefcaa78a9fdc9c7a6a0c0f8a7d775')
sha256sums_x86_64=('19aaacd53aeeb734b6070355960e96289cfe52f3996d8d2b91803fa8518d7203')
sha256sums_arm=('a219cacc0ee7a5df47dce82f6d0f45cf7944c04c94dea6b163e8209391da4b33')
sha256sums_armv6h=('b00f9dd11469c85c2720f0b1e374f9c0d6d3ca08d26df48a776f2ff30dd890bf')
sha256sums_aarch64=('cc712e99077bdaad5f0a320006e9d32bc3524150dcbd01122a3e4bc0a7148a7a')
options=('!strip')

package() {
  install -Dm755 consul "$pkgdir"/usr/bin/consul
  install -Dm644 consul.service "$pkgdir"/usr/lib/systemd/system/consul.service
  install -d "$pkgdir"/etc/consul.d
}
