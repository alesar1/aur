# Maintainer: Celogeek <arch-aur-f5d67e@celogeek.com>

_pkgname=fluffychat
pkgname=fluffychat-web-bin
pkgver=0.34.1
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
  "config.sample.json::https://gitlab.com/famedly/fluffychat/-/raw/v${pkgver}/config.sample.json"
)
noextract=(
    "fluffychat-web-${pkgver}.tar.gz"
)
sha256sums=('e8336057991cbe07ac6ccdd802fd4f1c52f996f1c13aeffdbd15a6f11317990a'
            '8540064556b3a952c898023e48afb29e3c560964d66e51bbc422a0061318bd5e')
backup=(
    "etc/webapps/${_pkgname}/config.json"
)

package() {  
  install -dm755 ${pkgdir}/usr/share/webapps/${_pkgname}
  tar xzf "fluffychat-web-${pkgver}.tar.gz" -C ${pkgdir}/usr/share/webapps/${_pkgname}
  install -Dm644 config.sample.json ${pkgdir}/etc/webapps/${_pkgname}/config.json
  ln -s /etc/webapps/${_pkgname}/config.json ${pkgdir}/usr/share/webapps/${_pkgname}
  sed -i '/base href=/d' ${pkgdir}/usr/share/webapps/${_pkgname}/index.html
}

# vim: set sw=2 ts=2 et:
