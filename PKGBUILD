pkgname=pgroonga
pkgver=1.0.7
pkgrel=1
pkgdesc="Fast fulltext search on PostgreSQL."
arch=('i686' 'x86_64' 'armv7h')
url="https://github.com/pgroonga/pgroonga"
license=('PostgreSQL')
source=("http://packages.groonga.org/source/pgroonga/$pkgname-$pkgver.tar.gz")
depends=('groonga' 'postgresql' 'mecab' 'mecab-ipadic')

build() {
	cd $srcdir/$pkgname-$pkgver
	make
}

package() {
	cd $srcdir/$pkgname-$pkgver
	make DESTDIR="$pkgdir" install

	echo "-------------------------------------------------------------"
	echo "After install this package,"
        echo "please execute following commands to make fully installation."
	echo "-------------------------------------------------------------"
	echo "sudo -u postgres -H psql --command 'CREATE DATABASE pgroonga_test'"
	echo "sudo -u postgres -H psql -d pgroonga_test --command 'CREATE EXTENSION pgroonga'"
	echo "-------------------------------------------------------------"
	echo "*************************************************************"
	echo "You need to upgrade EXTENSION pgroonga CASCADE, "
	echo "In more detail, please refer to the PGroonga site's upgrading instructions:"
	echo "http://pgroonga.github.io/upgrade/"

}
sha1sums=('8a70103ad9deeea7dc92e31cb6d094bc95d07008')
