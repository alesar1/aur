# Maintainer: robertfoster

pkgname=simonpi
pkgver=1.0.14
pkgrel=1
pkgdesc="A quick & dirty script to emulate Raspberry PI family devices on your laptop"
arch=(any)
url="https://github.com/M0Rf30/simonpi"
license=('GPL3')
depends=('coreutils' 'dnsmasq' 'dosfstools' 'e2fsprogs' 'file' 'grep' 'iproute2' 'iptables' 'libarchive' 'ovmf-arm' 'ovmf-aarch64' 'procps-ng' 'qemu-headless-arch-extra' 'sudo' 
'util-linux' 'wget')
makedepends=('git')
install=simonpi.install
source=("https://github.com/M0Rf30/simonpi/archive/$pkgver.tar.gz")

package() {
	cd $srcdir/$pkgname-$pkgver
	install -Dm755 simonpi $pkgdir/usr/bin/simonpi
	install -dm755 $pkgdir/opt/simonpiemu/
	cp -r simonpiemu/* $pkgdir/opt/simonpiemu/
	sed -i "s/OPT=./OPT=\/opt/g" $pkgdir/usr/bin/simonpi
}


md5sums=('307131767e57021592cc31981faca8ef')
