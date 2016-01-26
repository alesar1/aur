# Maintainer: Matthew McGinn <mamcgi@gmail.com>
pkgname=wxtoimg
pkgver=2.10.11
pkgrel=1
pkgdesc="software to decode APT and WEFAX signals from weather satellites"
arch=('x86_64' 'i686')
url="http://www.wxtoimg.com/"
license=('GPL')
depends=('wget')
provides=('wxtoimg' 'xwxtoimg')
source_x86_64=("http://wxtoimg.com/downloads/$pkgname-linux64-$pkgver-1.tar.gz")
source_i686=("http://wxtoimg.com/downloads/$pkgname-linux-$pkgver.tar.gz")
md5sums_x86_64=('773dcad83ac853e7ea622debcd99478d')
md5sums_i686=('278b7dc098188beec20bde2169162279')

prepare(){
	if [ $(uname -ar | grep -q x86_64) -eq 1 ]; then
			wget $source_x86_64
	else
			wget $source_i686
	fi
}

package() {
	mkdir -p ../pkg/$pkgname/usr/lib/$pkgname
	mkdir -p ../pkg/$pkgname/usr/bin
	mv etc usr ../pkg/$pkgname/usr/lib/$pkgname/
	ln -s /usr/lib/$pkgname/usr/local/bin/$pkgname ../pkg/$pkgname/usr/bin/xwxtoimg
	ln -s /usr/lib/$pkgname/usr/local/bin/$pkgname ../pkg/$pkgname/usr/bin
}
