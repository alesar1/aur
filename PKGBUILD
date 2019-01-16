# Maintainer: Clar Charr <clar@charr.xyz>

pkgname=miniflux
pkgver=2.0.14
pkgrel=2
pkgdesc='Minimalist Feed Reader'
arch=('x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url='https://miniflux.app'
license=('Apache')
depends=('postgresql')
makedepends=('go' 'godep' 'git')
conflicts=('miniflux-git')
backup=('etc/miniflux.conf')
source=(
  https://github.com/miniflux/miniflux/archive/${pkgver}.tar.gz
  miniflux.conf
  miniflux.service
  miniflux.sysusers
)
sha256sums=(
  'e0a47315c3c034241db7ca849f1a7aa80f59f6e5abe3f1e60e4332a882744e7a'
  '1247a3cfe0307f5f1bb070e616f57344d8f16201070ecf7dda243b3fa1fbd8b8'
  '2b3b50d9b50581a80e85e23011c8b5dd048247206083615f213d63b70f8f13be'
  'd1ce5acf1e633b04b92bf9330bd64d97c19d8f8d39c7bb4b64e11a96be4b73e2'
)

prepare() {
  mkdir -p "${srcdir}/src/github.com/miniflux"
  ln -s "${srcdir}/${pkgname}-${pkgver}" "${srcdir}/src/github.com/miniflux/${pkgname}"
}

case "$CARCH" in
  x86_64) _target=amd64 ;;
  i686) _target=x86 ;;
  arm) _target=arm5 ;;
  armv6h) _target=arm6 ;;
  armv7h) _target=arm7 ;;
  aarch64) _target=arm8 ;;
  *) return 1 ;;
esac

build() {
  cd ${srcdir}/${pkgname}-${pkgver}
  GOPATH="${srcdir}" PATH="${PATH}:${GOPATH}/bin/" make linux-$_target
}

package() {
  install -Dm644 "${srcdir}/miniflux.conf" "${pkgdir}/etc/miniflux.conf"
  install -Dm644 "${srcdir}/miniflux.service" "${pkgdir}/usr/lib/systemd/system/miniflux.service"
  install -Dm644 "${srcdir}/miniflux.sysusers" "${pkgdir}/usr/lib/sysusers.d/miniflux.conf"
  install -Dm755 "${srcdir}/${pkgname}-${pkgver}/miniflux-linux-${_target}" "${pkgdir}/usr/bin/miniflux"
}

