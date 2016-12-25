# Maintainer: Yen Chi Hsuan <yan12125@gmail.com>
# Contributor: Alexander F Rødseth <xyproto@archlinux.org>
# Contributor: Daniel Micay <danielmicay@gmail.com>
# Contributor: frownlee <florez.brownlee@gmail.com>

pkgname=android-ndk-beta
_pkgname=${pkgname/-beta*/}
pkgver=r14_beta1
pkgrel=1
pkgdesc='Android C/C++ developer kit (beta)'
arch=('x86_64')
url='https://developer.android.com/ndk/'
license=('GPL' 'LGPL' 'custom')
options=('!strip' 'staticlibs')
backup=('etc/profile.d/android-ndk-beta.sh')
install="$pkgname.install"
depends=('ncurses5-compat-libs')
source=('android-ndk-beta.sh' "https://dl.google.com/android/repository/${_pkgname}-${pkgver/_/-}-linux-x86_64.zip")
sha256sums=('a6b0dae2d8016af6b731bc45a78489cdb3aab5d332c0395188887ee369aea5f5'
            '3b5c1ebe736c0c4726e746c20f96ba31df3cc8cbbedf69a3d1530987c8723f6e')

package() {
  install -d "$pkgdir/opt"
  mv "$_pkgname-${pkgver/_/-}" "$pkgdir/opt/$pkgname"

  install -Dm755 $pkgname.sh "$pkgdir/etc/profile.d/$pkgname.sh"

  # Fix broken permissions
  chmod -R o=g "$pkgdir/opt/$pkgname"
  find "$pkgdir/opt/$pkgname" -perm 744 -exec chmod 755 {} +
}

# vim:set ts=2 sw=2 et:
