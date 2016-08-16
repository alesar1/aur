# Maintainer: Nikita Ignatovich <nikita@ignatovich.me>
# Contributor: Nikita Ignatovich <nikita@ignatovich.me>
# Based on package veracrypt-hook 5.1-2
pkgname=veracrypt-hook-nonroot
pkgver=1.0
pkgrel=1
pkgdesc="Extensive hook for operations on a veracrypt encrypted non root devices"
arch=(any)
url="https://veracrypt.codeplex.com/"
license=('GPL')
depends=(mkinitcpio veracrypt)
conflicts=('veracrypt-hook')
install=${pkgname}.install
source=(veracrypt_hook veracrypt_install)
sha512sums=('fc36ea94a02e801141a41a9063385f17a84c5d1ad44dbb1567cad77ae31bb431ba36c88bfb86d80f87a185f48fd24140a636be117967a279673ee879a286be34'
            '22c513b19c7b3170497f54799487b61b34180db1c2d45edef3ef744a551e219685d838bf191be47f7503e7e7e8b9a6ee77f4fe3d5eb74105e943387605af10cb')

package() {
    install -o root -g root -D ${srcdir}/veracrypt_hook ${pkgdir}/usr/lib/initcpio/hooks/veracrypt
    install -o root -g root -D ${srcdir}/veracrypt_install ${pkgdir}/usr/lib/initcpio/install/veracrypt
}

