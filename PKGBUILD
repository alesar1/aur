# Maintainer: Emre Hasegeli emre<at>hasegeli<dot>com
# Contributor: Mikhail felixoid Shiryaev mr<dot>felixoid<at>gmail<dot>com

_name=adminapi
pkgbase="python-${_name}-git"
pkgname=("python-${_name}-git" "python2-${_name}-git")
pkgver=1.2.r1849.381b8b4
pkgrel=1
pkgdesc='Adminapi is a python module which can be used to talk to the open source serveradmin project by Innogames'
arch=('any')
url="https://github.com/InnoGames/serveradmin"
makedepends=('python-setuptools' 'python2-setuptools')
license=('MIT')
source=("${_name}::git+${url}.git")
sha1sums=('SKIP')

pkgver() {
	cd "${_name}"
	_version=$(python setup.py -V)
	( set -o pipefail
		git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "%s.r%s.%s" "${_version}" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

package_python2-adminapi-git() {
	depends=('python2' 'python2-ipaddress' 'python2-netaddr')
	cd "${srcdir}/${_name}"
	python2 setup.py install --root="${pkgdir}" --optimize=1
	mv "${pkgdir}/usr/bin/${_name}"  "${pkgdir}/usr/bin/${_name}2"
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/"LICENSE
}

package_python-adminapi-git() {
	depends=('python' 'python-ipaddress' 'python-netaddr')
	cd "${srcdir}/${_name}"
	python setup.py install --root="${pkgdir}" --optimize=1
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/"LICENSE
}
