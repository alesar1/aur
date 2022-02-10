# Maintainer Adrian Woźniak <adrian.wozniak@ita-prog.pl>

pkgbase=amdvold-bin
pkgname=amdvold-bin
pkgver=1.0.9
pkgrel=2
pkgdesc="AMDGPU voltage management tool"
url="https://github.com/Eraden/amdgpud"
license=('MIT' 'Apache-2.0')
source=( "https://github.com/Eraden/amdgpud/releases/download/v${pkgver}/amdvold.tar.gz")
arch=('x86_64')
md5sums=( '209c9c752a5a688b4a8bc27189d32e69')
keywords=( 'amdgpu' 'controller' 'fan', 'overclocking', 'voltage')
optdepends=('amdmond-bin' 'amdguid-glow-bin' 'amdguid-wayland-bin' 'amdfand-bin')

build() {
    cd $srcdir/
    tar -xvf $srcdir/amdvold.tar.gz
}

package() {
    cd $srcdir/
    mkdir -p $pkgdir/usr/bin/
    mkdir -p $pkgdir/usr/lib/systemd/system/
    install -m 0755 $srcdir/amdvold $pkgdir/usr/bin
    install -m 0755 $srcdir/amdvold.service "$pkgdir/usr/lib/systemd/system/amdvold.service"
}

#vim: syntax=sh