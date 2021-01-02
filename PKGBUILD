_npmname=gamecomp
_npmscope=@camoto
pkgname=${_npmname}js # All lowercase
pkgver=latest
pkgrel=1
pkgdesc="Apply and remove compression and encryption algorithms used by DOS games"
arch=(any)
url="http://github.com/Malvineous/gamecompjs"
license=()
depends=('nodejs' )
makedepends=('npm')
optdepends=()

pkgver() {
	# Grab the latest version from npmjs.org
	npm view @camoto/gamecomp@latest version
}

package() {
	npm install -g --user root --prefix "${pkgdir}/usr" "${_npmscope}/${_npmname}@${pkgver}"

	# Non-deterministic race in npm gives 777 permissions to random directories.
	# See https://github.com/npm/cli/issues/1103 for details.
	find "${pkgdir}/usr" -type d -exec chmod 755 {} +

	# npm gives ownership of ALL FILES to build user
	# https://bugs.archlinux.org/task/63396
	chown -R root:root "${pkgdir}"

	# Remove references to srcdir/pkgdir
	find "$pkgdir" -name package.json -print0 | xargs -r -0 sed -i '/_where/d'
}
