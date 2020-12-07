# Maintainer: Jesús Espino <jespinog@gmail.com>

pkgname=mmctl
pkgver=v5.30.0
pkgrel=1
pkgdesc="A remote CLI tool for Mattermost"
arch=('x86_64')
url="https://github.com/mattermost/mmctl"
options=('!strip')
license=('Apache')
depends=('gcc-libs')
makedepends=('go')
source=("$pkgname-$pkgver.tar.gz::https://github.com/mattermost/$pkgname/archive/$pkgver.tar.gz")
sha256sums=('0e391de1a15b574d0ec2f7167b94c155f8ebaf249d5c8a30e64365cb8a85a575')

build() {
  echo "${srcdir}"/${pkgname}-${pkgver:1}
  cd "${srcdir}"/${pkgname}-${pkgver:1}
  # Respect LDFLAGS
	go mod vendor
	go mod tidy
  EXTLDFLAGS=${LDFLAGS}
  LDFLAGS="-X \"github.com/mattermost/mmctl/commands.BuildHash=release-source-build\""
  CACHE="${srcdir}/cache" go build -trimpath -ldflags "-linkmode external -extldflags '${EXTLDFLAGS}' -s -w ${LDFLAGS}" -mod=vendor
}

package() {
  install -Dm755 "${srcdir}/${pkgname}-${pkgver:1}/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver:1}"/LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim: ts=2 sw=2 et:

