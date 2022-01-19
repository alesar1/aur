# Maintainer: Gabe Banks <gabriel.t.banks@gmail.com>
pkgname='tstock'
pkgver=2.0.1
pkgrel=1
pkgdesc="A command line tool to view stock charts in the terminal."
arch=('x86_64')
url="https://github.com/Gbox4/tstock"
license=('GPL')
depends=('python')
makedepends=('python-setuptools' 'git')
provides=('tstock')
source=("git+$url")
md5sums=('SKIP')

package() {
	cd "$pkgname"
	python setup.py install --root="$pkgdir/" --optimize=1
}
