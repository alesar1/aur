# Maintainer: Celogeek <arch-aur-f5d67e@celogeek.com>

_pkgname=fluffychat
pkgname=fluffychat-web-bin
pkgver=1.3.0
pkgrel=1
pkgdesc="Chat with your friends"
arch=('any')
url="https://fluffychat.im/"
license=('AGPL3')
makedepends=()
optdepends=()
provides=("fluffychat-web")
conflicts=("fluffychat-web")
source=(
  "fluffychat-web-${pkgver}.tar.gz::https://gitlab.com/api/v4/projects/16112282/packages/generic/fluffychat/${pkgver}/fluffychat-web.tar.gz"
  "config-${pkgver}.sample.json::https://gitlab.com/famedly/fluffychat/-/raw/v${pkgver}/config.sample.json"
)
noextract=(
    "fluffychat-web-${pkgver}.tar.gz"
)
sha256sums=('e0edb5a4e107b173f198f3dc3e39db69eb36f49edeaa3bc2b18f3b349264364e'
            'c17a181d58527d4cc23bcf5534d61add1abc0da542ee22080d5bd6242c4c12d7')
backup=(
    "etc/webapps/${_pkgname}/config.json"
)

package() {  
  install -dm755 ${pkgdir}/usr/share/webapps/${_pkgname}
  tar xzf "fluffychat-web-${pkgver}.tar.gz" -C ${pkgdir}/usr/share/webapps/${_pkgname}
  install -Dm644 "config-${pkgver}.sample.json" ${pkgdir}/etc/webapps/${_pkgname}/config.json
  ln -s /etc/webapps/${_pkgname}/config.json ${pkgdir}/usr/share/webapps/${_pkgname}
  sed -i '/base href=/d' ${pkgdir}/usr/share/webapps/${_pkgname}/index.html
}

# vim: set sw=2 ts=2 et:
