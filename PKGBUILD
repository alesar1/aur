# Maintainer: Derek J. Clark <derekjohn dot clark at gmail dot com>
pkgname=steam-removable-media-git
_gitdir=steam-removable-media
pkgver=22.11.r20.5e55744
pkgrel=1
pkgdesc="Automounts and imports removable media as a Steam library"
arch=('any')
url="https://github.com/ShadowBlip/steam-removable-media"
license=('GPL')
groups=()
depends=('parted')
optdepends=()
makedepends=('git')
_tag=5e557443ca6634ed5c5fd32ecf63ae4cf122c9ff
source=("${_gitdir}::git+https://github.com/ShadowBlip/${_gitdir}.git#tag=${_tag}")
sha256sums=('SKIP')
pkgver() {
	cd "$srcdir/${_gitdir}"
	printf "%s.r%s.%s" $(date '+%y.%m') "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
package() {
	cd "$srcdir/${_gitdir}"
	mkdir -p ${pkgdir}/etc/udev/rules.d	
	mkdir -p ${pkgdir}/etc/systemd/system
	mkdir -p ${pkgdir}/usr/lib/media-support
	install -m 644 10-media-mount.rules ${pkgdir}/etc/udev/rules.d/10-media-mount.rules
	install -m 644 99-media-mount.rules ${pkgdir}/etc/udev/rules.d/99-media-mount.rules
	install -m 644 "media-mount@.service" "${pkgdir}/etc/systemd/system/media-mount@.service"
	install -m 744 media-support/* ${pkgdir}/usr/lib/media-support

}
