# Maintainer: vinibali <vinibali1 at gmail dot com>

pkgname=adbcontrol
pkgver=0.1
pkgrel=1
pkgdesc="Remote control your Android phone through adb"
arch=(i686 x86_64)
url="http://marian.schedenig.name/2014/07/03/remote-control-your-android-phone-through-adb/"
license=('Eclipse Public Licence')
depends=(jre7-openjdk)
source=(http://marian.schedenig.name/wp-content/uploads/adbcontrol.zip)
md5sums=(a6fafab5525a8e02450b4456ea3ec141)

build()
	{
	echo "###############################################"
	echo "No build requied, precompiled jar is avaliable,"
	echo "standard values has been placed in config file."
	echo "$ cd /opt/adbcontrol/ ;java -jar adbcontrol.jar"
	echo "###############################################"
	}	

package()
	{
	mkdir -p "${pkgdir}"/opt/adbcontrol
	echo -e 'adbCommand = /usr/bin/adb\nscreenshotDelay = 10\nlocalImageFilePath = /tmp/adbcontrol_screenshot.png\nphoneImageFilePath = /mnt/sdcard/adbcontrol_screenshot.png' > "${pkgdir}"/opt/adbcontrol/config.properties
	cp -a "${srcdir}"/src "${pkgdir}"/opt/adbcontrol/
	install -Dm755 "${srcdir}"/adbcontrol.jar "${pkgdir}"/opt/adbcontrol/adbcontrol.jar
	install -Dm755 "${srcdir}"/epl-v10.html "${pkgdir}"/opt/adbcontrol/epl-v10.html
	}
