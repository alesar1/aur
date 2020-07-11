# Maintainer: HLFH <arch@dhautefeuille.eu>

_pkgname=archey3
pkgname=${_pkgname}-git
pkgver=172
pkgrel=1
pkgdesc="Python script to display system infomation alongside the Arch Linux logo."
arch=('any')
url="https://lclarkmichalek.github.io/archey3/"
license=('GPL')
depends=('python')
makedepends=('git' 'python-distribute')
optdepends=(
'python-mpd2: python libary for mpd interaction',
'python-logbook: for logging'
'imagemagick: for default screenshot command'
)
conflicts=('archey' 'archey3')
provides=('archey')
source=("git+https://github.com/bluepeppers/archey3.git")
sha256sums=('SKIP')

pkgver() {
	cd ${_pkgname}
    git rev-list --count HEAD
}

package() {
	cd "$_pkgname"
	python setup.py install --root=${pkgdir}
	install -D -m644 COPYING ${pkgdir}/usr/share/licenses/archey/COPYING
}
