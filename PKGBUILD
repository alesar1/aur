# Maintainer: Matthias gatto <matthias.gatto@outscale.com>
# Reference: PKGBUILD(5)

pkgname=osc-tui-git
pkgver=0.1
pkgrel=1
pkgdesc='Outscale Text User Interface'

arch=('any')
url='https://github.com/outscale-dev/osc-tui'
license=(BSD)

makedepends=('python-setuptools')
# sadly we need git version of npyscreen, because stable versions tend to break with new pythons
depends=(osc-sdk-python python-pyperclip autopep8 python-npyscreen-git)

#so for now I need some patch so I've used my fork, but not for long
source=("git://github.com/outscale-mgo/osc-tui.git")
sha256sums=("SKIP")

build() {
	cd "${srcdir}/osc-tui"
	python ./setup.py build
}

package() {
	cd "${srcdir}/osc-tui"
	python  ./setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
