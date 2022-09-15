# Maintainer: Eugene 'Vindex' Stulin <tech.vindex@gmail.com>

pkgname=amalthea-ldc2
pkgver=1.2.1
pkgrel=1
pkgdesc="Small general library for the D programming language"
arch=('x86_64')
url="https://gitlab.com/os-18/amalthea"
license=('Boost or LGPL3')
makedepends=('make' 'bash' 'chrpath' 'lsb-release' 'glib2')
depends=('ldc')
source=("$pkgname-$pkgver.tar.gz::$url/-/archive/v$pkgver/amalthea-v$pkgver.tar.gz")
sha256sums=('59068d2a0a97df5036caa55db5af437a998bcb9fa4149fb7981b65ce2e496e38')

build() {
    cd "amalthea-v$pkgver"
    make || return 1
}

package() {
    # cd "${pkgname}-${pkgver}"
    cd "amalthea-v$pkgver"
    make DESTDIR=$pkgdir INCDIR=include/dlang/ldc install || return 1
}

