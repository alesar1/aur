# Maintainer: Celogeek <arch-aur-f5d67e@celogeek.com>

_pkgname=fluffychat
pkgname=fluffychat-web
pkgver=1.1.0
pkgrel=2
pkgdesc="Chat with your friends"
arch=('any')
url="https://fluffychat.im/"
license=('AGPL3')
makedepends=('clang'
             'ninja'
             'cmake'
             'unzip'
    )
optdepends=('pantalaimon: used for E2E encryption')
provides=("$pkgname")
conflicts=("$pkgname")
source=(
    "fluffychat-v${pkgver}.tar.gz::https://gitlab.com/famedly/fluffychat/-/archive/v${pkgver}/fluffychat-v${pkgver}.tar.gz"
)
sha256sums=('92c4ae1a8a329e1139b95947ca8fb3e6a48435066f9aed9ca48a9ed84caddbbf')
backup=(
    "etc/webapps/${_pkgname}/config.json"
)

prepare() {
  export PATH="${srcdir}/flutter/bin:$PATH"
  [ -d "${srcdir}/flutter" ] || cp -pR --reflink=auto /opt/flutter "${srcdir}/flutter"
  cd "fluffychat-v${pkgver}"
  ./scripts/prepare-web.sh
}

build() {
  export PATH="${srcdir}/flutter/bin:$PATH"
  cd "fluffychat-v${pkgver}"
  ./scripts/build-web.sh
}

package() {  
  cd "fluffychat-v${pkgver}"

  install -dm755 ${pkgdir}/usr/share/webapps
  mv build/web ${pkgdir}/usr/share/webapps/${_pkgname}
  install -Dm644 config.sample.json ${pkgdir}/etc/webapps/${_pkgname}/config.json
  ln -s /etc/webapps/${_pkgname}/config.json ${pkgdir}/usr/share/webapps/${_pkgname}
  sed -i '/base href=/d' ${pkgdir}/usr/share/webapps/${_pkgname}/index.html
}

# vim: set sw=2 ts=2 et:
