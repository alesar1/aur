# Maintainer: Tony Lambiris <tony@criticalstack.com>

pkgname=gnome-shell-extension-caffeine-plus-git
pkgver=r181.83b4ad0
pkgrel=2
pkgdesc="Disable screensaver and auto suspend"
arch=('any')
url="https://github.com/qunxyz/gnome-shell-extension-caffeine"
install=caffeine-plus.install
license=('GPL3')
depends=('gnome-shell')
makedepends=('git')
source=("${pkgname}::git+https://github.com/qunxyz/gnome-shell-extension-caffeine.git"
		"add-gnome-3.32-support.patch")
sha256sums=('SKIP'
            '878673dc9bd181cbd93312709eb62753a13c76ab9729cad752f8bc49467fbe8a')

pkgver() {
	cd "${pkgname}"

	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "${pkgname}"

	patch -Np1 < "${srcdir}/add-gnome-3.32-support.patch"
}

build() {
	cd "${pkgname}"

	/bin/bash -ex ./build.sh
}

package() {
	cd "${pkgname}"

	install -dm755 "${pkgdir}/usr/share/gnome-shell/extensions"
	cp -a "caffeine-plus@patapon.info" "${pkgdir}/usr/share/gnome-shell/extensions"
}
