# Maintainer: Stefan Auditor <stefan.auditor@erdfisch.de>

_pkgname='traefik'
pkgname="${_pkgname}-bin"
pkgver=1.4.4
pkgrel=1
pkgdesc='A modern reverse proxy'
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url='https://github.com/containous/traefik'
license=('MIT')
install="${_pkgname}.install"
backup=(
  'etc/traefik/traefik.toml'
  'etc/logrotate.d/traefik'
)
source=(
  'traefik.logrotate'
  'traefik.service'
  'traefik.toml'
  "https://raw.githubusercontent.com/containous/${_pkgname}/v${pkgver}/LICENSE.md"
)
source_i686=("${_pkgname}_i686_${pkgver}"::"https://github.com/containous/${_pkgname}/releases/download/v${pkgver}/${_pkgname}_linux-386")
source_x86_64=("${_pkgname}_x86_64_${pkgver}"::"https://github.com/containous/${_pkgname}/releases/download/v${pkgver}/${_pkgname}_linux-amd64")
source_armv6h=("${_pkgname}_armv6h_${pkgver}"::"https://github.com/containous/${_pkgname}/releases/download/v${pkgver}/${_pkgname}_linux-arm")
source_armv7h=("${_pkgname}_armv7h_${pkgver}"::"https://github.com/containous/${_pkgname}/releases/download/v${pkgver}/${_pkgname}_linux-arm")
source_aarch64=("${_pkgname}_aarch64_${pkgver}"::"https://github.com/containous/${_pkgname}/releases/download/v${pkgver}/${_pkgname}_linux-arm64")
sha512sums=('d1dfacff1e7a5b9f8e8b4796fcfbb9c1bed6151013708078361ac31ae221dd956f746ec1e0bc5bd09a05763438d877318259577f6f0178d42f011bd737c31207'
            '1ba00b19f691e173eb1d69d2a3e1bcb95370025de49baf4f8024c30579cb58c6296ed743959f261b4ada6731f1c810ebe4eb0e3481e7eb17a9f09596fa004986'
            '05de0378cd4c430084c122dfcbb433c9cf8dda912dee03a5c80d1e199b133ecc0b32f6e8ae985544dca89355e21c23c8c4d04c05e1d0a72f5bf135db7fc724d2'
            '5f61dc4f99314d659fbb9cbf3c665cd40ae76b3b2aea5bcb4409ceede088f9d6ed1ee83a2d460381b53ef3ee89a3e6be4fe8195f95b3001b6f9b63a5d92f6c32')
sha512sums_i686=('15b09dd46a4e5c177881de012843ad9462c049a9150bfd08c8184eb18250592c0fa8bf06aca72862a820de52a7943086bf03ccda5b1ae55e459b3d496ad0023e')
sha512sums_x86_64=('eb2a323efd0ae3379616adb482c1559b76c9ca43e580e31fbdfed8838b011f0f33d263c082b52c002d1b0b0582122ae04c6184bac74683fd1ddd77961325a843')
sha512sums_armv6h=('1fb839dce3b569b9fa329f5269c4125fc17bdb98fdca576b4e83b37e903c6553a377c31970ace2f6f63ede1bfa40e56d5d41dc820573588527b7f2eb3d05847a')
sha512sums_armv7h=('1fb839dce3b569b9fa329f5269c4125fc17bdb98fdca576b4e83b37e903c6553a377c31970ace2f6f63ede1bfa40e56d5d41dc820573588527b7f2eb3d05847a')
sha512sums_aarch64=('039141929db1a4f6c605c9a0adcdc519d3b12871c8e03246aa26b47331174991e53aa90abb995c9aa9429f407b88845281aef33819d192cb15807f58a230a354')

package() {
  install -d -m755 "${pkgdir}/var/log/traefik"

  install -D -m644 "${srcdir}/traefik.logrotate" "${pkgdir}/etc/logrotate.d/traefik"
  install -D -m644 "${srcdir}/traefik.service" "${pkgdir}/usr/lib/systemd/system/traefik.service"
  install -D -m644 "${srcdir}/traefik.toml" "${pkgdir}/etc/traefik/traefik.toml"

  install -D -m644 "${srcdir}/LICENSE.md" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -D -m755 "${srcdir}/${_pkgname}_${CARCH}_${pkgver}" "${pkgdir}/usr/bin/${_pkgname}"
}
