pkgname=twp
pkgver=0.2.0
pkgrel=1
pkgdesc="Teeworlds Web Panel"
arch=(any)
url="http://cytral.hithub.io/twp"
license=('AGPL')
depends=(sqlite3 python2-flask-babel python2-flask-apscheduler python2-pillow
         python2-sqlalchemy python2-mergedict python2-singledispatch
         python2-flask-sqlalchemy python2-dateutil)
makedepends=(unzip)
install=twp.install
backup=(srv/twp/twp.conf)
source=("$pkgname-$pkgver.zip::https://github.com/CytraL/$pkgname/archive/$pkgver.zip"
        "twp.service")
md5sums=('SKIP'
         '5e360b65185bd12682f2947d421d3b7d')

package() {
	   # install systemd service file
    install -Dm644 "twp.service" "$pkgdir/usr/lib/systemd/system/twp.service"
    
       # enter and install files in the pkgdir
    install -dm755 "$pkgdir/srv/twp/"
    cd "$pkgdir/srv/twp/"
    cp -a "$srcdir/$pkgname-$pkgver"/* .
    
       # fix python2 calling
    sed -i 's:env python:&2:' twp.py
	sed -i 's:#!/usr/bin/python:&2:' twpl/teeworlds.py twpl/netstat.py
	
	   # make it executable
	chmod a+x twp.py
}
