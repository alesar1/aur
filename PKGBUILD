pkgname=dnf-plugins-core
pkgver=4.0.0
pkgrel=1
pkgdesc="Core DNF Plugins"
arch=('any')
url="https://github.com/rpm-software-management/$pkgname"
license=('GPL2')
depends=('dnf>=3.7.0' 'python')
makedepends=('cmake' 'python-sphinx')
checkdepends=('python-nose')
optdepends=('createrepo_c: for local plugin')
backup=('etc/dnf/plugins/copr.conf'
        'etc/dnf/plugins/debuginfo-install.conf'
        'etc/dnf/plugins/local.conf'
        'etc/dnf/plugins/versionlock.conf'
        'etc/dnf/plugins/versionlock.list')
options=(!emptydirs)
source=("$url/archive/$pkgver/$pkgname-$pkgver.tar.gz")
md5sums=('9f3ce79fc486c3393e084a7a4f21596d')

prepare() {
	cd "$pkgname-$pkgver"
	rm -rf build
	mkdir build
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

check() {
	cd "$pkgname-$pkgver"
	PYTHONPATH=./plugins nosetests -s tests
}

package() {
	cd "$pkgname-$pkgver"/build
	make DESTDIR="$pkgdir/" install

	# Conflict with yum-utils
	rm "$pkgdir/usr/share/man/man1/debuginfo-install.1" \
	   "$pkgdir/usr/share/man/man1/needs-restarting.1" \
	   "$pkgdir/usr/share/man/man1/package-cleanup.1" \
	   "$pkgdir/usr/share/man/man1/repo-graph.1" \
	   "$pkgdir/usr/share/man/man1/repoclosure.1" \
	   "$pkgdir/usr/share/man/man1/repomanage.1" \
	   "$pkgdir/usr/share/man/man1/reposync.1" \
	   "$pkgdir/usr/share/man/man1/yum-builddep.1" \
	   "$pkgdir/usr/share/man/man1/yum-config-manager.1" \
	   "$pkgdir/usr/share/man/man1/yum-debug-dump.1" \
	   "$pkgdir/usr/share/man/man1/yum-debug-restore.1" \
	   "$pkgdir/usr/share/man/man1/yumdownloader.1" \
	   "$pkgdir/usr/share/man/man5/yum-versionlock.conf.5" \
	   "$pkgdir/usr/share/man/man8/yum-copr.8" \
	   "$pkgdir/usr/share/man/man8/yum-versionlock.8"

	install -Dp -m644 ../README.rst "$pkgdir/usr/share/doc/$pkgname/README.rst"
}

# vim: set ft=sh ts=4 sw=4 noet:
