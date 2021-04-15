# Maintainer: Vasiliy Bukharev <bvp-yar@ya.ru>

pkgname=consul-bin
pkgver=1.9.4
pkgrel=1
pkgdesc='A tool for service discovery, monitoring and configuration.'
#arch=('i686')
#arch=('x86_64')
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://www.consul.io"
license=('MPL')
depends=('glibc')
provides=('consul')
source=('consul.service')
source_i686=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_386.zip")
source_x86_64=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_amd64.zip")
source_arm=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_armelv5.zip")
source_armv6h=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_armhfv6.zip")
source_armv7h=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_armhfv6.zip")
source_aarch64=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_arm64.zip")

sha256sums=('cace20b6db0643a4d10f6f14ab7ba23d047376aae48460b48fd265cb3eebc13c')
sha256sums_i686=('b833b80485a56b45aa13d05c214f88e07cace505136a0736e6f07026010d158a')
sha256sums_x86_64=('da3919197ef33c4205bb7df3cc5992ccaae01d46753a72fe029778d7f52fb610')
sha256sums_arm=('5046b29a03c65df4cd773938af478bd42c7e038c6f5e38f9c3de7e6aab514bb5')
sha256sums_armv6h=('a074e2f11e2d5a82fe699fa09796767983bf8d349eab65bf99df8abccf6fd244')
sha256sums_armv7h=('a074e2f11e2d5a82fe699fa09796767983bf8d349eab65bf99df8abccf6fd244')
sha256sums_aarch64=('012c552aff502f907416c9a119d2dfed88b92e981f9b160eb4fe292676afdaeb')
options=('!strip')

package() {
  install -Dm755 consul "$pkgdir"/usr/bin/consul
  install -Dm644 consul.service "$pkgdir"/usr/lib/systemd/system/consul.service
  install -d "$pkgdir"/etc/consul.d
}
