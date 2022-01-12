# Maintainer:  Chris Severance aur.severach aATt spamgourmet dott com
# Contributor: mickael9 <mickael9 at gmail.com>
# Contributor: Pierre Schmitz <pierre@archlinux.de>
# Contributor: Thore Bödecker <me@foxxx0.de>
# Contributor: Jörg Schuck <joerg_schuck [at] web.de>
#
# Changes from 2016-01-10, by Thore Bödecker:
#   reworked everything to allow php56 to co-exist with upstream php packages

set -u
_pkgbase='php'
pkgbase="${_pkgbase}56"
pkgname=(
  "${pkgbase}"
  "${pkgbase}-cgi"
  "${pkgbase}-apache"
  "${pkgbase}-fpm"
  "${pkgbase}-embed"
  "${pkgbase}-phpdbg"
  "${pkgbase}-dblib"
  "${pkgbase}-pear"
  "${pkgbase}-enchant"
  "${pkgbase}-gd"
  "${pkgbase}-imap"
  "${pkgbase}-intl"
  "${pkgbase}-ldap"
  "${pkgbase}-mcrypt"
  "${pkgbase}-mssql"
  "${pkgbase}-odbc"
  "${pkgbase}-pgsql"
  "${pkgbase}-pspell"
  "${pkgbase}-snmp"
  "${pkgbase}-sqlite"
  "${pkgbase}-tidy"
  "${pkgbase}-xsl"
)
pkgver='5.6.40'
pkgrel='2'
pkgdesc="A general-purpose scripting language that is especially suited to web development"
arch=('i686' 'x86_64')
url='http://php.net'
license=('PHP')
makedepends=('apache' 'c-client' 'postgresql-libs' 'libldap' 'smtp-forwarder'
             'sqlite' 'unixodbc' 'net-snmp' 'libzip' 'enchant' 'file' 'freetds'
             'libmcrypt' 'tidyhtml' 'aspell' 'libltdl' 'gd' 'icu'
             'curl' 'libxslt' 'openssl-1.0' 'db' 'gmp' 'systemd' 'libnsl')

_srcdir="${_pkgbase}-${pkgver}"
source=(
  "https://secure.php.net/distributions/${_srcdir}.tar.xz"
  "https://secure.php.net/distributions/${_srcdir}.tar.xz.asc"
  'php.ini.patch' 'apache.conf' 'php-fpm.conf.in.patch'
  'logrotate.d.php-fpm' 'php-fpm.service' 'php-fpm.tmpfiles'
  'use-enchant2.patch'
  'php-freetype-2.9.1.patch'
  'https://raw.githubusercontent.com/centminmod/centminmod/123.09beta01/patches/php/php5640-mysqlnd-fix.patch'
  '0000-gd-2.3.3-dropped-GD_FLIP_HORINZONTAL.patch'
  'https://raw.githubusercontent.com/mhei/packages/6eecc3bd4c8e34e3986fde3f95ed88c784cd99eb/lang/php7/patches/1011-Accommodate-changes-to-canonicalized-forms-in-ICU-70_1.patch'
)
validpgpkeys=('6E4F6AB321FDC07F2C332E3AC2BF0BC433CFC8B3'
              '0BD78B5F97500D450838F95DFE857D9A90D90EC1')
md5sums=('c7dde3afb16ce7b761abf2805125d372'
         'SKIP'
         'c893cdf2599f68a7844cd4c91e66a18b'
         'dec2cbaad64e3abf4f0ec70e1de4e8e9'
         '2d0e98c423a9dc57e923f31d63117106'
         'bc1006ba3308c0b641726944874da315'
         'c1cc15d2123931f883f75f231ae44f60'
         '12392414f768281ae96f292d0aa9669c'
         '4a9801acb02312746347095f107c68e9'
         'b40b82f55208eaead22dbfb64720b064'
         'ce426ef8c362dd27a74678656b5700f4'
         '3ded94e2f581d4e2c06ad2927547445c'
         '08a2d47bffe8f187bf48953c272f8812')
sha256sums=('1369a51eee3995d7fbd1c5342e5cc917760e276d561595b6052b21ace2656d1c'
            'SKIP'
            'f70833674fec2575bb404a907fb01c616537629d6a4bfa7c319df04fb90e21e1'
            '8b5b15f1c348d8897d837ea9894157d9630dc542bbb0dbc7ad93c5dc0235d1d5'
            '71996465bf1ccd0f335cd023f74dc362c9ac8eae03ce400dc36a729d42431403'
            'e1eee1e035a3ae973c08989564227577d996fddace2bb25d0c62ef8763d109a8'
            'c65c3c140aa06868ecef672c17b467589dc03d21caf06a75511dbc19c0bae1c3'
            '2fb61bcef63765d3491bb78cab835f1ab6819c127bef4d30945916193608eb4e'
            '471eadcbe1d28102774260fa7fcb47fb65b104c4e3fc7267c3ae59e075c8cceb'
            'f9fe57f809ac13e0043d18b795ef777af3e8c710a83745b37b09db536f683d2a'
            '4599f34603b8af7c33b123bc14d2cea5832fe2275c901cbd46ff76182b1dbf13'
            '2dce63bc61a3d484794d38dabc06df58ff45b22a7e56c4dc1b221cb4e05074ff'
            '1d0f0ef86345d5c28d6bb4abfa630e9e1e541b281ba95d36c5d517653798685c')
sha512sums=('997b5a952a60cf9166671cc91fcc34c674dd62bfd5cb0a9cdf3fdf2d088b5d19943d94c1cf193f8ab71fc4957d9a9a4c7c2fb8826f937501c1c0a0858f10e329'
            'SKIP'
            'e742d6e3e43bce75e11b4646cdbf06c5661c66cc22d5615caff1e293ed35e95973290940c93d6abeec2d43f02761baabf24e6954720d7df8f2bd7de2c3f9ba0d'
            'a20711e301648c0e7080688d2a2522f8b6a94d35dc4a09169795618f7b09613490b46ae1805ffffca63bc29f3f4b1d36705dec1bcc55e293fc51a31a6c346d8c'
            '5e65a0cda2b873bf4f4f502ec6aef57c8c0a1c77c60a1d2c352da8871bcf213bc28b005f5517a806ee909b958c986601eb7381c6f7296f42cf3dbd3af0619035'
            'a398e9cde4ba57d243abb5b394152d87bc1fddc2d5fc934569e1f912a5a80eba3ae14720fe99fcda50722bedc5d65abcbde2822f5075091c4a83a2f6bb22c122'
            'c6b74e1b39224e79d33915a0d32fe2d08114d1dcec93035017af783b8b73b6475779e3e649abb35b73ea2fd6553120696c48ebb0894531282fbc9e1b36da9f3b'
            '9cc548c9395f0765e6ebf54604dc8e71da38ffbc10eba50ba9b7e2f91690c53056f62efa2060fc8670de94e0642027c6eaa6c2820ba99e2b489695d1e320fcf3'
            '9fa342db6530bf1b6c86d6eb5020f86eab08b7c134d649291755d3b8356837509ac9dd8a8c8a26a7c98468045abcb128bdf9cc7c6646ccf06da43909aa7b019b'
            '0a06189f6fb3513cd2dcf9ddb590360475e2dd9a7aa8b13ab66c389c1ed40ce2361681f017cd3c6219f5b40a0a9d4978e57ca3ee4bacb7657db3285136fd2875'
            '14720eff3bc90106c6740017344e01f678090c4b07dd4ba5d91d65b194829032a0e458f333f8c14e12279a5e0f526de9792e43f22eb2a2db48285e34a2e148e2'
            'd0b78bea3f289abce90b659eddce6dd8be608a8daee7d59300cea5e3f40dff743fc90b10acb0134fa4ef5a35b8a96539e1ac11a869df0190588e238dcf634191'
            '116ca5d0bea92e595334a432554840a80ac18073847074ebe6e90459910707ed0d01dbcfe77977cc563527cd2212b04d4abab881154abb10675102a8c78b8369')

prepare() {
  cd "${srcdir}/${_srcdir}"

  patch -p0 -i "${srcdir}/php.ini.patch"
  patch -p0 -i "${srcdir}/php-fpm.conf.in.patch"
  # Just because our Apache 2.4 is configured with a threaded MPM by default does not mean we want to build a ZTS PHP.
  # Let's supress this behaviour and build a SAPI that works fine with the prefork MPM.
  sed '/APACHE_THREADED_MPM=/d' -i sapi/apache2handler/config.m4 -i configure

  # Allow php-tidy to compile with tidy-html5
  sed 's/buffio\.h/tidybuffio\.h/' -i ext/tidy/tidy.c

  # thanks to Jörg Schuck for providing this patch
  # https://gist.github.com/jschuck/5d237974e5856a221ccb347c9ccf8711
  patch -p0 -N -l -i "${srcdir}/use-enchant2.patch"

  # fix compatibility with freetype >=2.9.1
  # kudos to Brian Evans <grknight@gentoo.org>
  # https://gitweb.gentoo.org/repo/gentoo.git/plain/dev-lang/php/files/php-freetype-2.9.1.patch
  patch -p1 -N -l -i "${srcdir}/php-freetype-2.9.1.patch"

  # fix mysqlnd compat with mariadb versions
  # stricter packet checking introduced where php is sending a byte to indicate prepared params and not sending any params
  # https://raw.githubusercontent.com/centminmod/centminmod/123.09beta01/patches/php/php5640-mysqlnd-fix.patch
  patch -p1 -N -l -u -i "${srcdir}/php5640-mysqlnd-fix.patch"

  # https://github.com/libgd/libgd/issues/318
  #cp -p ext/gd/gd.c{,.orig}; false
  #diff -pNau5 ext/gd/gd.c{.orig,} > '0000-gd-2.3.3-dropped-GD_FLIP_HORINZONTAL.patch'
  patch -Nbup0 -i "${srcdir}/0000-gd-2.3.3-dropped-GD_FLIP_HORINZONTAL.patch"

  # Fix for ICU 70 by caffe1neadd1ct
  patch -p1 -N -l -u -i <(sed -e '/locale_methods/,$ d' "${srcdir}/1011-Accommodate-changes-to-canonicalized-forms-in-ICU-70_1.patch")
}

build() {
  set -u
  # http://site.icu-project.org/download/61#TOC-Migration-Issues
  CPPFLAGS+=' -DU_USING_ICU_NAMESPACE=1'
  CPPFLAGS+=' -DU_DEFINE_FALSE_AND_TRUE=1'
  CXXFLAGS+=' -std=c++11'

  local _phpconfig=(
    --srcdir="../${_srcdir}"
    --config-cache
    --prefix='/usr'
    --sysconfdir="/etc/${pkgbase}"
    --localstatedir='/var'
    --libdir="/usr/lib/${pkgbase}"
    --datarootdir="/usr/share/${pkgbase}"
    --datadir="/usr/share/${pkgbase}"
    --program-suffix="${pkgbase#php}"
    --with-layout='GNU'
    --with-config-file-path="/etc/${pkgbase}"
    --with-config-file-scan-dir="/etc/${pkgbase}/conf.d"
    --disable-rpath
    --without-pear
  )

  local _phpextensions=(
    --enable-bcmath='shared'
    --enable-calendar='shared'
    --enable-dba='shared'
    --enable-exif='shared'
    --enable-ftp='shared'
    --enable-gd-native-ttf
    --enable-intl='shared'
    --enable-mbstring
    --enable-opcache
    --enable-phar='shared'
    --enable-posix='shared'
    --enable-shmop='shared'
    --enable-soap='shared'
    --enable-sockets='shared'
    --enable-sysvmsg='shared'
    --enable-sysvsem='shared'
    --enable-sysvshm='shared'
    --enable-zip='shared'
    --with-bz2='shared'
    --with-curl='shared'
    --with-db4='/usr'
    --with-enchant='shared,/usr'
    --with-fpm-systemd
    --with-freetype-dir='/usr'
    --with-xpm-dir='/usr'
    --with-gd='shared,/usr'
    --with-gdbm
    --with-gettext='shared'
    --with-gmp='shared'
    --with-iconv='shared'
    --with-icu-dir='/usr'
    --with-imap-ssl
    --with-imap='shared'
    --with-kerberos='/usr'
    --with-jpeg-dir='/usr'
    --with-vpx-dir='no'
    --with-ldap='shared'
    --with-ldap-sasl
    --with-libzip
    --with-mcrypt='shared'
    --with-mhash
    --with-mssql='shared'
    --with-mysql-sock='/run/mysqld/mysqld.sock'
    --with-mysql='shared,mysqlnd'
    --with-mysqli='shared,mysqlnd'
    --with-openssl='shared'
    --with-pcre-regex='/usr'
    --with-pdo-dblib='shared,/usr'
    --with-pdo-mysql='shared,mysqlnd'
    --with-pdo-odbc='shared,unixODBC,/usr'
    --with-pdo-pgsql='shared'
    --with-pdo-sqlite='shared,/usr'
    --with-pgsql='shared'
    --with-png-dir='/usr'
    --with-pspell='shared'
    --with-snmp='shared'
    --with-sqlite3='shared,/usr'
    --with-tidy='shared'
    --with-unixODBC='shared,/usr'
    --with-xmlrpc='shared'
    --with-xsl='shared'
    --with-zlib
  )

  export EXTENSION_DIR="/usr/lib/${pkgbase}/modules"
  export PEAR_INSTALLDIR="/usr/share/${pkgbase}/pear"
  export PKG_CONFIG_PATH='/usr/lib/openssl-1.0/pkgconfig'

  cd "${srcdir}/${_srcdir}"

  # php
  mkdir -p "${srcdir}/build-php"
  cd "${srcdir}/build-php"
  ln -sf "../${_srcdir}/configure"
  ./configure "${_phpconfig[@]}" \
    --disable-cgi \
    --with-readline \
    --enable-pcntl \
    "${_phpextensions[@]}"
  sed -i -e '/^IMAP_SHARED_LIBADD =/ s#-lssl -lcrypto#-Wl,/usr/lib/libssl.so -Wl,/usr/lib/libcrypto.so#' 'Makefile'
  make -s

  # cgi and fcgi
  # reuse the previous run; this will save us a lot of time
  cp -Ta "${srcdir}/build-php" "${srcdir}/build-cgi"
  cd "${srcdir}/build-cgi"
  ./configure "${_phpconfig[@]}" \
    --disable-cli \
    --enable-cgi \
    "${_phpextensions[@]}"
  make -s

  # apache
  cp -Ta "${srcdir}/build-php" "${srcdir}/build-apache"
  cd "${srcdir}/build-apache"
  ./configure "${_phpconfig[@]}" \
    --disable-cli \
    --with-apxs2 \
    "${_phpextensions[@]}"
  make -s

  # fpm
  cp -Ta "${srcdir}/build-php" "${srcdir}/build-fpm"
  cd "${srcdir}/build-fpm"
  ./configure "${_phpconfig[@]}" \
    --disable-cli \
    --enable-fpm \
    --with-fpm-user='http' \
    --with-fpm-group='http' \
    "${_phpextensions[@]}"
  make -s

  # embed
  cp -Ta "${srcdir}/build-php" "${srcdir}/build-embed"
  cd "${srcdir}/build-embed"
  ./configure "${_phpconfig[@]}" \
    --disable-cli \
    --enable-embed='shared' \
    "${_phpextensions[@]}"
  make -s

  # phpdbg
  cp -Ta "${srcdir}/build-php" "${srcdir}/build-phpdbg"
  cd "${srcdir}/build-phpdbg"
  ./configure "${_phpconfig[@]}" \
    --disable-cli \
    --disable-cgi \
    --with-readline \
    --enable-phpdbg \
    "${_phpextensions[@]}"
  make -s

  # pear
  sed -i -e 's#@$(top_builddir)/sapi/cli/php $(PEAR_INSTALL_FLAGS) pear/install-pear-nozlib.phar -d#@$(top_builddir)/sapi/cli/php $(PEAR_INSTALL_FLAGS) pear/install-pear-nozlib.phar -p $(bindir)/php$(program_suffix) -d#' "${srcdir}/${_srcdir}/pear/Makefile.frag"
  cp -Ta "${srcdir}/build-php" "${srcdir}/build-pear"
  cd "${srcdir}/build-pear"
  ./configure "${_phpconfig[@]}" \
    --disable-cgi \
    --with-readline \
    --enable-pcntl \
    --with-pear \
    "${_phpextensions[@]}"
  make -s
  set +u
}

check() {
  set -u
  cd "${srcdir}/${_srcdir}"

  # Check if sendmail was configured correctly (FS#47600)
  "${srcdir}/build-php/sapi/cli/php" -n -r 'echo ini_get("sendmail_path");' | grep -q 'sendmail'

  REPORT_EXIT_STATUS='1' \
  NO_INTERACTION='1' \
  SKIP_ONLINE_TESTS='1' \
  SKIP_SLOW_TESTS='1' \
  "${srcdir}/build-php/sapi/cli/php" -n 'run-tests.php' -n -P 'tests'
  set +u
}

package_php56() {
  set -u
  pkgdesc='An HTML-embedded scripting language'
  depends=('pcre' 'libxml2' 'curl' 'libzip' 'openssl-1.0')
  backup=("etc/${pkgbase}/php.ini")
  provides=("${_pkgbase}=$pkgver")

  cd "${srcdir}/build-php"
  make -j1 INSTALL_ROOT="${pkgdir}" install

  # install php.ini
  install -D -m644 "${srcdir}/${_srcdir}/php.ini-production" "${pkgdir}/etc/${pkgbase}/php.ini"
  install -d -m755 "${pkgdir}/etc/${pkgbase}/conf.d/"

  # remove static modules
  rm -f "${pkgdir}/usr/lib/${pkgbase}/modules"/*.a
  # remove modules provided by sub packages
  rm -f "${pkgdir}/usr/lib/${pkgbase}/modules"/{enchant,gd,imap,intl,ldap,mcrypt,mssql,odbc,pdo_odbc,pgsql,pdo_pgsql,pspell,snmp,sqlite3,pdo_sqlite,tidy,xsl,pdo_dblib}.so

  # remove empty directory
  rmdir "${pkgdir}/usr/include/php/include"

  # move include directory
  mv "${pkgdir}/usr/include/php" "${pkgdir}/usr/include/${pkgbase}"

  # fix phar symlink
  rm "${pkgdir}/usr/bin/phar"
  ln -sf "phar.${pkgbase/php/phar}" "${pkgdir}/usr/bin/${pkgbase/php/phar}"

  # rename executables
  mv "${pkgdir}/usr/bin"/phar.{phar,"${pkgbase/php/phar}"}

  # rename man pages
  mv "${pkgdir}/usr/share/man/man1"/{phar,"${pkgbase/php/phar}"}.1
  mv "${pkgdir}/usr/share/man/man1"/phar.{phar,"${pkgbase/php/phar}"}.1

  # fix paths in executables
  sed -i -e "/^includedir=/c \includedir=/usr/include/${pkgbase}" "${pkgdir}/usr/bin/${pkgbase/php/phpize}"
  sed -i -e "/^include_dir=/c \include_dir=/usr/include/${pkgbase}" "${pkgdir}/usr/bin/${pkgbase/php/php-config}"

  # make phpize use php-config56
  sed -i -e "/^\[  --with-php-config=/c \[  --with-php-config=PATH  Path to php-config [${pkgbase/php/php-config}]], ${pkgbase/php/php-config}, no)" "${pkgdir}/usr/lib/${pkgbase}/build/phpize.m4"
  set +u
}

package_php56-cgi() {
  set -u
  pkgdesc='CGI and FCGI SAPI for PHP'
  depends=("${pkgbase}")
  provides=("${_pkgbase}-cgi=$pkgver")

  install -D -m755 "${srcdir}/build-cgi/sapi/cgi/php-cgi" "${pkgdir}/usr/bin/${pkgbase}-cgi"
  set +u
}

package_php56-apache() {
  set -u
  pkgdesc='Apache SAPI for PHP'
  depends=("${pkgbase}" 'apache' 'libnsl')
  provides=("${_pkgbase}-apache=$pkgver")
  backup=("etc/httpd/conf/extra/${pkgbase}_module.conf")
  install='php-apache.install'

  install -D -m755 "${srcdir}/build-apache/libs/libphp5.so" "${pkgdir}/usr/lib/httpd/modules/lib${pkgbase}.so"
  install -D -m644 "${srcdir}/apache.conf" "${pkgdir}/etc/httpd/conf/extra/${pkgbase}_module.conf"
  set +u
}

package_php56-fpm() {
  set -u
  pkgdesc='FastCGI Process Manager for PHP'
  depends=("${pkgbase}" 'systemd')
  provides=("${_pkgbase}-fpm=$pkgver")
  backup=("etc/${pkgbase}/php-fpm.conf")
  install='php-fpm.install'

  install -d -m755 "${pkgdir}/usr/bin"
  install -D -m755 "${srcdir}/build-fpm/sapi/fpm/php-fpm" "${pkgdir}/usr/bin/${pkgbase}-fpm"

  install -D -m644 "${srcdir}/build-fpm/sapi/fpm/php-fpm.8" "${pkgdir}/usr/share/man/man8/${pkgbase}-fpm.8"
  install -D -m644 "${srcdir}/build-fpm/sapi/fpm/php-fpm.conf" "${pkgdir}/etc/${pkgbase}/php-fpm.conf"

  install -d -m755 "${pkgdir}/etc/${pkgbase}/fpm.d"
  install -D -m644 "${srcdir}/php-fpm.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${pkgbase}-fpm.conf"
  install -D -m644 "${srcdir}/php-fpm.service" "${pkgdir}/usr/lib/systemd/system/${pkgbase}-fpm.service"

  install -d -m755 "${pkgdir}/etc/logrotate.d"
  install -D -m644 "${srcdir}/logrotate.d.php-fpm" "${pkgdir}/etc/logrotate.d/${pkgbase}-fpm"
  set +u
}

package_php56-embed() {
  set -u
  pkgdesc='Embedded PHP SAPI library'
  depends=("${pkgbase}" 'libnsl')
  provides=("${_pkgbase}-embed=$pkgver")

  install -D -m755 "${srcdir}/build-embed/libs/libphp5.so" "${pkgdir}/usr/lib/libphp56.so"
  install -D -m644 "${srcdir}/${_srcdir}/sapi/embed/php_embed.h" "${pkgdir}/usr/include/${pkgbase}/sapi/embed/php_embed.h"
  set +u
}

package_php56-phpdbg() {
  set -u
  pkgdesc='Interactive PHP debugger'
  depends=("${pkgbase}")
  provides=("${_pkgbase}-phpdbg=$pkgver")

  install -d -m755 "${pkgdir}/usr/bin"
  install -D -m755 "${srcdir}/build-phpdbg/sapi/phpdbg/phpdbg" "${pkgdir}/usr/bin/${pkgbase}dbg"
  set +u
}

package_php56-dblib() {
  set -u
  pkgdesc='dblib module for PHP'
  depends=("${pkgbase}" 'freetds')
  provides=("${_pkgbase}-dblib=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/pdo_dblib.so" "${pkgdir}/usr/lib/${pkgbase}/modules/pdo_dblib.so"
  set +u
}

package_php56-pear() {
  set -u
  pkgdesc='PHP Extension and Application Repository'
  depends=("${pkgbase}")
  provides=("${_pkgbase}-pear=$pkgver")
  backup=("etc/${pkgbase}/pear.conf")

  cd "${srcdir}/build-pear"
  make install-pear INSTALL_ROOT="${pkgdir}"
  rm -rf "${pkgdir}"{"/usr/share/${pkgbase}/pear",}/.{channels,depdb,depdblock,filemap,lock,registry}

  mv "${pkgdir}/usr/bin"/{pear,"${pkgbase/php/pear}"}
  mv "${pkgdir}/usr/bin"/{peardev,"${pkgbase/php/peardev}"}
  mv "${pkgdir}/usr/bin"/{pecl,"${pkgbase/php/pecl}"}
  set +u
}

package_php56-enchant() {
  set -u
  pkgdesc='enchant module for PHP'
  depends=("${pkgbase}" 'enchant')
  provides=("${_pkgbase}-enchant=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/enchant.so" "${pkgdir}/usr/lib/${pkgbase}/modules/enchant.so"
  set +u
}

package_php56-gd() {
  set -u
  pkgdesc='gd module for PHP'
  depends=("${pkgbase}" 'gd')
  provides=("${_pkgbase}-gd=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/gd.so" "${pkgdir}/usr/lib/${pkgbase}/modules/gd.so"
  set +u
}

package_php56-imap() {
  set -u
  pkgdesc='imap module for PHP'
  depends=("${pkgbase}" 'c-client')
  provides=("${_pkgbase}-imap=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/imap.so" "${pkgdir}/usr/lib/${pkgbase}/modules/imap.so"
  set +u
}

package_php56-intl() {
  set -u
  pkgdesc='intl module for PHP'
  depends=("${pkgbase}" 'icu')
  provides=("${_pkgbase}-intl=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/intl.so" "${pkgdir}/usr/lib/${pkgbase}/modules/intl.so"
  set +u
}

package_php56-ldap() {
  set -u
  pkgdesc='ldap module for PHP'
  depends=("${pkgbase}" 'libldap')
  provides=("${pkgbase}-ldap=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/ldap.so" "${pkgdir}/usr/lib/${pkgbase}/modules/ldap.so"
  set +u
}

package_php56-mcrypt() {
  set -u
  pkgdesc='mcrypt module for PHP'
  depends=("${pkgbase}" 'libmcrypt' 'libltdl')
  provides=("${_pkgbase}-mcrypt=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/mcrypt.so" "${pkgdir}/usr/lib/${pkgbase}/modules/mcrypt.so"
  set +u
}

package_php56-mssql() {
  set -u
  pkgdesc='mssql module for PHP'
  depends=("${pkgbase}" 'freetds')
  provides=("${_pkgbase}-mssql=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/mssql.so" "${pkgdir}/usr/lib/${pkgbase}/modules/mssql.so"
  set +u
}

package_php56-odbc() {
  set -u
  pkgdesc='ODBC modules for PHP'
  depends=("${pkgbase}" 'unixodbc')
  provides=("${_pkgbase}-odbc=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/odbc.so" "${pkgdir}/usr/lib/${pkgbase}/modules/odbc.so"
  install -D -m755 "${srcdir}/build-php/modules/pdo_odbc.so" "${pkgdir}/usr/lib/${pkgbase}/modules/pdo_odbc.so"
  set +u
}

package_php56-pgsql() {
  set -u
  pkgdesc='PostgreSQL modules for PHP'
  depends=("${pkgbase}" 'postgresql-libs')
  provides=("${_pkgbase}-pgsql=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/pgsql.so" "${pkgdir}/usr/lib/${pkgbase}/modules/pgsql.so"
  install -D -m755 "${srcdir}/build-php/modules/pdo_pgsql.so" "${pkgdir}/usr/lib/${pkgbase}/modules/pdo_pgsql.so"
  set +u
}

package_php56-pspell() {
  set -u
  pkgdesc='pspell module for PHP'
  depends=("${pkgbase}" 'aspell')
  provides=("${_pkgbase}-pspell=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/pspell.so" "${pkgdir}/usr/lib/${pkgbase}/modules/pspell.so"
  set +u
}

package_php56-snmp() {
  set -u
  pkgdesc='snmp module for PHP'
  depends=("${pkgbase}" 'net-snmp')
  provides=("${_pkgbase}-snmp=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/snmp.so" "${pkgdir}/usr/lib/${pkgbase}/modules/snmp.so"
  set +u
}

package_php56-sqlite() {
  set -u
  pkgdesc='sqlite module for PHP'
  depends=("${pkgbase}" 'sqlite')
  provides=("${_pkgbase}-sqlite=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/sqlite3.so" "${pkgdir}/usr/lib/${pkgbase}/modules/sqlite3.so"
  install -D -m755 "${srcdir}/build-php/modules/pdo_sqlite.so" "${pkgdir}/usr/lib/${pkgbase}/modules/pdo_sqlite.so"
  set +u
}

package_php56-tidy() {
  set -u
  pkgdesc='tidy module for PHP'
  depends=("${pkgbase}" 'tidyhtml')
  provides=("${_pkgbase}-tidy=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/tidy.so" "${pkgdir}/usr/lib/${pkgbase}/modules/tidy.so"
  set +u
}

package_php56-xsl() {
  set -u
  pkgdesc='xsl module for PHP'
  depends=("${pkgbase}" 'libxslt')
  provides=("${_pkgbase}-xsl=$pkgver")

  install -D -m755 "${srcdir}/build-php/modules/xsl.so" "${pkgdir}/usr/lib/${pkgbase}/modules/xsl.so"
  set +u
}
set +u
