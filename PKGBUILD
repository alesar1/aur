# Maintainer: Felipe Martin <me@fmartingr.com>

pkgname="jrnl-venv-bin"
pkgver="2.0.0"
pkgrel="1"
<<<<<<< HEAD
pkgdesc="Collect your thoughts and notes without leaving the command line."
=======
pkgdesc="Collect your thoughts and notes without leaving the command line. [installed inside a virtualenv]"
>>>>>>> 2.0.0-1
arch=('i686' 'x86_64')
url="https://jrnl.sh/"
license=('MIT')
depends=('python' 'python-virtualenv' 'python-pip')
optdepends=('')
conflicts=('')
source=()
md5sums=()


prepare() {
	mkdir -p "$srcdir/jrnl-venv-bin"
	cd "$srcdir/jrnl-venv-bin" || exit
	python3 -m venv venv
	source venv/bin/activate
	pip install jrnl
}

package() {
	mkdir "$pkgdir/opt"
	cp -r "$srcdir/jrnl-venv-bin" "$pkgdir/opt/jrnl-venv-bin"
	cd "$pkgdir/" || exit
	mkdir -p usr/local/bin
	ln -s "$prgdir/opt/jrnl-venv-bin/venv/bin/jrnl" "$pkgdir/usr/local/bin/jrnl"
}
