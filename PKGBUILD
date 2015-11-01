# Maintainer: Muflone http://www.muflone.com/contacts/english/
# Contributor: Rustam Tsurik <rustam.tsurik@gmail.com>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: Douglas Soares de Andrade <douglas@archlinux.org>

pkgname=('mysql56' 'libmysqlclient56' 'mysql-clients56')
_pkgname=mysql
pkgbase=mysql56
pkgver=5.6.27
pkgrel=1
pkgdesc="Fast SQL database server, community edition v5.6"
arch=('i686' 'x86_64')
makedepends=('openssl' 'zlib' 'cmake' 'systemd-tools' 'libaio' 'jemalloc')
license=('GPL')
url="https://www.mysql.com/products/community/"
options=('!libtool')
source=("https://dev.mysql.com/get/Downloads/MySQL-5.6/${_pkgname}-${pkgver}.tar.gz"
        "mysqld-post.sh"
        "mysqld-tmpfile.conf"
        "mysqld.service"
        "mysql-srv_buf_size.patch")
sha256sums=('8356bba23f3f6c0c2d4806110c41d1c4d6a4b9c50825e11c5be4bbee2b20b71d'
            '368f9fd2454d80eb32abb8f29f703d1cf9553353fb9e1ae4529c4b851cb8c5dd'
            '2af318c52ae0fe5428e8a9245d1b0fc3bc5ce153842d1563329ceb1edfa83ddd'
            '50212165bdb09855b97b15a917464ba34f82edf30a0c43f9a0c93a27071df556'
            'bfa3ba5546d470e1c1d32246f687f0faa8c225913a648262fbcae6b2296cb57f')

prepare() {
  cd "${_pkgname}-${pkgver}"
  patch -p0 -i "../mysql-srv_buf_size.patch"
}

build() {
  rm -rf build
  mkdir build
  cd build

  cmake "../${_pkgname}-${pkgver}" \
    -DCMAKE_AR=/usr/bin/gcc-ar \
    -DCMAKE_RANLIB=/usr/bin/gcc-ranlib \
    -DBUILD_CONFIG=mysql_release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DSYSCONFDIR=/etc/mysql \
    -DMYSQL_DATADIR=/var/lib/mysql \
    -DMYSQL_UNIX_ADDR=/run/mysqld/mysqld.sock \
    -DDEFAULT_CHARSET=utf8 \
    -DDEFAULT_COLLATION=utf8_general_ci \
    -DENABLED_LOCAL_INFILE=ON \
    -DINSTALL_INFODIR=share/mysql/docs \
    -DINSTALL_MANDIR=share/man \
    -DINSTALL_PLUGINDIR=lib/mysql/plugin \
    -DINSTALL_SCRIPTDIR=bin \
    -DINSTALL_INCLUDEDIR=include/mysql \
    -DINSTALL_DOCREADMEDIR=share/mysql \
    -DINSTALL_SUPPORTFILESDIR=share/mysql \
    -DINSTALL_MYSQLSHAREDIR=share/mysql \
    -DINSTALL_DOCDIR=share/mysql/docs \
    -DINSTALL_SHAREDIR=share/mysql \
    -DWITH_ZLIB=system \
    -DWITH_SSL=system \
    -DWITH_LIBWRAP=OFF \
    -DCMAKE_EXE_LINKER_FLAGS='-ljemalloc' \
    -DWITH_EXTRA_CHARSETS=complex \
    -DWITH_EMBEDDED_SERVER=ON \
    -DWITH_ARCHIVE_STORAGE_ENGINE=ON \
    -DWITH_BLACKHOLE_STORAGE_ENGINE=ON \
    -DWITH_INNOBASE_STORAGE_ENGINE=ON \
    -DWITH_PARTITION_STORAGE_ENGINE=ON \
    -DWITHOUT_EXAMPLE_STORAGE_ENGINE=ON \
    -DWITHOUT_FEDERATED_STORAGE_ENGINE=ON \
    -DCMAKE_C_FLAGS="-fPIC ${CFLAGS} -fno-strict-aliasing -DBIG_JOINS=1 -fomit-frame-pointer -fno-delete-null-pointer-checks" \
    -DCMAKE_CXX_FLAGS="-fPIC ${CXXFLAGS} -fno-strict-aliasing -DBIG_JOINS=1 -felide-constructors -fno-rtti -fno-delete-null-pointer-checks" \
    -DWITH_MYSQLD_LDFLAGS="-pie ${LDFLAGS},-z,now"
  make
}

package_libmysqlclient56(){
  pkgdesc="MySQL client libraries, v5.6"
  depends=('openssl')
  conflicts=('libmariadbclient')
  provides=("libmariadbclient=${pkgver}")

  cd build
  for dir in include libmysql libmysqld libservices
  do
    make -C "${dir}" DESTDIR="${pkgdir}" install
  done

  install -m 755 -d "${pkgdir}/usr/bin"
  install -m 755 scripts/mysql_config "${pkgdir}/usr/bin/"
  install -m 755 -d "${pkgdir}/usr/share/man/man1"
  for man in mysql_config mysql_client_test_embedded mysqltest_embedded
  do
    install -m 644 "${srcdir}/${_pkgname}-${pkgver}/man/${man}.1" "${pkgdir}/usr/share/man/man1/${man}.1"
  done
}

package_mysql-clients56(){
  pkgdesc="MySQL client tools, v5.6"
  depends=('libmysqlclient56' 'jemalloc')
  conflicts=('mariadb-clients')
  provides=("mariadb-clients=${pkgver}")

  cd build
  make -C "client" DESTDIR="${pkgdir}" install

  # install man pages
  install -d "${pkgdir}/usr/share/man/man1"
  for man in mysql mysqladmin mysqlcheck mysqldump mysqlimport mysqlshow mysqlslap
  do
    install -m644 "${srcdir}/${_pkgname}-${pkgver}/man/${man}.1" "${pkgdir}/usr/share/man/man1/${man}.1"
  done

  # provided by mysql
  rm "${pkgdir}/usr/bin/mysql_plugin"
  rm "${pkgdir}/usr/bin/mysql_upgrade"
  rm "${pkgdir}/usr/bin/mysql_config_editor"
  rm "${pkgdir}/usr/bin/mysqlbinlog"
  rm "${pkgdir}/usr/bin/mysqltest"
}

package_mysql56(){
  pkgdesc="Fast SQL database server, community edition v5.6"
  backup=('etc/mysql/my.cnf')
  install="${_pkgname}.install"
  depends=('mysql-clients56' 'libaio')
  conflicts=('mariadb')
  provides=("mariadb=${pkgver}")
  options=('emptydirs')

  cd build
  make DESTDIR="${pkgdir}" install

  install -m 644 -D "${pkgdir}/usr/share/mysql/my-default.cnf" "${pkgdir}/etc/mysql/my.cnf"
  install -m 755 -D "${srcdir}/mysqld-post.sh" "${pkgdir}/usr/bin/mysqld-post"
  install -m 644 -D "${srcdir}/mysqld-tmpfile.conf" "${pkgdir}/usr/lib/tmpfiles.d/mysqld.conf"
  install -m 755 -d "${pkgdir}/usr/lib/systemd/system"
  install -m 644 -D "${srcdir}/mysqld.service" "${pkgdir}/usr/lib/systemd/system/"

  # provided by libmysqlclient
  rm "${pkgdir}/usr/bin/mysql_config"
  rm "${pkgdir}/usr/bin/mysql_client_test_embedded"
  rm "${pkgdir}/usr/bin/mysqltest_embedded"
  rm "${pkgdir}"/usr/lib/libmysql*
  rm -r "${pkgdir}/usr/include/"
  rm "${pkgdir}/usr/share/man/man1/mysql_config.1"
  rm "${pkgdir}/usr/share/man/man1/mysql_client_test_embedded.1"
  rm "${pkgdir}/usr/share/man/man1/mysqltest_embedded.1"

  # provided by mysql-clients
  rm "${pkgdir}/usr/bin/mysql"
  rm "${pkgdir}/usr/bin/mysqladmin"
  rm "${pkgdir}/usr/bin/mysqlcheck"
  rm "${pkgdir}/usr/bin/mysqldump"
  rm "${pkgdir}/usr/bin/mysqlimport"
  rm "${pkgdir}/usr/bin/mysqlshow"
  rm "${pkgdir}/usr/bin/mysqlslap"
  rm "${pkgdir}/usr/share/man/man1/mysql.1"
  rm "${pkgdir}/usr/share/man/man1/mysqladmin.1"
  rm "${pkgdir}/usr/share/man/man1/mysqlcheck.1"
  rm "${pkgdir}/usr/share/man/man1/mysqldump.1"
  rm "${pkgdir}/usr/share/man/man1/mysqlimport.1"
  rm "${pkgdir}/usr/share/man/man1/mysqlshow.1"
  rm "${pkgdir}/usr/share/man/man1/mysqlslap.1"

  # not needed
  rm -r "${pkgdir}/usr/data"
  rm -r "${pkgdir}/usr/mysql-test"
  rm -r "${pkgdir}/usr/sql-bench"
  rm "${pkgdir}/usr/share/man/man1/mysql-test-run.pl.1"
}

