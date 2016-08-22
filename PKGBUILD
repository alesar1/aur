# Maintainer: Raphaël Doursenaud <rdoursenaud@gpcsolutions.fr>
# Contributor: mickael9 <mickael9 at gmail.com>
# Contributor: Pierre Schmitz <pierre@archlinux.de>
# Contributor: Thore Bödecker <me@foxxx0.de>

pkgbase=php55
_pkgbase=${pkgbase%55}
pkgname=("${pkgbase}"
         "${pkgbase}-cgi"
         "${pkgbase}-apache"
         "${pkgbase}-fpm"
         "${pkgbase}-embed"
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
         "${pkgbase}-xsl")
pkgver=5.5.38
pkgrel=2
pkgdesc="A general-purpose scripting language that is especially suited to web development"
arch=('i686' 'x86_64')
license=('PHP')
url='http://php.net'
makedepends=('apache' 'c-client' 'postgresql-libs' 'libldap' 'smtp-forwarder'
             'sqlite' 'unixodbc' 'net-snmp' 'libzip' 'enchant' 'file' 'freetds'
             'libmcrypt' 'tidyhtml' 'aspell' 'libltdl' 'gd' 'icu' 'curl' 'libxslt'
             'openssl' 'db' 'gmp' 'systemd')

source=("http://php.net/distributions/${_pkgbase}-${pkgver}.tar.xz"
        "http://php.net/distributions/${_pkgbase}-${pkgver}.tar.xz.asc"
        'php.ini.patch' 'apache.conf' 'php-fpm.conf.in.patch'
        'logrotate.d.php-fpm' 'php-fpm.service' 'php-fpm.tmpfiles')
md5sums=('72302e26f153687e2ca922909f927443'
         'SKIP'
         '7b61f3f94afbe598256fba61663f2822'
         'dec2cbaad64e3abf4f0ec70e1de4e8e9'
         '08feceba0885152543b7184afbd1faae'
         '26a26f832e760f7db048185818404796'
         'aac9e1468ddebc732e40c555d4e9a378'
         '4e13de0606d14bbceeebf6fe818358c8')
validpgpkeys=('6E4F6AB321FDC07F2C332E3AC2BF0BC433CFC8B3'
              '0BD78B5F97500D450838F95DFE857D9A90D90EC1')

prepare() {
	cd ${srcdir}/${_pkgbase}-${pkgver}

	patch -p0 -i ${srcdir}/php.ini.patch
	patch -p0 -i ${srcdir}/php-fpm.conf.in.patch
	# Just because our Apache 2.4 is configured with a threaded MPM by default does not mean we want to build a ZTS PHP.
	# Let's supress this behaviour and build a SAPI that works fine with the prefork MPM.
	sed '/APACHE_THREADED_MPM=/d' -i sapi/apache2handler/config.m4 -i configure
}

build() {
	local _phpconfig="--srcdir=../${_pkgbase}-${pkgver} \
		--config-cache \
		--prefix=/usr \
		--sysconfdir=/etc/${pkgbase} \
		--localstatedir=/var \
		--libdir=/usr/lib/${pkgbase} \
		--datarootdir=/usr/share/${pkgbase} \
		--datadir=/usr/share/${pkgbase} \
		--program-suffix=${pkgbase#php} \
		--with-layout=GNU \
		--with-config-file-path=/etc/${pkgbase} \
		--with-config-file-scan-dir=/etc/${pkgbase}/conf.d \
		--disable-rpath \
		--without-pear \
		"

	local _phpextensions="--enable-bcmath=shared \
		--enable-calendar=shared \
		--enable-dba=shared \
		--enable-exif=shared \
		--enable-ftp=shared \
		--enable-gd-native-ttf \
		--enable-intl=shared \
		--enable-mbstring \
		--enable-opcache \
		--enable-phar=shared \
		--enable-posix=shared \
		--enable-shmop=shared \
		--enable-soap=shared \
		--enable-sockets=shared \
		--enable-sysvmsg=shared \
		--enable-sysvsem=shared \
		--enable-sysvshm=shared \
		--enable-zip=shared \
		--with-bz2=shared \
		--with-curl=shared \
		--with-db4=/usr \
		--with-enchant=shared,/usr \
		--with-fpm-systemd \
		--with-freetype-dir=/usr \
		--with-xpm-dir=/usr \
		--with-gd=shared,/usr \
		--with-gdbm \
		--with-gettext=shared \
		--with-gmp=shared \
		--with-iconv=shared \
		--with-icu-dir=/usr \
		--with-imap-ssl \
		--with-imap=shared \
		--with-kerberos=/usr \
		--with-jpeg-dir=/usr \
		--with-vpx-dir=/usr \
		--with-ldap=shared \
		--with-ldap-sasl \
		--with-mcrypt=shared \
		--with-mhash \
		--with-mssql=shared \
		--with-mysql-sock=/run/mysqld/mysqld.sock \
		--with-mysql=shared,mysqlnd \
		--with-mysqli=shared,mysqlnd \
		--with-openssl=shared \
		--with-pcre-regex=/usr \
		--with-pdo-mysql=shared,mysqlnd \
		--with-pdo-odbc=shared,unixODBC,/usr \
		--with-pdo-pgsql=shared \
		--with-pdo-sqlite=shared,/usr \
		--with-pgsql=shared \
		--with-png-dir=/usr \
		--with-pspell=shared \
		--with-snmp=shared \
		--with-sqlite3=shared,/usr \
		--with-tidy=shared \
		--with-unixODBC=shared,/usr \
		--with-xmlrpc=shared \
		--with-xsl=shared \
		--with-zlib \
		"

	export EXTENSION_DIR=/usr/lib/${pkgbase}/modules
	export PEAR_INSTALLDIR=/usr/share/${pkgbase}/pear

	cd ${srcdir}/${_pkgbase}-${pkgver}

	# php
	mkdir -p ${srcdir}/build-php
	cd ${srcdir}/build-php
	ln -sf ../${_pkgbase}-${pkgver}/configure
	./configure ${_phpconfig} \
		--disable-cgi \
		--with-readline \
		--enable-pcntl \
		${_phpextensions}
	make

	# cgi and fcgi
	# reuse the previous run; this will save us a lot of time
	cp -Ta ${srcdir}/build-php ${srcdir}/build-cgi
	cd ${srcdir}/build-cgi
	./configure ${_phpconfig} \
		--disable-cli \
		--enable-cgi \
		${_phpextensions}
	make

	# apache
	cp -Ta ${srcdir}/build-php ${srcdir}/build-apache
	cd ${srcdir}/build-apache
	./configure ${_phpconfig} \
		--disable-cli \
		--with-apxs2 \
		${_phpextensions}
	make

	# fpm
	cp -Ta ${srcdir}/build-php ${srcdir}/build-fpm
	cd ${srcdir}/build-fpm
	./configure ${_phpconfig} \
		--disable-cli \
		--enable-fpm \
		--with-fpm-user=http \
		--with-fpm-group=http \
		${_phpextensions}
	make

	# embed
	cp -Ta ${srcdir}/build-php ${srcdir}/build-embed
	cd ${srcdir}/build-embed
	./configure ${_phpconfig} \
		--disable-cli \
		--enable-embed=shared \
		${_phpextensions}
	make

	# pear
	cp -Ta ${srcdir}/build-php ${srcdir}/build-pear
	cd ${srcdir}/build-pear
	./configure ${_phpconfig} \
		--disable-cgi \
		--with-readline \
		--enable-pcntl \
		--with-pear \
		${_phpextensions}
	make
}

package_php55() {
	pkgdesc='An HTML-embedded scripting language'
	depends=('pcre' 'libxml2' 'curl' 'libzip')
	backup=("etc/${pkgbase}/php.ini")
	provides=("${_pkgbase}=$pkgver")

	cd ${srcdir}/build-php
	make -j1 INSTALL_ROOT=${pkgdir} install

	# install php.ini
	install -D -m644 ${srcdir}/${_pkgbase}-${pkgver}/php.ini-production ${pkgdir}/etc/${pkgbase}/php.ini
	install -d -m755 ${pkgdir}/etc/${pkgbase}/conf.d/

	# remove static modules
	rm -f ${pkgdir}/usr/lib/${pkgbase}/modules/*.a
	# remove modules provided by sub packages
	rm -f ${pkgdir}/usr/lib/${pkgbase}/modules/{enchant,gd,imap,intl,ldap,mcrypt,mssql,odbc,pdo_odbc,pgsql,pdo_pgsql,pspell,snmp,sqlite3,pdo_sqlite,tidy,xsl}.so

	# remove empty directory
	rmdir ${pkgdir}/usr/include/php/include

	# move include directory
	mv ${pkgdir}/usr/include/php ${pkgdir}/usr/include/${pkgbase}

	# fix phar symlink
	rm ${pkgdir}/usr/bin/phar
	ln -sf phar.${pkgbase/php/phar} ${pkgdir}/usr/bin/${pkgbase/php/phar}

	# rename executables
	mv ${pkgdir}/usr/bin/phar.{phar,${pkgbase/php/phar}}

	# rename man pages
	mv ${pkgdir}/usr/share/man/man1/{phar,${pkgbase/php/phar}}.1
	mv ${pkgdir}/usr/share/man/man1/phar.{phar,${pkgbase/php/phar}}.1

	# fix paths in executables
	sed -i "/^includedir=/c \includedir=/usr/include/${pkgbase}" ${pkgdir}/usr/bin/${pkgbase/php/phpize}
	sed -i "/^include_dir=/c \include_dir=/usr/include/${pkgbase}" ${pkgdir}/usr/bin/${pkgbase/php/php-config}

	# make phpize use php-config55
	sed -i "/^\[  --with-php-config=/c \[  --with-php-config=PATH  Path to php-config [${pkgbase/php/php-config}]], ${pkgbase/php/php-config}, no)" ${pkgdir}/usr/lib/${pkgbase}/build/phpize.m4
}

package_php55-cgi() {
	pkgdesc='CGI and FCGI SAPI for PHP'
	depends=("${pkgbase}")
	provides=("${_pkgbase}-cgi=$pkgver")

	install -D -m755 ${srcdir}/build-cgi/sapi/cgi/php-cgi ${pkgdir}/usr/bin/${pkgbase}-cgi
}

package_php55-apache() {
	pkgdesc='Apache SAPI for PHP'
	depends=("${pkgbase}" 'apache')
	provides=("${_pkgbase}-apache=$pkgver")
	backup=("etc/httpd/conf/extra/${pkgbase}_module.conf")
	install='php-apache.install'

	install -D -m755 ${srcdir}/build-apache/libs/libphp5.so ${pkgdir}/usr/lib/httpd/modules/lib${pkgbase}.so
	install -D -m644 ${srcdir}/apache.conf ${pkgdir}/etc/httpd/conf/extra/${pkgbase}_module.conf
}

package_php55-fpm() {
	pkgdesc='FastCGI Process Manager for PHP'
	depends=("${pkgbase}" 'systemd')
	provides=("${_pkgbase}-fpm=$pkgver")
	backup=("etc/${pkgbase}/php-fpm.conf")
	install='php-fpm.install'

	install -d -m755 ${pkgdir}/usr/bin
	install -D -m755 ${srcdir}/build-fpm/sapi/fpm/php-fpm ${pkgdir}/usr/bin/${pkgbase}-fpm

	install -D -m644 ${srcdir}/build-fpm/sapi/fpm/php-fpm.8 ${pkgdir}/usr/share/man/man8/${pkgbase}-fpm.8
	install -D -m644 ${srcdir}/build-fpm/sapi/fpm/php-fpm.conf ${pkgdir}/etc/${pkgbase}/php-fpm.conf

	install -d -m755 ${pkgdir}/etc/${pkgbase}/fpm.d
	install -D -m644 ${srcdir}/php-fpm.tmpfiles ${pkgdir}/usr/lib/tmpfiles.d/${pkgbase}-fpm.conf
	install -D -m644 ${srcdir}/php-fpm.service ${pkgdir}/usr/lib/systemd/system/${pkgbase}-fpm.service

	install -d -m755 ${pkgdir}/etc/logrotate.d
	install -D -m644 ${srcdir}/logrotate.d.php-fpm ${pkgdir}/etc/logrotate.d/${pkgbase}-fpm
}

package_php55-embed() {
	pkgdesc='Embedded PHP SAPI library'
	depends=("${pkgbase}")
	provides=("${_pkgbase}-embed=$pkgver")

	install -D -m755 ${srcdir}/build-embed/libs/libphp5.so ${pkgdir}/usr/lib/libphp55.so
	install -D -m644 ${srcdir}/${_pkgbase}-${pkgver}/sapi/embed/php_embed.h ${pkgdir}/usr/include/${pkgbase}/sapi/embed/php_embed.h
}

package_php55-pear() {
	pkgdesc='PHP Extension and Application Repository'
	depends=("${pkgbase}")
	provides=("${_pkgbase}-pear=$pkgver")
	backup=("etc/${pkgbase}/pear.conf")

	cd ${srcdir}/build-pear
	make install-pear INSTALL_ROOT=${pkgdir}
	rm -rf ${pkgdir}/usr/share/${pkgbase}/pear/.{channels,depdb,depdblock,filemap,lock,registry}

	mv ${pkgdir}/usr/bin/{pear,${pkgbase/php/pear}}
	mv ${pkgdir}/usr/bin/{peardev,${pkgbase/php/peardev}}
	mv ${pkgdir}/usr/bin/{pecl,${pkgbase/php/pecl}}

	# fix hardcoded php paths in pear
	sed -i 's|/usr/bin/php|/usr/bin/php55|g' "${pkgdir}/usr/bin/pear55"
	sed -i 's|PHP=php|PHP=php55|g' "${pkgdir}/usr/bin/pear55"
	sed -i 's|s:7:"php_bin";s:12:"/usr/bin/php"|s:7:"php_bin";s:14:"/usr/bin/php55"|' "${pkgdir}/etc/${pkgbase}/pear.conf"
}

package_php55-enchant() {
	pkgdesc='enchant module for PHP'
	depends=("${pkgbase}" 'enchant')
	provides=("${_pkgbase}-enchant=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/enchant.so ${pkgdir}/usr/lib/${pkgbase}/modules/enchant.so
}

package_php55-gd() {
	pkgdesc='gd module for PHP'
	depends=("${pkgbase}" 'gd')
	provides=("${_pkgbase}-gd=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/gd.so ${pkgdir}/usr/lib/${pkgbase}/modules/gd.so
}

package_php55-imap() {
	pkgdesc='imap module for PHP'
	depends=("${pkgbase}" 'c-client')
	provides=("${_pkgbase}-imap=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/imap.so ${pkgdir}/usr/lib/${pkgbase}/modules/imap.so
}

package_php55-intl() {
	pkgdesc='intl module for PHP'
	depends=("${pkgbase}" 'icu')
	provides=("${_pkgbase}-intl=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/intl.so ${pkgdir}/usr/lib/${pkgbase}/modules/intl.so
}

package_php55-ldap() {
	pkgdesc='ldap module for PHP'
	depends=("${pkgbase}" 'libldap')
	provides=("${pkgbase}-ldap=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/ldap.so ${pkgdir}/usr/lib/${pkgbase}/modules/ldap.so
}

package_php55-mcrypt() {
	pkgdesc='mcrypt module for PHP'
	depends=("${pkgbase}" 'libmcrypt' 'libltdl')
	provides=("${_pkgbase}-mcrypt=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/mcrypt.so ${pkgdir}/usr/lib/${pkgbase}/modules/mcrypt.so
}

package_php55-mssql() {
	pkgdesc='mssql module for PHP'
	depends=("${pkgbase}" 'freetds')
	provides=("${_pkgbase}-mssql=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/mssql.so ${pkgdir}/usr/lib/${pkgbase}/modules/mssql.so
}

package_php55-odbc() {
	pkgdesc='ODBC modules for PHP'
	depends=("${pkgbase}" 'unixodbc')
	provides=("${_pkgbase}-odbc=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/odbc.so ${pkgdir}/usr/lib/${pkgbase}/modules/odbc.so
	install -D -m755 ${srcdir}/build-php/modules/pdo_odbc.so ${pkgdir}/usr/lib/${pkgbase}/modules/pdo_odbc.so
}

package_php55-pgsql() {
	pkgdesc='PostgreSQL modules for PHP'
	depends=("${pkgbase}" 'postgresql-libs')
	provides=("${_pkgbase}-pgsql=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/pgsql.so ${pkgdir}/usr/lib/${pkgbase}/modules/pgsql.so
	install -D -m755 ${srcdir}/build-php/modules/pdo_pgsql.so ${pkgdir}/usr/lib/${pkgbase}/modules/pdo_pgsql.so
}

package_php55-pspell() {
	pkgdesc='pspell module for PHP'
	depends=("${pkgbase}" 'aspell')
	provides=("${_pkgbase}-pspell=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/pspell.so ${pkgdir}/usr/lib/${pkgbase}/modules/pspell.so
}

package_php55-snmp() {
	pkgdesc='snmp module for PHP'
	depends=("${pkgbase}" 'net-snmp')
	provides=("${_pkgbase}-snmp=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/snmp.so ${pkgdir}/usr/lib/${pkgbase}/modules/snmp.so
}

package_php55-sqlite() {
	pkgdesc='sqlite module for PHP'
	depends=("${pkgbase}" 'sqlite')
	provides=("${_pkgbase}-sqlite=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/sqlite3.so ${pkgdir}/usr/lib/${pkgbase}/modules/sqlite3.so
	install -D -m755 ${srcdir}/build-php/modules/pdo_sqlite.so ${pkgdir}/usr/lib/${pkgbase}/modules/pdo_sqlite.so
}

package_php55-tidy() {
	pkgdesc='tidy module for PHP'
	depends=("${pkgbase}" 'tidyhtml')
	provides=("${_pkgbase}-tidy=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/tidy.so ${pkgdir}/usr/lib/${pkgbase}/modules/tidy.so
}

package_php55-xsl() {
	pkgdesc='xsl module for PHP'
	depends=("${pkgbase}" 'libxslt')
	provides=("${_pkgbase}-xsl=$pkgver")

	install -D -m755 ${srcdir}/build-php/modules/xsl.so ${pkgdir}/usr/lib/${pkgbase}/modules/xsl.so
}
