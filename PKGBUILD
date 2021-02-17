# Maintainer: Celogeek <arch-aur-f5d67e@celogeek.com>

_pkgname=fluffychat
pkgname=fluffychat-web-bin
_gitname=${_pkgname}
pkgver=0.27.0
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
  "artifact-${pkgver}.zip::https://gitlab.com/famedly/fluffychat/-/jobs/artifacts/v${pkgver}/download?job=build_web"
  "config.sample.json::https://gitlab.com/famedly/fluffychat/-/raw/v${pkgver}/config.sample.json"
)
sha256sums=('a63c84f526daeefbdce8b24be4b7fcb4cdeba377f6e1e2e388b91ee4c64ce9d9'
            '8540064556b3a952c898023e48afb29e3c560964d66e51bbc422a0061318bd5e')
backup=(
    "etc/webapps/${_pkgname}/config.json"
)

package() {  
  install -dm755 ${pkgdir}/usr/share/webapps
  mv build/web ${pkgdir}/usr/share/webapps/${_pkgname}
  install -Dm644 config.sample.json ${pkgdir}/etc/webapps/${_pkgname}/config.json
  ln -s /etc/webapps/${_pkgname}/config.json ${pkgdir}/usr/share/webapps/${_pkgname}
}

# vim: set sw=2 ts=2 et:
