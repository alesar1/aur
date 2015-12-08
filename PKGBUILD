# Maintainer: vorpalblade77@gmail.com
pkgname=python-steamcontroller-git
_pkgname=steamcontroller
pkgver=054e35d
pkgrel=1
pkgdesc="Standalone userland driver for the Steam controller"
arch=('i686' 'x86_64')
url="https://github.com/ynsta/${_pkgname}"
license=('MIT')
makedepends=('python-distutils-extra')
depends=('python-libusb1')
optdepends=('python-pyside: Required for sc-gyro-plot.py'
	'python-pyqtgraph: Required for sc-gyro-plot.py'
	'steamcontroller-udev: udev rules for the controller'
	'steam: udev rules for the controller')
provides=('steamcontroller')
conflicts=("${_pkgname}")
changelog=('changelog.txt')
source=("git+https://github.com/ynsta/${_pkgname}.git")
sha256sums=('SKIP')
install='steamcontroller.install'

pkgver() {
	cd "${srcdir}/${_pkgname}"
	git describe --always | sed -E 's/([^-]*-g)/r\1/;s/-/./g'
}

build() {
	cd "${srcdir}/${_pkgname}"
	python setup.py build
}

package() {
	#install -m755 -d "${pkgdir}/usr/lib/udev/rules.d"
	#install -Dm 644 "99-steamcontroller.rules" "${pkgdir}/usr/lib/udev/rules.d/99-steamcontroller.rules"
	cd "${srcdir}/${_pkgname}"
	python setup.py install --root="${pkgdir}" \
	--prefix="/usr" \
	--compile -O1
	install -D LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
