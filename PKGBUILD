pkgname=dnf
pkgver=3.1.0
pkgrel=1
pkgdesc="Package manager forked from Yum, using libsolv as a dependency resolver"
arch=('any')
url="https://github.com/rpm-software-management/$pkgname"
license=('GPL2' 'GPL')
depends=('libdnf>=0.16.0' 'libcomps>=0.1.8' 'libmodulemd>=1.4.0'
         'librepo>=1.9.0'
         'python' 'python-gobject' 'python-gpgme' 'python-iniparse'
         'python-smartcols'
         'rpm-org')
makedepends=('bash-completion' 'cmake' 'python-sphinx')
checkdepends=('python-nose')
backup=("etc/$pkgname/automatic.conf"
        "etc/$pkgname/$pkgname.conf")
source=("$url/archive/$pkgver/$pkgname-$pkgver.tar.gz"
        "$pkgname-3.0.1-fallback-to-getuid-if-audit-is-disabled.patch")
md5sums=('09388161851c018569c2fa51bf7dd9f8'
         '51bbd2fd1ab2c11057c833adecb8b5fa')

prepare() {
	cd "$pkgname-$pkgver"
	rm -rf build
	mkdir build

	patch -p1 < "$srcdir/$pkgname-3.0.1-fallback-to-getuid-if-audit-is-disabled.patch"
}

build() {
	cd "$pkgname-$pkgver"/build
	cmake -DCMAKE_BUILD_TYPE=Release  \
	      -DCMAKE_INSTALL_PREFIX=/usr \
	      -DPYTHON_DESIRED=3          \
	      ..
	make
	make doc-man
}

# Tests seem to need a non-empty RPM database installed on the system
#check() {
#	cd "$pkgname-$pkgver"/build
#	make ARGS="-V" test
#}

package() {
	cd "$pkgname-$pkgver"/build
	make DESTDIR="$pkgdir/" install

	rm "$pkgdir/usr/share/man/man8/yum.8" \
	   "$pkgdir/usr/share/man/man5/yum.conf.5"
	ln -s $pkgname-3 "$pkgdir/usr/bin/$pkgname"
	ln -s $pkgname-automatic-3 "$pkgdir/usr/bin/$pkgname-automatic"

	install -Dp -m644 ../README.rst "$pkgdir/usr/share/doc/$pkgname/README.rst"
}

# vim: set ft=sh ts=4 sw=4 noet:
