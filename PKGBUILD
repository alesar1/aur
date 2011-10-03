# Contributor: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=sqlantaresia-git
pkgver=20111003
pkgrel=1
pkgdesc="SQL Antaresia is a MySQL administrative tool aimed at developers and sysadmins"
arch=(any)
url="https://github.com/mtorromeo/sqlantaresia"
license=('MIT')
depends=('python2-qt' 'python2-setproctitle' 'mysql-python' 'python2-dbutils' 'python2-qscintilla')
makedepends=('python2-distribute' 'git')
optdepends=('python-paramiko: for automatic ssh tunnelling' 'pycrypto: for automatic ssh tunnelling')
source=(sqlantaresia.desktop)

_gitroot="git://github.com/mtorromeo/sqlantaresia.git"
_gitname="sqlantaresia"

build() {
	cd "$srcdir"

	msg "Connecting to GIT server...."

	if [ -d $srcdir/$_gitname ]; then
		cd $_gitname && git pull origin
		msg "The local files are updated."
	else
		git clone --depth=0 $_gitroot $_gitname
	fi

	msg "GIT checkout done or server timeout"

	rm -rf "$srcdir/$_gitname-build"
	cp -r "$srcdir/$_gitname" "$srcdir/$_gitname-build"
	cd "$srcdir/$_gitname-build/"
	rm -rf .git .gitmodules
	find . -type f -name .gitignore -delete

	sh build.sh
	python2 setup.py install --root="$pkgdir"
	install -m0644 -D "$srcdir/sqlantaresia.desktop" "$pkgdir/usr/share/applications/sqlantaresia.desktop"
	install -D LICENSE "$pkgdir/usr/share/licenses/sqlantaresia/COPYING"
}

md5sums=('e943216b91352debf3a13fe8834701d5')
