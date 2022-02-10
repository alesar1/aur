# Maintainer Adrian Woźniak <adrian.wozniak@ita-prog.pl>

pkgbase=amdguid-glow-bin
pkgname=amdguid-glow-bin
pkgver=1.0.9
pkgrel=1
pkgdesc="AMDGPU temperature and fan speed monitoring tool"
url="https://github.com/Eraden/amdgpud"
license=('MIT' 'Apache-2.0')
source=( "https://github.com/Eraden/amdgpud/releases/download/v${pkgver}/amdguid-glow.tar.gz")
arch=('x86_64')
md5sums=( '8d6ac71806be9b3aa6dd66f9f8647939')
keywords=( 'amdgpu' 'controller' 'fan', 'overclocking', 'voltage')
depends=('amdfand-bin')
optdepends=('amdmond-bin' 'amdvold-bin')

build() {
    cd $srcdir/
    tar -xvf $srcdir/amdguid-glow.tar.gz
}

package() {
    cd $srcdir/
    mkdir -p $pkgdir/usr/bin/
    mkdir -p "$pkgdir/usr/lib/systemd/system"
    install -m 0755 $srcdir/amdguid $pkgdir/usr/bin
    install -m 0755 $srcdir/amdgui-helper $pkgdir/usr/bin
    install -m 0755 $srcdir/amdgui-helper.service "$pkgdir/usr/lib/systemd/system/amdgui-helper.service"
}

#vim: syntax=sh