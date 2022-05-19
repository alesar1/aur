# Maintainer: Hiroshi Hatake <cosmo0920.wp[at]gmail.com>

pkgname=mroonga
pkgver=12.03
pkgrel=1
pkgdesc="Fast fulltext search on MySQL(MariaDB bundled Mroonga package)."
mariadbver=10.6.7
MYSQL_VERSION=mariadb-${mariadbver}
arch=('i686' 'x86_64')
url="http://mroonga.org/"
license=('LGPL2.1')
provides=("mysql-clients=$mariadbver" "mysql=$mariadbver" "libmysqlclient=$mariadbver")
source=(http://packages.groonga.org/source/mroonga/mroonga-$pkgver.tar.gz
        https://downloads.mariadb.org/f/${MYSQL_VERSION}/source/${MYSQL_VERSION}.tar.gz
        mariadb.service
        mariadb-post.sh
        mariadb-tmpfile.conf)
makedepends=('cmake' 'openssl' 'systemd' 'zlib' 'zstd' 'libaio' 'libxml2' 'pcre' 'jemalloc' 'lz4' 'boost' 'snappy')
conflicts=('libmariadbclient' 'mariadb-clients' 'mytop' 'mariadb' 'mysql' 'libmysqlclient' 'mysql-clients')
depends=('perl' 'inetutils' 'libaio' 'libxml2' 'pcre' 'groonga' 'groonga-normalizer-mysql')
optdepends=('cutter-test_framework' 'ruby' 'snowball-c')

prepare() {
    cd $srcdir/mariadb-$mariadbver
    rm -rf storage/mroonga
    cd $srcdir
    mkdir -p $srcdir/mariadb-$mariadbver/storage/mroonga
    mv $srcdir/mroonga-${pkgver}/* $srcdir/mariadb-$mariadbver/storage/mroonga
}

build() {
    cd $srcdir/mariadb-$mariadbver

    local _cmake_options=(
        # build options
        -DCOMPILATION_COMMENT="Mroonga on AUR"
        -DCMAKE_BUILD_TYPE=RelWithDebInfo
        -Wno-dev

        # file paths
        # /etc
        -DINSTALL_SYSCONFDIR=/etc
        -DINSTALL_SYSCONF2DIR=/etc/my.cnf.d
        # /run
        -DINSTALL_UNIX_ADDRDIR=/run/mysqld/mysqld.sock
        # /usr
        -DCMAKE_INSTALL_PREFIX=/usr
        # /usr/bin /usr/include
        -DINSTALL_SCRIPTDIR=bin
        -DINSTALL_INCLUDEDIR=include/mysql
        # /usr/lib
        -DINSTALL_PLUGINDIR=lib/mysql/plugin
        -DINSTALL_SYSTEMD_UNITDIR=/usr/lib/systemd/system/
        -DINSTALL_SYSTEMD_SYSUSERSDIR=/usr/lib/sysusers.d/
        -DINSTALL_SYSTEMD_TMPFILESDIR=/usr/lib/tmpfiles.d/
        # /usr/share
        -DINSTALL_SHAREDIR=share
        -DINSTALL_SUPPORTFILESDIR=share/mysql
        -DINSTALL_MYSQLSHAREDIR=share/mysql
        -DINSTALL_DOCREADMEDIR=share/doc/mariadb
        -DINSTALL_DOCDIR=share/doc/mariadb
        -DINSTALL_MANDIR=share/man
        # /var
        -DMYSQL_DATADIR=/var/lib/mysql

        # default settings
        -DDEFAULT_CHARSET=utf8mb4
        -DDEFAULT_COLLATION=utf8mb4_unicode_ci

        # features
        -DENABLED_LOCAL_INFILE=ON
        -DPLUGIN_EXAMPLE=NO
        -DPLUGIN_FEDERATED=NO
        -DPLUGIN_FEEDBACK=NO
        -DWITH_EMBEDDED_SERVER=ON
        -DWITH_EXTRA_CHARSETS=complex
        -DWITH_JEMALLOC=ON
        -DWITH_LIBWRAP=OFF
        -DWITH_PCRE=bundled
        -DWITH_READLINE=ON
        -DWITH_SSL=system
        -DWITH_SYSTEMD=yes
        -DWITH_UNIT_TESTS=OFF
        -DWITH_ZLIB=system
    )
    cmake . "${_cmake_options[@]}"

    make
}

package() {
    backup=('etc/mysql/my.cnf')
    install=mariadb.install
    cd $srcdir/mariadb-$mariadbver

    install -D -m0644 support-files/mariadb.pc "$pkgdir"/usr/share/pkgconfig/mariadb.pc
    install -D -m0644 support-files/mysql.m4 "$pkgdir"/usr/share/aclocal/mysql.m4

    make DESTDIR="$pkgdir" install

    # not needed for using Mroonga just for testing.
    rm -r "$pkgdir"/usr/{mysql-test,sql-bench}
    rm "$pkgdir"/usr/share/man/man1/mysql-test-run.pl.1

    install -Dm755 ../mariadb-post.sh "$pkgdir"/usr/bin/mysqld-post
    install -Dm644 ../mariadb.service "$pkgdir"/usr/lib/systemd/system/mysqld.service
    install -Dm644 ../mariadb-tmpfile.conf "$pkgdir"/usr/lib/tmpfiles.d/mysql.conf
}
sha1sums=('5fd3502ba50af64b7d9138f36fa857c0bd9d5723'
          'da4b3b12097f25016decdc2555cf2682dc4bc834'
          '4bc34244fc4b578c155c8cd569d952a97a476f10'
          '206e9f7ba5357027becc2491e0987442f684d63e'
          'c2a86c745002923234f9d6d79b3b462d5ab55e8d')
sha256sums=('7f3ec8801e81995ed81877622035b07b35aa64bcf1fab5296b88d6390411e407'
            '738a9d5391c6666e78c21f5c9ae90ac7e4477defa0e171a47f0f559a12d73429'
            '2c60dfdc866078a8402d6e18d538e6a1deaa70e1b2410bee5eb209a314d7daa7'
            '368f9fd2454d80eb32abb8f29f703d1cf9553353fb9e1ae4529c4b851cb8c5dd'
            '2af318c52ae0fe5428e8a9245d1b0fc3bc5ce153842d1563329ceb1edfa83ddd')
