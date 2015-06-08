# Maintainer: Denis Yantarev <denis dot yantarev at gmail dot com>

pkgname=smstools3
pkgver=3.1.15
pkgrel=4
pkgdesc="SMS gateway which can send and receive messages through GSM modems and mobile phones"
arch=('i686' 'x86_64')
url="http://smstools3.kekekasvi.com/"
license=('GPL')
backup=(etc/smsd.conf etc/logrotate.d/smsd)
install=smsd.install
depends=('bash')
makedepends=()
source=(http://smstools3.kekekasvi.com/packages/$pkgname-$pkgver.tar.gz
	makefile.patch
	sendsms.patch
	smsd.install
	smsd.conf
	smsd.tmpfiles
	smsd.logrotate
	smsd.service)
md5sums=('0241ef60e646fac1a06254a848e61ed7'
	 '4cadb840b5604a73831ef53f8c24bb11'
         'eabdaf793ed2fb9883ea0923b31450d3'
         'd0489ac2ec24784eabf2e781afd86240'
         'ebc64ebc17f874fc0b1e6f0b4ce7fc79'
         '6209da5f6d2b53bb8814f6181aa42848'
         '647c58aa56c6a29d6e68e73c239715f4'
         '7357a577480e95463112963f4244d2c1')

build()
{
	cd $srcdir || return 1
	patch -p0 <makefile.patch || return 1
	patch -p0 <sendsms.patch || return 1

	cd $pkgname || return 1
	make || return 1
}

package()
{
	cd $srcdir/$pkgname || return 1

	mkdir -p $pkgdir/usr/bin/ || return 1
	install -m0755 $srcdir/$pkgname/src/smsd $pkgdir/usr/bin/smsd || return 1
	install -m0755 $srcdir/$pkgname/scripts/sendsms $pkgdir/usr/bin/sendsms || return 1
	install -m0755 $srcdir/$pkgname/scripts/sms2html $pkgdir/usr/bin/sms2html || return 1
	install -m0755 $srcdir/$pkgname/scripts/sms2unicode $pkgdir/usr/bin/sms2unicode || return 1
	install -m0755 $srcdir/$pkgname/scripts/unicode2sms $pkgdir/usr/bin/unicode2sms || return 1

	mkdir -p $pkgdir/etc/ || return 1
	install -m0644 $srcdir/smsd.conf $pkgdir/etc/smsd.conf || return 1

	mkdir -p $pkgdir/etc/logrotate.d/ || return 1
	install -m0644 $srcdir/smsd.logrotate $pkgdir/etc/logrotate.d/smsd || return 1

	mkdir -p $pkgdir/usr/lib/systemd/system/ || return 1
	install -m0644 $srcdir/smsd.service $pkgdir/usr/lib/systemd/system/smsd.service || return 1

	mkdir -p $pkgdir/usr/lib/tmpfiles.d/ || return 1
	install -m0644 $srcdir/smsd.tmpfiles $pkgdir/usr/lib/tmpfiles.d/smsd.conf || return 1

	mkdir -p $pkgdir/var/spool/sms/incoming || return 1
	mkdir -p $pkgdir/var/spool/sms/outgoing || return 1
	mkdir -p $pkgdir/var/spool/sms/checked || return 1
	chmod 0750 $pkgdir/var/spool/sms || return 1
	chmod 0770 $pkgdir/var/spool/sms/* || return 1

	mkdir -p $pkgdir/var/log/smsd || return 1
	chmod 0770 $pkgdir/var/log/smsd || return 1
}

