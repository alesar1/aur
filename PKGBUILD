# Maintainer: Marti Raudsepp <marti@juffo.org>
# Contributor: Douglas Soares de Andrade <douglas@archlinux.org>

pkgname=postgresql-testing
pkgver=9.1rc1
pkgrel=1
pkgdesc="Beta version of the PostgreSQL database (includes both server and libs)"
arch=(i686 x86_64)
license=('custom:PostgreSQL')
backup=('etc/conf.d/postgresql' 'etc/pam.d/postgresql')
url="http://www.postgresql.org/developer/alpha"
options=(!strip) # to facilitate debugging of testing builds
depends=('libxml2' 'readline>=6.0' 'openssl' 'bash')
makedepends=('python2' 'perl')
optdepends=('python2: PL/Python procedure support')
conflicts=('postgresql-libs' 'postgresql')
provides=("postgresql-libs=$pkgver" "postgresql=$pkgver")
source=(http://ftp.de.postgresql.org/packages/databases/PostgreSQL/source/v$pkgver/postgresql-$pkgver.tar.bz2
        postgresql.rc postgresql.confd postgresql.pam)

build() {
  cd $srcdir/postgresql-$pkgver

  ./configure --prefix=/usr --mandir=/usr/share/man --with-libxml \
	--with-openssl --with-perl \
	--with-python PYTHON=/usr/bin/python2 --with-pam \
	--with-system-tzdata=/usr/share/zoneinfo --enable-nls \
	--datadir=/usr/share/postgresql --enable-thread-safety

  make
  make DESTDIR=$pkgdir install

  # build all contrib modules
  make -C contrib
  make -C contrib DESTDIR=$pkgdir install

  install -D -m755 $srcdir/postgresql.rc $pkgdir/etc/rc.d/postgresql
  install -D -m644 COPYRIGHT $pkgdir/usr/share/licenses/$pkgname/LICENSE
  install -D -m644 $srcdir/postgresql.confd $pkgdir/etc/conf.d/postgresql
  install -D -m644 $srcdir/postgresql.pam $pkgdir/etc/pam.d/postgresql
}
md5sums=('0e1232bfb897b29a4ab35fd4dcdf2cb7'
         '86e0161343ce80e544aba999f284bc88'
         'df6ddf9e2ab4700a3415f17c0f4f4172'
         '96f82c38f3f540b53f3e5144900acf17')
