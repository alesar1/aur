# Maintainer: Pierre Neidhardt <ambrevar@gmail.com>

_pkgname=guess-style
pkgname=emacs-$_pkgname
pkgver=0.1
pkgrel=4
pkgdesc="Automatic setting of code style variables"
arch=("any")
url="http://nschum.de/src/emacs/guess-style/"
license=("GPL3")
makedepends=("emacs")
optdepends=("emacs")
install="$pkgname.install"
source=("https://github.com/nschum/guess-style/archive/master.zip")
md5sums=("SKIP")

build () {
	cd "$srcdir/$_pkgname-master"
	emacs --batch --no-site-file -f batch-byte-compile "$_pkgname.el"
}

package() {
	cd "$srcdir/$_pkgname-master"
	install -dm755 "$pkgdir/usr/share/emacs/site-lisp/"
	cp *.el{c,} "$pkgdir/usr/share/emacs/site-lisp/"
}
