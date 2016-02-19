# Maintainer: K1412 <jonathan@opensides.be>
pkgname=fusiondirectory
pkgver=1.0.10
pkgrel=1
pkgdesc="FusionDirectory is a combination of system-administrator and end-user web interface, designed to handle LDAP based setups."
arch=("any")
url="http://fusiondirectory.org/"
license=("LGPL")
depends=("apache" "smarty3" "smarty3-i18n" "prototype" "scriptaculous" "schema2ldif" "javascript-common"
"perl-path-class" "perl-ldap" "perl-mime-base64" "perl-digest-sha" "perl-term-readkey" "perl-crypt-rijndael"
"perl-crypt-cbc" "perl-file-copy-recursive" "perl-xml-twig" "perl-archive-extract" "perl-extutils-makemaker"
"php-imagick" "php-ldap" "php-pear" "php-gd" "php-imap" "php-apache" "php-mcrypt" "php-cas")
install=${pkgname}.install

backup=('etc/fusiondirectory-apache.conf')

source=("http://repos.fusiondirectory.org/sources/1.0/fusiondirectory/fusiondirectory-${pkgver}.tar.gz"
        "fixes-path.patch"
        "fixes-apache-path.patch"
        "fixes-pear-lib.patch"
        "fixes-headers.patch")

md5sums=('abaa6fd4c73d1b51c4bac16f9be2bd0e'
         "5f92d3e4378d0ea7fda7fa9c8b81d29e"
         "d2e3d7dedf5c436c6d7484dc049f3f7f"
         "0a78917932d864cbaefa0139f90c6ab0"
         "21ff95126a4e956a85219242c609bb3c")

prepare() {
  # In srcdir
  cd "$srcdir/$pkgname-$pkgver"

  # Apply patchs
  patch -p1 -i ../fixes-path.patch
  patch -p1 -i ../fixes-apache-path.patch
  patch -p1 -i ../fixes-pear-lib.patch
  patch -p1 -i ../fixes-headers.patch

  # Right for executables 
  chmod 750 ./contrib/bin/*

  # Create the man files
  gzip ./contrib/man/fusiondirectory.conf.5
  gzip ./contrib/man/fusiondirectory-setup.1
  gzip ./contrib/man/fusiondirectory-insert-schema.1
}

package() {
	# In srcdir
	cd "$srcdir/$pkgname-$pkgver"

	# Create multiple directories
	install -d -m 0770 $pkgdir/var/spool/$pkgname/
        install -d -m 0770 $pkgdir/var/cache/$pkgname/
	install -d -m 0770 $pkgdir/var/cache/$pkgname/tmp/
	install -d -m 0770 $pkgdir/var/cache/$pkgname/locale/
	install -d -m 0770 $pkgdir/var/cache/$pkgname/include/
	install -d -m 0770 $pkgdir/var/cache/$pkgname/template/

	# Copy man files
	install -d -m 0755 $pkgdir/usr/share/man/man1/
	install -d -m 0755 $pkgdir/usr/share/man/man5/

	cp ./contrib/man/fusiondirectory.conf.5.gz $pkgdir/usr/share/man/man5/
        cp ./contrib/man/fusiondirectory-setup.1.gz $pkgdir/usr/share/man/man1/
        cp ./contrib/man/fusiondirectory-insert-schema.1.gz $pkgdir/usr/share/man/man1/

	# Copy docs
	install -d -m 0770 $pkgdir/usr/share/doc/$pkgname/
	cp ./AUTHORS ./Changelog ./COPYING $pkgdir/usr/share/doc/$pkgname/

	# Move fusiondirectory.conf in template
	cp ./contrib/fusiondirectory.conf $pkgdir/var/cache/$pkgname/template/

	# Move executables
	mkdir -p $pkgdir/usr/bin/
	cp ./contrib/bin/fusiondirectory-setup $pkgdir/usr/bin/

	# Move smarty functions and create php lib directory if it exist
	install -d -m 0755 $pkgdir/usr/share/php/smarty3/plugins/

	cp ./contrib/smarty/plugins/function.msgPool.php $pkgdir/usr/share/php/smarty3/plugins/function.msgPool.php
	cp ./contrib/smarty/plugins/function.filePath.php $pkgdir/usr/share/php/smarty3/plugins/function.filePath.php
	cp ./contrib/smarty/plugins/block.render.php $pkgdir/usr/share/php/smarty3/plugins/block.render.php

	# Copy apache configuration
	install -d -m 0755 $pkgdir/etc/fusiondirectory/
	cp ./contrib/apache/fusiondirectory-apache.conf $pkgdir/etc/fusiondirectory/

	# FusionDirectory install
	install -d -m 0755 $pkgdir/usr/share/webapps/${pkgname}/
	DIRS="ihtml plugins html include locale setup"
	for i in $DIRS ; do
  		cp -ua $i $pkgdir/usr/share/webapps/${pkgname}/
	done

  # Create symbolic link for to /usr/share/javascript
  ln -s /usr/share/javascript $pkgdir/usr/share/webapps/${pkgname}/html/javascript
}
