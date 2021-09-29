# Maintainer: Abd El-Twab M. Fakhry <abdeltwab.m.fakhry@gmail.com>

pkgname=nxprayer
pkgver=0.1.1
pkgrel=1
epoch=1
pkgdesc="Islamic prayer reminder for your status bar or/and scripts."
arch=('x86_64')
url="https://github.com/AbdeltwabMF/nxprayer.git"
license=('GPL-v3')
depends=(
    'jq'
    'gawk'
    'bash'
    'libnotify'
)
makedepends=(
    'git'
    'make'
    'gcc'
    'python3'
)
provides=("${pkgname}")
conflicts=("${pkgname}")
source=("git+${url}")
sha1sums=('SKIP')

pkgver() {
    cd "${pkgname}"
    printf "%s.%s" "$(awk '/^VERSION =/ {print $3}' config.mk)" "$(git rev-list --count HEAD)"
}

build() {
	cd "${pkgname}"
	make DESTDIR="${pkgdir}"
}

package() {
	cd "${pkgname}"
	make DESTDIR="${pkgdir}" install
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
}
