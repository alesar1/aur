# Maintainer: Karel Louwagie <karel@louwagie.net>

pkgname=toggldesktop
pkgver=7.3.346
pkgrel=1
pkgdesc="Time Tracking Software."
arch=('x86_64')

depends=('libxss'
	'openssl'
	'poco'
	'qt5-base'
	'qt5-declarative'
	'qt5-location'
	'qt5-sensors'
	'qt5-svg'
	'qt5-webchannel'
	'qt5-webkit')

url='https://toggl.com/'
source=('removelibs.list'
	'toggldesktop.deb::https://toggl.com/api/v8/installer?app=td&platform=deb64&channel=stable'
	'toggldesktop.bin')

prepare() {
	    tar -xf data.tar.xz
	    for lib in `cat removelibs.list`
	    do
		rm -rf $srcdir/opt/toggldesktop/lib/$lib
	    done
}

package() {
	cp -a $srcdir/opt/ $srcdir/usr/ $pkgdir
	install -D -m 0755 toggldesktop.bin $pkgdir/usr/bin/toggldesktop
}

sha512sums=('5c8fc6fcc8d9905455cc54a61412dc772667599c5abab056d308223c54c85ef47afc3078acbb44ac84f8e1b31ccd838d245e3ce0a3037ddec9201549125f6847'
            'a814817f279473011412ed5bbcc876ccc89f5fc6cb29d61907c47f94262297c40594c2703bcb9180f52b21d7708b5e765b7cfc68faea96195acd1658082d622a'
            'b784a9beff75e0aab5b59f53c1d200c377a2df967b92762ddc371043940c09fba169642f3e0c066b49060d4cf62e6cf68305a5ad8ad73d120ea18f0fd280307f')
