# Maintainer: Daniel Hillenbrand <codeworkx@bbqlinux.org>
pkgname=openhab-beta
_pkgver=2.0.0
pkgver=2.0.0_20160326
pkgrel=1
pkgdesc="openHAB2 open source home automation software"
arch=('any')
url="http://www.openhab.org/"
license=('EPL')
depends=('java-runtime-headless>=8')
makedepends=('unzip')

conflicts=('openhab-runtime' 'openhab-addons')

backup=('etc/openhab/conf/services/addons.cfg'
		'etc/openhab/conf/services/runtime.cfg')

source=("https://openhab.ci.cloudbees.com/job/openHAB-Distribution/lastSuccessfulBuild/artifact/distributions/openhab-online/target/openhab-online-${_pkgver}-SNAPSHOT.zip"
        "openhab.service")

noextract=("openhab-online-${_pkgver}-SNAPSHOT.zip")

sha1sums=('SKIP'
          '3494cf262f5b87dcff75044c8c2eee670a6f715c')

pkgver() {
    printf "${_pkgver}_%s" "$(date +%Y%m%d)"
}

prepare() {
	mkdir -p "$srcdir/openhab"
	cd "$srcdir/openhab"

	unzip "$srcdir/openhab-online-${_pkgver}-SNAPSHOT.zip"

}

package() {
	cd $pkgdir

    mkdir -p etc/openhab
	mkdir -p opt
	mkdir -p usr/lib/systemd/system

	cp $srcdir/openhab.service usr/lib/systemd/system

	cp -r $srcdir/openhab opt/

	mv opt/openhab/conf etc/openhab/conf
	ln -s /etc/openhab/conf opt/openhab/conf
    
    mv opt/openhab/addons etc/openhab/addons
	ln -s /etc/openhab/addons opt/openhab/addons
}
