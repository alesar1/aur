# Maintainer: Bruno Santos <brunomanuelsantos@tecnico.ulisboa.pt>

upstream_name=hawkmoth
aur_name=python-sphinx-hawkmoth
pkgname=$aur_name-git
pkgver=0.7.0.0r.g69cde0b
pkgrel=1
pkgdesc='Sphinx autodoc C extension'
arch=('i686' 'x86_64')
url='https://github.com/jnikula/hawkmoth'
license=('BSD2')
depends=('python-sphinx' 'clang')
provides=($aur_name)
conflicts=($aur_name)
source=('git+https://github.com/jnikula/hawkmoth')
md5sums=('SKIP')

pkgver() {
	cd "$upstream_name"
	git describe --long | sed 's/v\(.*\)\([^-]*-g\)/\1r\2/;s/-/./g'
}

package() {
	install -D -m644 $srcdir/$upstream_name/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	cd $srcdir/$upstream_name
	python setup.py install --optimize=1 --root=$pkgdir
}
