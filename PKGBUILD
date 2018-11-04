# Maintainer: Alexandria <alxpettit@gmail.com>

_pkgname=vim-fish
pkgname=${_pkgname}-git
pkgver=1
pkgrel=1
pkgdesc='VIM runtime files for FISH stuff'
url='https://github.com/dag/vim-fish'
arch=('any')
license=('custom:MIT')
makedepends=('git')
source=("${_pkgname}::git+https://github.com/dag/${_pkgname}.git")
sha1sums=('SKIP')

provides=("${_pkgname}")
conflicts=("${_pkgname}")

pkgver() {
	cd "${srcdir}/${_pkgname}"
	git log -1 --format='%cd.%h' --date=short | tr -d -
}

package() {
	cd "${srcdir}/${_pkgname}"
        rm .git -rf
        mkdir -p "${pkgdir}/usr/share/vim/vim81"
	cp -av . "${pkgdir}/usr/share/vim/vim81"
}
