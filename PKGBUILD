# Maintainer: Daniel Peukert <dan.peukert@gmail.com>
pkgname='wd5741'
pkgver='1'
pkgrel='1'
pkgdesc='Firmware update utility for WD Red drives'
arch=('x86_64' 'i686')
url='https://support.wdc.com/downloads.aspx?p=201&lang=en'
license=('custom:Copyright (C) 2013 Western Digital Corporation')
source_x86_64=("$pkgname::https://fichiers.touslesdrivers.com/40252/wd5741x64")
source_i686=("$pkgname::https://fichiers.touslesdrivers.com/40253/wd5741x32")
sha256sums_x86_64=('28eabf6382a5928c3f193c8a7ad48d691d068ee297832e6763d1ab8e7136ccf5')
sha256sums_i686=('d577316864c56bfc3b512d3ab4c8cbc9721d08863ee779f5fd8ee9a0b18f589d')

package() {
	install -dm755 "$pkgdir/usr/bin/"
	install -m755 "$srcdir/$pkgname" "$pkgdir/usr/bin/$pkgname"
}
