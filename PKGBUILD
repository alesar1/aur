# Maintainer: Celogeek <arch-aur-f5d67e@celogeek.com>

_basename=jitsi-meet
_pkgname=turnserver
_tag=4628
_version=1.0.4628

pkgname=${_basename}-${_pkgname}
pkgver=${_version}
pkgrel=2
pkgdesc="Jitsi Meet Prosody Plugins"
arch=('any')
url="https://jitsi.org/jitsi-meet/"
license=('Apache')
depends=()
optdepends=("coturn")
makedepends=(
)
options=('!strip')
backup=(
)
source=(
        "$pkgname::git+https://github.com/jitsi/jitsi-meet#tag=${_tag}"
)

package() {
	cd "$srcdir/$pkgname"
	install -Dm644 -t "${pkgdir}/usr/share/doc/${pkgname}" doc/debian/jitsi-meet-turn/turnserver.conf doc/debian/jitsi-meet/jitsi-meet.conf doc/debian/jitsi-meet-turn/coturn-certbot-deploy.sh
}
sha256sums=('SKIP')
